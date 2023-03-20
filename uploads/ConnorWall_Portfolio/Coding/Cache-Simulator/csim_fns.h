/* 
 * Header file for functions we will use in Cache Simulator.
 * Kevin Kim
 * kkim170
 */
#ifndef CACHE_SIMULATOR_H
#define CACHE_SIMULATOR_H

#include <string>
#include <vector>
using std::string;

/*
 * data structure for Block, within Set.
 */
struct Block {
  bool dirty;
  long addr;
  unsigned timestamp;
};

/*
 * data structure for Set, within a cache.
 */
struct Set {
  std::vector<Block> blocks;
  // this value is prev. block for lru and current block for fifo
  long heuristic;
};

/*
 * checks if an integer is a positive power of 2.
 *
 * Parameters:
 *  arg - integer being checked
 *
 * Returns:
 *  boolean value of truth condition
 */
bool check_pow(int arg);

/*
 * checks if the arguments given is valid.
 *
 * Parameters:
 *  int sets
 *  int blocks
 *  int bytes
 *  string alloc
 *  string write
 *  string evicts
 *
 *  Returns:
 *    true if any arguments are invalid, false if all are valid
 */
bool check_args(int sets, int blocks, int bytes, string alloc, string write, string evicts);

/*
 * Class for cache data structure and operations.
 */
class Cache {
  private:
    // cache settings
    unsigned sets;
    unsigned blocks;
    unsigned bytes;
    unsigned set_bits;
    unsigned byte_bits;
    bool write_through;
    bool write_alloc;
    bool evict_policy;
    // cache, which is a vector of vector (Set) of Blocks.
    std::vector<Set> sim_cache;
    // to be printed
    int load_hits;
    int load_miss;
    int store_hits;
    int store_miss;
    int total_cycles;

  public:
    /*
     * Cache sim constructor
     */
    Cache(unsigned sets, unsigned blocks, unsigned bytes, bool write_through, bool write_alloc, bool evict_policy);
    /*
     * counts the number of bits (does log2(n) precisely)
     *
     * Parameters:
     *  unsigned n - number being operated on
     *
     * Returns:
     *  number of bits
     */
    unsigned count_bits(unsigned n);
    /*
     * returns the 'address' object of a hex value
     * as a std::pair of unsigned ints.
     *
     * Parameters:
     *  unsigned hex - the hex value being operated on
     *
     * Returns:
     *  A pair, where first is tag and second is index
     */
    std::pair<unsigned, unsigned> get_address(unsigned hex);
    /*
     * evict a block on the cache based on policy,
     * then return state of block (dirty or clean).
     *
     * Parameters:
     *  bool load - true if option is "l", false if option is "s"
     *  std::pair<unsigned, unsigned> ad - address that may be evicted.
     *
     * Returns:
     *  1 if hit, 0 if evicted dirty, and -1 if written to clean.
     */
    int evict(bool load, std::pair<unsigned, unsigned> ad);
    /*
     * simulates the "load" operation of a cache.
     *
     * Parameters:
     *  std::pair<unsigned, unsigned> ad - address being loaded
     */
    void load(std::pair<unsigned, unsigned> ad);
    /*
     * simulates the "store" operation of a cache.
     *
     * Parameters:
     *  std::pair<unsigned, unsigned> ad - address being stored
     */
    void store(std::pair<unsigned, unsigned> ad);
    /*
     * runs the cache simulator, line-by-line from trace.
     *
     * Parameters:
     *  std::istream& stream - std::cin
     */
    void run(std::istream& stream);
    /*
     * prints the summary of the cache simulator.
     */
    void print_summary();
};
#endif
