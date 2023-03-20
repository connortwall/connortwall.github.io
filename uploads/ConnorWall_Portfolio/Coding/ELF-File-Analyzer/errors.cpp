int errors (char *error_statement, int io_error) {
  //reminder: end error_statement with a null terminator
  printf(error_statement);
  
  return io_error;
}
