/* 
 * Functions for Cache Simulator.
 * Kevin Kim
 * kkim170
 */

#include "csim_fns.h"
#include <algorithm>
#include <cstdio>
#include <iostream>
#include <math.h>
#include <map>
#include <string>
#include <vector>

#define walloc "write-allocate"
#define nwalloc "no-write-allocate"
#define wt "write-through"
#define wb "write-back"

bool check_pow(int arg) {
   //check if positive
   if (arg < 1) return false;
   //check if not power of 2
   if ((arg & (arg - 1)) != 0) return false;
   //else
   return true;
 }

bool check_args(int sets, int blocks, int bytes, string alloc, string write, string evicts) {
  if (!check_pow(sets) || !check_pow(blocks) || !check_pow(bytes) ||
       bytes < 4) {
    std::cerr << "Invalid number in arguments (need to be powers of 2)\n";
    return true;
  }
    
  if (alloc.compare(walloc) != 0 && alloc.compare(nwalloc) != 0) {
    std::cerr << "Argument 4 is invalid\n";
    return true;
  }
 
  if (write.compare(wt) != 0 && write.compare(wb) != 0)  {
    std::cerr << "Argument 5 is invalid\n";
    return true;
  }
   
  if(alloc.compare(nwalloc) == 0 && write.compare(wb) == 0) {
    std::cerr << "Cannot specify both write-back and no-write-allocate\n";
    return true;
  }
  if (evicts.compare("lru") != 0 && evicts.compare("fifo") != 0) {
    std::cerr << "Argument 6 is invalid\n";
    return true;
  }
  //else
  return false;
}

unsigned Cache::count_bits(unsigned n) {
  int num_bits = 0;
  while (!(n & 1)) {
    n = n >> 1;
    num_bits++;
  }
  return num_bits;
}

Cache::Cache(unsigned sets, unsigned blocks, unsigned bytes, bool write_through, bool write_alloc, bool           evict_policy) {
  // initalize data
  this->sets = sets;
  this->blocks = blocks;
  this->bytes = bytes;
  this->set_bits = count_bits(sets);
  this->byte_bits = count_bits(bytes);
  this->write_through = write_through;
  this->write_alloc = write_alloc;
  this->evict_policy = evict_policy;
  this->load_hits = 0;
  this->load_miss = 0;
  this->store_hits = 0;
  this->store_miss = 0;
  this->total_cycles = 0;
  // Make empty block
  Block init_block;
  init_block.dirty = false;
  init_block.addr = -1; //empty
  init_block.timestamp = 0;
  // Make set of empty blocks
  Set init_set;
  init_set.blocks.assign(blocks, init_block);
  init_set.heuristic = -1; //empty
  // Make empty cache
  this->sim_cache.assign(sets, init_set);
  // set timestamps in order
  for (unsigned int i = 0; i < sets; i++) {
    for (unsigned int j = 0; j < blocks; j++) {
      this->sim_cache[i].blocks[j].timestamp = blocks - j - 1;
    }   
  }
}

std::pair<unsigned, unsigned> Cache::get_address(unsigned hex) {
  //first is tag, second is index
  unsigned index = (hex & (((1 << this->set_bits) - 1) << this->byte_bits)) >> this->byte_bits;
  unsigned tag = (hex & ~((1 << (this->set_bits + this->byte_bits)) - 1)) >> (this->set_bits + this->byte_bits);
  std::pair<unsigned, unsigned> ret (tag, index);
  return ret;
}

void Cache::print_summary() {
  //int cycles = (loadhits + storehits + (storemiss*100) + (loadmiss * 100 * bytes/4))
  std::cout << "Total loads: " << (this->load_hits + this->load_miss) << std::endl;
  std::cout << "Total stores: " << (this->store_hits + this->store_miss) << std::endl;
  std::cout << "Load hits: " << this->load_hits << std::endl;
  std::cout << "Load misses: " << this->load_miss << std::endl;
  std::cout << "Store hits: " << this->store_hits << std::endl;
  std::cout << "Store misses: " << this->store_miss << std::endl;
  std::cout << "Total cycles: " << this->total_cycles << std::endl;
}

