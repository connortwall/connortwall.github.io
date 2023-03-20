CC = gcc
CPP = g++

CPPFLAGS = -no-pie -g -Wall -Wextra -pedantic -std=c++14
LDFLAGS = -no-pie

EXES = csim 

%.o : %.cpp
	$(CPP) $(CPPFLAGS) -c $*.cpp -o $*.o

all : $(EXES)


# executables
csim : cache_main.o cache_sim.o
	$(CPP) $(LDFLAGS) -o $@ cache_main.o cache_sim.o


# object files
cache_sim.o : cache_sim.cpp cache_sim.h 
#	$(CC) $(CPPFLAGS) -c cache_sim.cpp

# clean
clean :
	rm -f csim *.o *~
