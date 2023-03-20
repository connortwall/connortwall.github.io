/*
 * Main method for the implementation of
 * Cache Simulator
 * Kevin Kim
 * kkim170
 */

#include "csim_fns.h"
#include <cstdio>
#include <string>
#include <iostream>
#include <vector>

using namespace std;
#define walloc "write-allocate"
#define nwalloc "no-write-allocate"
#define wt "write-through"
#define wb "write-back"

int main (int argc, char* argv[]) {
  //check for correct number of arguments
  if (argc != 7) {
    cerr << "Invalid number of command-line arguments\n";
    exit(1);
  }
  
  unsigned sets = atoi(argv[1]);
  unsigned blocks = atoi(argv[2]);
  unsigned bytes = atoi(argv[3]);
  string alloc(argv[4]);
  string write(argv[5]);
  string evicts(argv[6]);

  //check for correct value of arguments
  if (check_args(sets, blocks, bytes, alloc, write, evicts)) {
    exit(1);
  }
  
  bool write_through = false;
  bool write_alloc = false;
  bool evict_policy = false;

  if (write == wt) {
    write_through = true;
  }
  
  if (alloc == walloc) {
    write_alloc = true;
  }

  if (evicts == "lru") {
    evict_policy = true;
  }

  //begin simulation:
  Cache cache_simulation(sets, blocks, bytes, write_through, write_alloc, evict_policy);
  cache_simulation.run(std::cin);
  exit(0);
}
