CC = gcc
CPP = g++

CPPFLAGS = -no-pie -g -Wall -Wextra -pedantic -std=c++14
LDFLAGS = -no-pie

EXES = magic

%.o : %.cpp
	$(CPP) $(CPPFLAGS) -c $*.cpp -o $*.o

all : $(EXES)

magic : magic.o elf_names.o
	$(CPP) $(LDFLAGS) -o $@ magic.o elf_names.o

magic.o : magic.cpp elf_names.cpp elf_names.h
	$(CC) $(CPPFLAGS) -c magic.cpp

elf_names.o : elf_names.cpp elf_names.h
	$(CC) $(CPPFLAGS) -c elf_names.cpp

clean :
	rm -f magic magic.o elf_names.o *.cpp~