void Cache::load(std::pair<unsigned, unsigned> ad) {
  //actually load
  int hits = this->evict(true, ad);
  
  if (hits != 1) {
    // update miss count
    (this->load_miss)++;
    if (hits == 0) {
      // dirty block
      this->total_cycles += this->bytes * 50; // 2 times
    } else {
      // clean block
      this->total_cycles += this->bytes * 25; // bytes/4 * 100
    }
  } else {
    // update hit count
    (this->load_hits)++;
  }

  (this->total_cycles)++; // load needs 1 more cycle
}

void Cache::store(std::pair<unsigned, unsigned> ad) {
  //actually store
  int hits = this->evict(false, ad);

  if (hits != 1) {
    // update miss count
    (this->store_miss)++;
    if (this->write_alloc) {
      // dirty block
      if (hits == 0) {
        this->total_cycles += this->bytes * 50; // 2 times
      } else {
        // clean block
        this->total_cycles += this->bytes * 25; // bytes/4 * 100
      }
    }
  } else {
    // hit
    (this->store_hits)++;
  }
  // "save" data to main memory
  // ACTUALLY save to cache
  if (this->write_alloc) {
    (this->total_cycles)++;
    if (this->write_through) {
      this->total_cycles += 100;
    }
  } else {
    this->total_cycles += 100;
    if (hits == 1 && this->write_through) {
      (this->total_cycles)++;
    }
  }
}

int Cache::evict(bool load, std::pair<unsigned, unsigned> ad) {
  // find address within cache
  std::vector<Set>::iterator current = this->sim_cache.begin();
  advance(current, ad.second);
  std::vector<Block>::iterator target = std::find_if(current->blocks.begin(), current->blocks.end(), [&] (const Block &cur_block) {
    return cur_block.addr == ad.first;
  });

  int ret = 0;
  // case 1: cache has address (hit)
  if (target != current->blocks.end()) {
    ret = 1;
  } else {
  // case 2: cache does not have address (miss)
    // find empty block
    target = std::find_if(current->blocks.begin(), current->blocks.end(), [&] (const Block &cur_block) {
      return cur_block.addr == -1;
    });
    // find oldest block (maximum timestamp)
    if (target == current->blocks.end()) {
      target = std::max_element(current->blocks.begin(), current->blocks.end(), [] (const Block &lhs, const Block &rhs) {
      return lhs.timestamp < rhs.timestamp;
      });
    }
  }
  // find index of target (by subtracting iterators)
  int index = target - current->blocks.begin();
  // if miss, then determine whether target is dirty or clean
  if (ret != 1) {
    if (current->blocks[index].dirty) {
      ret = 0; // miss dirty
    } else {
      ret = -1; // miss clean
    }
  }
  
  // handle no-write-allocate policy
  if (ret != 1 && !(this->write_alloc) && !load) {
    return ret;
  }
  
  // handle write-back policy
  if (!this->write_through) {
    if (load && ret != 1) {
      current->blocks[index].dirty = false;
    }
    if (!load) {
      current->blocks[index].dirty = true;
    }
  }
  
  // handle write-allocate policy
  if (ret != 1 && (load || (this->write_alloc))) {
    current->blocks[index].addr = ad.first;
  }
  
  // handle eviction policy (LRU or FIFO)
  if (this->evict_policy) {
    // lru, update timestamps and set currently accessed Block to 0
    for (std::vector<Block>::iterator it = current->blocks.begin(); it != current->blocks.end(); it++) {
      if (it->timestamp < current->blocks[index].timestamp) {
        (it->timestamp)++;
      }
    }
    current->blocks[index].timestamp = 0;
    current->heuristic = index;
  } else {
    // fifo, update timestamps
    if(ret != 1) {
      for (std::vector<Block>::iterator it = current->blocks.begin(); it != current-> blocks.end(); it++) {
        (it->timestamp)++;
        (it->timestamp) %= this->blocks;
      }
      current->blocks[index].timestamp = 0; // set first in
    }
  }
  return ret;
}

void Cache::run(std::istream& stream) {
  // temporary buffer for address
  std::pair<unsigned, unsigned> current;
  // simulation starts here
  for (std::string line; std::getline(stream, line);) {
    // get address
    std::string option = line.substr(0, 1);
    std::string hex_string = line.substr(4, 8);
    unsigned hex = std::stoul(hex_string.c_str(), NULL, 16);
    current = this->get_address(hex);
    // operate, based on option
    if (option.compare("l")) {
      this->store(current);
    } else {
      this->load(current);
    }
  }
  // print metrics
  this->print_summary();
}
