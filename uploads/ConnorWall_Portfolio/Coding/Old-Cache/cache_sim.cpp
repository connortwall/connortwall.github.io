#include <stdlib.h>
#include <math.h>  
#include "cache_sim.h"
#include <map>
#include <vector>



cache::cache(int nsets, int blocks_per_set, int block_size, bool write_allocate, bool write_back, bool lru) {
  set = nsets;
  bps = blocks_per_set;
  size - block_size;
  allocte = write_allocate;
  back = write_back;
  least = lru;
  
  std::vector<cache_set> sets;
  sets.resize(nsets);
  for (int i = 0; i < nsets; i++) {
    //each set array of block ids/tags
    sets[i].blocks.resize(blocks_per_set);
    for (block b : sets[i].blocks) {
      b.id = -1;
    }
  }  
  //figure out size of tag, index, offset
  offset_mask = block_size - 1; //subtract one to set all lower bits to 1
  index_shift = (int) log2(block_size);  
  index_mask = nsets - 1;
  tag_shift = index_shift + (log2(nsets));
  tag_mask = blocks_per_set - 1;
}

cache::~cache(){
//  delete[] sets;
}

void *cache::read(const unsigned int address) {
  loads++;
  cycles++;
  void *value = NULL;
  // is the address in cache
  //if true return value in cache using address to get inside cache
  if (in_cache(address)) {
    value = read_from_cache(address);
    l_hits++;
    return value;
  }
  //if false, 
  // use address to fetch from memory
  // place into return value
  // save value in the cache
  value = read_from_memory(address);
  //check if cache is full before saving
  if(cache_full(address)) { //may have multiple sets, gives info of what to evict
    //  evict certain address-value pair (attached to single block)
    //TODO
      evict_for(address);
    }
  }
  save_to_cache(address, value);//only save to cache not dirty
  l_misses++;
  return value;//placeholder
}

void cache::write(const unsigned int address, void *data) {
  stores++;
  cycles++;
  if(write_to_cache(address, data)) {
    s_hits++;
  } else {
    s_misses++;
  }
  //flush cache which writes it to 
  return;
}

bool cache::write_to_cache(const unsigned int address, void *data) {
  //cache hit
  if(in_cache(address)) {
    save_to_cache(address, data);
    return true;
  }
  
  //cache miss
  //no_write_allocate
  if(!write_allocate) {
    write_to_memory(address, data); //write_through default
    return false;
  }
  //write_allocate
  //write_back
  if(write_back){
    //check if cache is full
    if(cache_full(address)) { //may have multiple sets, gives info of what to evict
    //  evict certain address-value pair (attached to single block)
    //TODO
      evict_for(address);
    }
    save_to_cache(address, data);
  }
  //write_through
  else {
    save_to_cache(address, data);
    write_to_memory(address, data);
  }
  return false;
}

void *cache::read_from_cache(const unsigned int address) {
  int offset = address & offset_mask;
  int index = (address >> index_shift) & (index_mask);
  int tag = (address >> (tag_shift)) & (tag_mask);
  return sets[index].blocks[tag].dt;
}

void *cache::read_from_memory(const unsigned int address) {
  return NULL;//no-op
}

void cache::write_to_memory(const unsigned int address, void *data) {
  return;//no-op
}

void cache::save_to_cache(const unsigned int address, void *data) {
  int offset = address & offset_mask;
  int index = (address >> index_shift) & (index_mask);
  int tag = (address >> (tag_shift)) & (tag_mask);
  sets[index].blocks[tag].dt = data; 
  return;
}

bool cache::cache_full(const unsigned int address) {
//check for free block for address
//-1 is free
for ()
  return false;
}

void cache::evict_for(const unsigned int address) {
  int offset = address & offset_mask;
  int index = (address >> index_shift) & (index_mask);
  int tag = (address >> (tag_shift)) & (tag_mask);

  //iteration ints
  int set_no = 0;
  int block_no = 1;

  int lowest = sets[0].blocks[0].time_added;
  int lowest_set = 0;
  int lowest_block = 0;

  for(set_no; set_no < set; set_no++) {
    for(block_no; block_no < bps; block_no++) {
      // if lowest is greater than current, replace
      if(lowest > sets[set_no].blocks[block_no].time_added) {
	lowest = sets[set_no].blocks[block_no].time_added;
	lowest_set = set_no;
	lowest_block = block_no;
      }
    }
  }

  if(allocate) {
    write_to_memory(sets[lowest_set].blocks[lowest_block].id, sets[lowest_set].blocks[lowest_block].dt);
  }

  sets[lowest_set].blocks[lowest_block].id = address;
  
  
  return;
}

bool cache::in_cache(const unsigned int address) {
  int offset = address & offset_mask;
  int index = (address >> index_shift) & (index_mask);
  int tag = (address >> (tag_shift)) & (tag_mask);

  if((index < set) && (tag < bps)) {
    return true;
  }

  return false;
}
