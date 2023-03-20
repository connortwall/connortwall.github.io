#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <vector>
#include <iostream>
#include "cache_sim.h"

int main(int argc, char **argv) {
  if (argc != 7) {
    return -1;
  }

  //variables for command-line arguments
  //send to function to turn string of int into int
  int sets = string_to_int(argv[1]);
  int blocks = string_to_int(argv[2]);
  int bytes = string_to_int(argv[3]);
  
  if (sets == -1 || !power_two(sets)
    || blocks == -1 || !power_two(blocks)
    || bytes == -1 || !power_two(bytes) || bytes < 4) {
    return -1;
  }

  bool write_allocate = strcmp(argv[4], "write-allocate") == 0;
  bool write_back = strcmp(argv[5], "write-back") == 0;
  bool lru = strcmp(argv[6], "lru") == 0;

  if ((!write_allocate && strcmp(argv[4], "no-write-allocate") != 0)
  || (!write_back && strcmp(argv[5], "write-through") != 0)
  || (!lru && strcmp(argv[6], "fifo") != 0)
  || (write_back && !write_allocate)) {
    std::cerr << "bad input" << std::endl;
    return -1;
  }

  std::vector<command>commands = parse(std::cin);

  // construct cache
  cache c(sets, blocks, bytes, write_allocate, write_back, lru);
  
  //function that actually runs tests
  cache_test(c, commands);
  return 0;
}

int string_to_int(char *s) {
  char * end;
  int i = strtol(s, &end, 10);
  if (!*end && i > 0) {
    return i;
  }
  return -1;
}

bool power_two(int num) {
  while (num > 1) {
    if ((num % 2) != 0) {
      return false;
    }
    num = num / 2;
  }
  return true;
}

std::vector<command> parse (std::istream &in) {
  std::vector<command>cmds;
  std::string line;
  while (std::getline(in, line)) {
    std::string write = line.substr(0, line.find(" ")); 
    std::string address = line.substr(2, line.find(" ", 2));
    command cmd = {write == "s", (unsigned int) strtol(address.c_str(), 0, 16)};
    cmds.push_back(cmd);
    //test parse
    //printf("%d 0x%08x \n", (int) cmd.write, cmd.address);
  }
  return cmds;
}

void cache_test(cache c, std::vector<command> commands) {
  for(command cmd : commands) {
    if (cmd.write) {
      c.write(cmd.address, 0);
    }
  
    else {
      c.read(cmd.address);
    }
  }

  printf("Total loads: %d", c.loads);
  printf("Total stores: %d", c.stores);
  printf("Load hits: %d", c.l_hits);
  printf("Load misses: %d", c.l_misses);
  printf("Store hits: %d", c.s_hits);
  printf("Store misses: %d", c.s_misses);
  printf("Total cycles: %d", c.cycles);
  

}


