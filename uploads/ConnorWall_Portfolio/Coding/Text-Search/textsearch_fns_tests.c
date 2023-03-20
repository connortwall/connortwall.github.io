
#include <stdio.h>
#include <stdlib.h>
#include <string.h> // these functions may be used in the test program
#include "textsearch_fns.h"
#include "tctest.h"

typedef struct {
  const char *pandp;
} TestObjs;


TestObjs *setup(void);
void cleanup(TestObjs *objs);

void test_counter();
//void test_to_lowercase();
void test_instances(TestObjs *objs);
void test_phrases(TestObjs *objs);
void test_read_line(TestObjs *objs);


int main(int argc, char **argv) {
  // Allow the name of the test function to execute to be specified
  // on the command line
  if (argc > 1) {
    tctest_testname_to_execute = argv[1];
  }

  TEST_INIT();

  
   TEST(test_read_line);
   TEST(test_counter);
   //TEST(test_to_lowercase);
   TEST(test_instances);
   TEST(test_phrases);
  TEST_FINI();

  return 0;
}


TestObjs *setup(void) {
  TestObjs *objs = malloc(sizeof(TestObjs));

  objs->pandp =
    "It is a truth universally acknowledged, that a single man in\n"
    "possession of a good fortune, must be in want of a wife.\n"
    "\n"
    "However little known the feelings or views of such a man may be\n"
    "on his first entering a neighbourhood, this truth is so well\n"
    "fixed in the minds of the surrounding families, that he is\n"
    "considered as the rightful property of some one or other of their\n"
    "daughters.\n";

  return objs;
}

void cleanup(TestObjs *objs) {
  free(objs);
}

// An example test function


void test_counter() {
  int counted;

  counted = counter("truth", "It is a truth universally acknowledged, that a single man in");
  ASSERT(1 == counted);

  counted = counter("truth","possession of a good fortune, must be in want of a wife.");
  ASSERT(0 == counted);

  counted = counter("truth", "");
  ASSERT(0 == counted);

  counted = counter("truth","However little known the feelings or views of such a man may be");
  ASSERT(0 == counted);

  counted = counter("truth","on his first entering a neighbourhood, this truth is so well");
  ASSERT(1 == counted);
#if 0
  char line[MAXLINE];
  to_lowercase("It is a truth universally acknowledged, that a single man in", line);
  counted = counter("truth", line);
  ASSERT(1 == counted);

  to_lowercase("It is a truth universally acknowledged, that a single man in", line);
  counted = counter("truth", line);
  ASSERT(1 == counted);

  to_lowercase("on his first entering a neighbourhood, this truth is so well", line);
  counted = counter("truth", line);
  ASSERT(1 == counted);
#endif
}


void test_to_lowercase() {
  char lower[MAXLINE];

  to_lowercase("truth", lower);
  ASSERT(0 == strcmp(lower, "truth"));
  
  to_lowercase("It is a truth universally acknowledged, that a single man in", lower);
  ASSERT(0 == strcmp(lower, "it is a truth universally acknowledged, that a single man in"));
  }

void test_instances(TestObjs *objs) {
  FILE *in = fmemopen((char *) objs->pandp, strlen(objs->pandp), "r");
  //int val = instances("it", in);
  //printf("%i\n", val);
  ASSERT(2 == instances("truth", in));
  fseek(in, 0, 0);
  ASSERT(1 == instances("I", in));
  fseek(in, 0, 0);
  ASSERT(1 == instances("it", in));
  fseek(in, 0, 0);
  ASSERT(5 == instances("is", in));
  

  fclose(in);
}

void test_phrases(TestObjs *objs) {
  FILE *in = fmemopen((char *) objs->pandp, strlen(objs->pandp), "r");
  
  ASSERT(0 == phrases("truth", in));

  fclose(in);

}

void test_read_line(TestObjs *objs) {
  // the fmemopen function allows us to treat a character string
  // as an input file
  FILE *in = fmemopen((char *) objs->pandp, strlen(objs->pandp), "r");
  char buf[MAXLINE + 1];
  
  ASSERT(0 != read_line(in, buf));
  //printf("'%s' readline return", buf);
  ASSERT(0 == strcmp(buf, "It is a truth universally acknowledged, that a single man in"));

  ASSERT(0 != read_line(in, buf));
  ASSERT(0 == strcmp(buf, "possession of a good fortune, must be in want of a wife."));

  ASSERT(0 != read_line(in, buf));
  ASSERT(0 == strcmp(buf, ""));

  ASSERT(0 != read_line(in, buf));
  ASSERT(0 == strcmp(buf, "However little known the feelings or views of such a man may be"));

  ASSERT(0 != read_line(in, buf));
  ASSERT(0 == strcmp(buf, "on his first entering a neighbourhood, this truth is so well"));

  ASSERT(0 != read_line(in, buf));
  ASSERT(0 == strcmp(buf, "fixed in the minds of the surrounding families, that he is"));

  ASSERT(0 != read_line(in, buf));
  ASSERT(0 == strcmp(buf, "considered as the rightful property of some one or other of their"));

  ASSERT(0 != read_line(in, buf));
  ASSERT(0 == strcmp(buf, "daughters."));

  // at this point we have read the last line
  ASSERT(!read_line(in, buf));

  fclose(in);
}


// TODO: implementations of other test functions
