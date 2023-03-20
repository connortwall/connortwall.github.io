#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <cstdarg>
#include <cerrno>
#include <cstdint>
#include <elf.h>
#include <sys/mman.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <sys/unistd.h>
#include <fcntl.h>
#include "elf_names.h"

int main(int argc, char **argv) {
  if(argc > 2) {
    printf("Error: Too many command-line arguments\n");
    return -1;
  }
  
  char *filename = argv[1];
  int fd = open(filename, O_RDONLY);
  size_t file_size = 0;
  struct stat statbuf;
  //collect metadata about file using fstat
  int rc = fstat(fd, &statbuf);
  //test if there is an error
  if (rc != 0) {
    perror("Could not read file\n");
    return -1;
  } else {
    file_size = statbuf.st_size;
  }


  //mmap uses metadata from fstat to make file available in memory
  //mmap returns pointer to where file is accessible in memory
  //file_size = number of bytes in file
  //data = pointer to file in memory
  unsigned char *data = (unsigned char *) mmap(NULL, file_size, PROT_READ, MAP_PRIVATE, fd, 0);
  //test if data failed to map
  if (data == MAP_FAILED) {
    perror("File can not be mapped\n");
    return -1; 
  }


  Elf64_Ehdr *file_header = (Elf64_Ehdr *) (data);
  //check if out of bounds
  if(sizeof(Elf64_Ehdr) > file_size) {
    printf("Not an ELF file\n");
    return 0;
  } //magic number
  if(file_header->e_ident[EI_MAG0] != 0x7f
    || file_header->e_ident[EI_MAG1] != 'E' 
    || file_header->e_ident[EI_MAG2] != 'L'
    || file_header->e_ident[EI_MAG3] != 'F') {
    printf("Not an ELF file\n");
    return 0;
  }

  
 
  printf("Object file type: %s\n", get_type_name(file_header->e_type));
  printf("Instruction set: %s\n", get_machine_name(file_header->e_machine));

  //endianness
  int endianness = file_header->e_ident[EI_DATA];
  if (endianness == 1) {
    printf("Endianness: Little endian\n");
  }
  else {
    printf("Endianness: Big endian\n");
  }
    


  unsigned char *sec_header = data + file_header->e_shoff;
  Elf64_Shdr *section = (Elf64_Shdr *) sec_header;
  Elf64_Shdr *section_names = &section[file_header->e_shstrndx];
  unsigned char *section_name_location = data + section_names->sh_offset;

  Elf64_Shdr *symbol_tbl = NULL;
  Elf64_Shdr *string_tbl = NULL;  

  for(int i = 0; i < file_header->e_shnum; i++) {
    //find symbol and string tables
    std::string secname = (const char *)(section[i].sh_name + section_name_location);
    if (secname == ".symtab") {
      symbol_tbl = &section[i];
    }
    else if (secname == ".strtab") {
      string_tbl = &section[i];
    }
    
    printf("Section header %i: name=%s, type=%i, offset=%lx, size=%lx\n", 
	 i, (section[i].sh_name + section_name_location), section[i].sh_type, section[i].sh_offset, section[i].sh_size);
    
  }

  
  
  
  Elf64_Sym *sym_t = (Elf64_Sym *)(data + symbol_tbl->sh_offset);
  unsigned char *str_tbl = (unsigned char *)(data + string_tbl->sh_offset);
  for(int i = 0; i < (int)((symbol_tbl->sh_size)/sizeof(Elf64_Sym)); i++) {
    printf("Symbol %i: name=%s, size=%lx, info=%lx, other=%lx\n", i, str_tbl + sym_t[i].st_name, sym_t[i].st_size, (long unsigned int) sym_t[i].st_info, (long unsigned int) sym_t[i].st_other);
  }
}
