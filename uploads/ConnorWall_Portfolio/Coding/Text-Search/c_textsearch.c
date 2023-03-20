#include <stdio.h>
#include <stdlib.h>
#include "textsearch_fns.h"

int main(int argc, char **argv) {
  FILE *fp;
  //char array for file name
  char *fileName = argv[3];
  char *word = argv[2];
  char *indicator = argv[1];
  
  fp = fopen(fileName, "r");
  int isErr = throws_error(fp);

  //if an error is thrown, end prematurely
  if (isErr == 1) {
    return isErr;
  }
  
  //send to fns functions depending
  if (indicator[0] == '-' && indicator[1] == 'c') {
    int num = instances(word, fp);
    printf("%i occurance(s)\n", num);
  }
  else {
    int calledFunc = argc;
    calledFunc = phrases(word, fp);

    if (calledFunc == argc) {
      printf("Function was not called");
    }
  }

  fclose(fp);
  return 0;
}
