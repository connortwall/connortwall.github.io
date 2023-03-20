CC = g++
CFLAGS = -std=c++11 -Wall -Wextra -pedantic -g -O2

csim: csim.o csim_fns.o
	$(CC) -o csim csim.o csim_fns.o

csim_fns.o: csim_fns.cpp csim_fns.h
	$(CC) -c csim_fns.cpp $(CFLAGS)

csim.o: csim.cpp csim_fns.h
	$(CC) -c csim.cpp $(CFLAGS)

clean:
	rm -f *.o csim
