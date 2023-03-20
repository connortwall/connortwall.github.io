# Cache Simulator

This is a cache simulator created to examine the efficiency of different cache configurations. The simulator supports up to 18 different configurations that come from these categories:

1. Direct-mapped (256 sets of 1 block), 4-way set-associative (64 sets of 4 blocks), or fully associative (1 set of 256 blocks)
2. Write-allocate and write-back, write-allocate and write-through, or no-write-allocate and write-through
3. LRU (least recently used) or FIFO (first-in, first-out)

## Usage

First make the simulator with either `make` or `make csim`

Then, run the cache simulator with the following parameters:
```./csim a b c wa wb policy < sometracefile```
- **a** is the number of sets in the cache
- **b** is the number of blocks in each set
- **c** is the number of bytes in each block
- **wa** is either write-allocate or no-write-allocate
- **wb** is either write-back or write-through
- **policy** is either lru or fifo

For example, a configuration with 256 sets of 4 blocks each (aka a 4-way set-associative cache), with each block containing 16 bytes of memory, and the cache performing write-allocate but no write-through (so it does write-back instead) with lru eviction would be run as such: ```./csim 256 4 16 write-allocate write-back lru < sometracefile```

Example trace files are given in the tests folder. (Thank you Professor Hovemeyer!)

The simulator will output a summary of the loads/stores and hits/misses in the following format:
```
Total loads: (number)
Total stores: (number)
Load hits: (number)
Load misses: (number)
Store hits: (number)
Store misses: (number)
Total cycles: (number)
```
