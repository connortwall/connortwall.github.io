#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <vector>
#include <iostream>


/*
 * Struct representing a block in a cache
 * 
 * Contains:
 *   id - unsigned int representing the id bit of the data from memory
 *   data - char array of the data stored in the block
 *   time_added - unsigned int representing how recently the block was filled/replaced
 */
typedef struct _block {
  unsigned int id;
  unsigned char* dt;
  unsigned int time_added;
} block;

/*
 * Struct representing a set in cache
 *
 * Contains:
 *   block - a vector of block structs
 */
typedef struct _cache_set {
  std::vector<block> blocks;
} cache_set;

/*
 * Struct for command-line arguments
 *
 * Contains:
 *   writes - whether the address should be saved (true) or loaded (false)
 *   address - address given to compare data in memory vs that in cache
 */
typedef struct _command {
  bool write;
  unsigned int address;
} command;

/* 
 * Class for the cache
 */
class cache {
    //variables to track metadata
  int offset_mask;
  int index_shift;
  int index_mask;
  int tag_shift;
  int tag_mask;

  //variables so all functions can access command line calls
  int set;
  int bps;
  int size;
  bool allocate;
  bool back;
  bool least;

  //initialize vector
  std::vector<cache_set> sets;
  

  public:

  /*
   * Creates a cache.
   *
   * Parameters:
   *   nsets - int indicating the number of sets in the cache.
   *   blocks_per_set - int indicating the number of blocks in each set.
   *   block_size - int indicating the number of bytes in each block.
   *   write_allocate - bool indicating whether the cache is write_allocate (true) or no_write_allocate (false)
   *   write_back - bool indicating whether the cache is write_back (true) or write_through (false)
   *   rlu - bool indicating whether the cache evicts based on rlu (true) or fifo (false)
   *
   * Returns:
   *   None
   */
  cache(int nsets, int blocks_per_set, int block_size, bool write_allocate, bool write_back, bool lru);

  /*
   * Deletes the cache.
   *
   * Parameters:
   *   None  
   *
   * Returns:
   *   None
   */
  ~cache();

  /*
   * Reads specific data, recording whether or not the data was found in the cache (cache hit or miss).
   *
   * Parameters:
   *   address - constant unsigned int indicating a specific point in memory.
   *
   * Returns:
   *   0
   */
  void *read(const unsigned int address);

  /*
   * Writes data into the cache.
   *
   * Parameters:
   *   address - unsigned int indicating a specific point in memory.
   *   data - pointer pointing at data to be written into the cache.
   *
   * Returns:
   *   0
   */
  void write(const unsigned int address, void *data);
  
   /*
   * Whether the data was written to the cache or not.
   *
   * Parameters:
   *   address - unsigned int indicating a specific point in memory.
   *   data - pointer pointing at data to be written into the cache.
   *
   * Returns:
   *   true if written, false if not
   */
  bool write_to_cache(const unsigned int address, void *data);
  
  /*
   * Read data from cache.
   *
   * Parameters:
   *   address - unsigned int indicating a specific point in memory.
   *
   * Returns:
   *   nothing
   */
  void read_from_cache(const unsigned int address);
  
  void read_from_memory(const unsigned int address);
    
  void write_to_memory(const unsigned int address, void *data);
  
  void save_to_cache(const unsigned int address, void *data);
  
  bool cache_full(const unsigned int address);
  
  void evict_for(const unsigned int address);
  
  bool in_cache(const unsigned int address);
 
  //std::vector<cache_set> sets;

  //global ints to hold number of index and offset bits
  int loads;
  int stores;
  int l_hits;
  int l_misses;
  int s_hits;
  int s_misses;
  int cycles;
  
};

/*
 * Converts a string to an int
 *
 * Parameters:
 *   s - char array of string that needs to be converted
 *
 * Returns:
 *   int that the string represented
 */
int string_to_int(char *s);

/*
 * Tests an int to discern whether or not it is a power of two
 *
 * Parameters:
 *   num - int being tested
 *
 * Returns:
 *   bool indicating whether the number is a value of two (true) or not (false)
 */
bool power_two(int num);

/*
 * Test function to see if cache is working properly
 *
 * Parameters:
 *   c - the cache being tested
 *   commands - data that the cache is being compared against
 */
void cache_test(cache c, std::vector<command> commands);

/*
 * Takes data & addresses from a trace and puts it in the command vector
 *
 * Parameters:
 *   &in - dereferenced stream pointer
 *
 * Returns:
 *   command vector
 */
std::vector<command> parse (std::istream &in);

