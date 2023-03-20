tCC = gcc

# Note: we use -std=gnu11 rather than -std=c11 in order to use the
# sigjmp_buf data type
CFLAGS = -no-pie -g -Wall -Wextra -pedantic -std=gnu11
ASMFLAGS = -no-pie -g
LDFLAGS = -no-pie

EXES = c_textsearch asm_textsearch c_textsearch_fns_tests asm_textsearch_fns_tests

%.o : %.c
	$(CC) $(CFLAGS) -c $*.c -o $*.o

%.o : %.S
	$(CC) $(ASMFLAGS) -c $*.S -o $*.o

all : $(EXES)

# targets for executables

c_textsearch : c_textsearch_fns.o c_textsearch.o
	$(CC) $(LDFLAGS) -o $@ c_textsearch_fns.o c_textsearch.o

c_textsearch_fns_tests : c_textsearch_fns.o textsearch_fns_tests.o tctest.o
	$(CC) $(LDFLAGS) -o $@ c_textsearch_fns.o textsearch_fns_tests.o tctest.o

test_c : c_textsearch_fns_tests
	./c_textsearch_fns_tests

asm_textsearch : asm_textsearch_fns.o asm_textsearch.o
	$(CC) $(LDFLAGS) -o $@ asm_textsearch_fns.o asm_textsearch.o

asm_textsearch_fns_tests : asm_textsearch_fns.o textsearch_fns_tests.o tctest.o
	$(CC) $(LDFLAGS) -o $@ asm_textsearch_fns.o textsearch_fns_tests.o tctest.o

test_asm : asm_textsearch_fns_tests
	./asm_textsearch_fns_tests

# targets for object files

c_textsearch_fns.o : c_textsearch_fns.c textsearch_fns.h

c_textsearch.o : c_textsearch.c textsearch_fns.h tctest.h

asm_textsearch_fns.o : asm_textsearch_fns.S

asm_textsearch.o : asm_textsearch.S

tctest.o : tctest.c tctest.h

textsearch_fns_tests.o : textsearch_fns_tests.c textsearch_fns.h tctest.h

clean :
	rm -f c_textsearch c_textsearch_fns_tests *.o
