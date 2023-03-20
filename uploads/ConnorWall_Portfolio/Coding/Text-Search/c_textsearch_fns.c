#include <stdio.h>
#include "textsearch_fns.h"


int read_line(FILE* fp, char* line) {
  int idx = 0;
  int ch = -1;

  while (((ch = fgetc(fp)) != -1) && idx < MAXLINE - 1 && ch != '\n') {
    line[idx] = (char) ch;
    idx++;
  }
  line[idx] = '\0';
  return (idx || ch == '\n');
}

int instances(char* word, FILE* fp) {
  //the number of instances of the word
  int count = 0;
  
  //the line in fp that is currently being read
  char line[MAXLINE];

  while (read_line(fp, line)) {
    count += counter(word, line);
  }

  return count;
}


int phrases(char* word, FILE* fp) {
  //the line in fp that is currently being read
  char* line = (char*) malloc(MAXLINE);

  //lowercase versions of word and line
  char* lLine = (char*) malloc(MAXLINE);
  char* lWord = (char*) malloc(MAXLINE);

  char firstLetter = fgetc(fp);
  //lowercase word
  to_lowercase(word, lWord);
  
  //iterate through fp, call counter for line each time
  while (firstLetter != -1) {
    line[0] = firstLetter;
    read_line(fp, line);

    //lowercase line
    to_lowercase(line, lLine);
    
    //check if line has word
    if (counter(lWord, lLine) > 0) {
      printf("%s", line);
      printf("%c", ' ');
    }

    firstLetter = fgetc(fp);
  }

  //printf("%c\n", line[0]);
  
  free(line);
  free(lLine);
  free(lWord);
  return 0;
}

int counter(char* word, char* line) {
  //number of instances of the word
  char *tmp = line;
  int count = 0;
  while (*tmp) {
    if (word[0] == tmp[0]) {
      int i = 1;
      while (word[i] && tmp[i]) {
        if (word[i] != tmp[i]) {
          tmp++;
          break;
        }
          i++;
      }
      if (!word[i]) {
          count++; 
        if (tmp[i]) {
          tmp += i;
        }
      }
    } else {
      tmp++;
      }
  }
  return count;
}

int throws_error(FILE* fp) {
  if (fp == NULL) {
    fprintf(stderr, "Could not open file");

    return 1;
  }

  return 0;
}

int to_lowercase(char* given, char* lower) {
  int index = 0;

  while (given[index] != '\0') {
    if (given[index] >= 'A' && given[index] <= 'Z') {
      lower[index] = given[index] + 32;
    }
    else {
      lower[index] = given[index];
    }
    index++;
  }
  while (lower[index] != '\0') {
    lower[index] = '\0';
    index++;
  }
  return 0;
}
