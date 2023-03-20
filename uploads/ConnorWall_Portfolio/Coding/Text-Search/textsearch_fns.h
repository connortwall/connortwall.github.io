#ifndef TEXTSEARCH_FNS_H
#define TEXTSEARCH_FNS_H
#include <stdlib.h>

#define MAXLINE 511


// c_textsearch_fns.c and asm_textsearch_fns.S)
//Read in a line from a file
//
//Parameters:
//     fp - the file that is being searched in
//     line - character array to be read into
//
//
//Returns:
//     zero if everything runs correctly
int read_line(FILE* fp, char* line);

//Search textfile fp for how many times a word is used.
//
//Parameters:
//     word - the word that is being searched for
//     fp - the file that is being searched in
//
//
//Returns:
//     the number of instances of the word in the textfile
int instances(char* word, FILE* fp);

//Search textfile fp for a word. Print all the phrases containing that word, max of 115 characters
//
//Parameters:
//     word - the word that is being searched for
//     fp - the file that is being searched in
//
//
//Returns:
//     0 if everything runs correctly
int phrases(char* word, FILE* fp);

//Record the number of times that a word is found in a line.
//
//Parameters:
//     word - the word that is being searched for
//     line - the line being searched in
//
//
//Returns:
//     count - the number of times the word was found in the line
int counter(char* word, char* line);

//Take any uppercase letters and make them lowercase
//
//Parameters:
//     given - the char array that may have uppercase letters
//     lower - char array with only lowercase letters
//
//
//Returns:
//     0
int to_lowercase(char* given, char* lower);

//Test if the file throws an error. If so, print custom error message to stderr
//
//Parameters:
//     fp - file pointer tested for error
//
//
//Returns:
//     1 if there is an error, 0 if not
int throws_error(FILE* fp);

//int read_line(FILE *in, char *buf);
//void print_line(FILE *out, const char *buf);
//unsigned count_occurrences(const char *line, const char *str);
//unsigned find_string_length(const char *s);
//int starts_with(const char *s, const char *pfx);
//int strings_equal(const char *s1, const char *s2);


#endif // TEXTSEARCH_FNS_H
//git commit textsearch_fns.h -m added "suggested list of function declarations textsearch_fns.h"
