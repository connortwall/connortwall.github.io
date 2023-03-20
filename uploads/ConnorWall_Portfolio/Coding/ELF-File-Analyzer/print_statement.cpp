//TODO: make array/vector for structs
//TODO: figure out proper data types for variables in structs
struct section_header {
  char *name;
  int type;
  char *offset;
  char *size;
};

struct symbol {
  char *name;
  int size;
  char *info;
  char *other;
};
  
void print_summary (char *objtype, char *machtype, char* endianness, section_header *header_summary, symbol *symbol_summary) {
  printf("Object file type: %s\n", objtype);
  printf("Instruction set: %s\n", machtype);
  printf("Endianness: %d\s", endianness);

  for (int i = 0; i < header_summary.length; i++) {
    printf("Section header %i: name=%lx, type=%lx, offset=%lx, size=%lx\n", i, header_summary[i].name, header_summary[i].type, header_summary[i].offset,
	   header_summary[i].size);
  }

  for (int i = 0; i < symbol.length; i++) {
    printf("Symbol %i: name=%lx, size=%lx, info=%lx, other=%lx\n", i, symbol_summary[i].name, symbol_summary[i].size, symbol_summary[i].info, symbol_summary[i].other);
  }
}
