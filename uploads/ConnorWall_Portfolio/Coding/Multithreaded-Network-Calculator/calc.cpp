#include "calc.h"
#include <stdlib.h>
#include <pthread.h>
#include <string>
#include <iostream>
#include <algorithm>
#include <vector>
#include <map>
#include <sstream>


//general calulator exception
class calculator_exception : public std::runtime_error {
  public:
  calculator_exception(const std::string& msg) : std::runtime_error(msg) {
  }
};

//exception for invalid input
class invalid_input : public calculator_exception {
  public:
  invalid_input(const std::string& msg) : calculator_exception(msg) {
  }
};

//exception for invalid var
class invalid_var : public calculator_exception {
  public:
  invalid_var(const std::string& msg) : calculator_exception(msg) {
  }
};

//exception for invalid operand
class invalid_operand : public calculator_exception {
  public:
  invalid_operand(const std::string& msg) : calculator_exception(msg) {
  }
};

//exception for invalid operator
class invalid_operator : public calculator_exception {
  public:
  invalid_operator(const std::string& msg) : calculator_exception(msg) {
  }
};

//exception for undefined var
class undefined_var : public calculator_exception {
  public:
  undefined_var(const std::string& msg) : calculator_exception(msg) {
  }
};

//exception for division by zero
class div_by_zero : public calculator_exception {
  public:
  div_by_zero(const std::string& msg) : calculator_exception(msg) {
  }
};



const int NUM_INCR=100000000, NTHREADS=2;

struct Calc {
public:
  //mutex obj
  pthread_mutex_t mutex;
  volatile int count;

  //public member functions
  Calc() {
    pthread_mutex_init(&mutex, NULL);
  } 

  ~Calc() {
    pthread_mutex_destroy(&mutex);
  }



  int lock() {
    return pthread_mutex_lock(&mutex);
  }

  int unlock() {
    return pthread_mutex_unlock(&mutex);

  }

  std::map<std::string, int> vars;

  //main evaluate function
  int evalExpr(const std::string &expr, int &result) {

    std::vector<std::string> vec = tokenize(expr);
    try {
      if((vec.size() == 3 || vec.size() == 5) && vec[1] == "=") {
        result = handle_assignment(vec);
      } else {
        result = handle_statement(vec);
        }
    
        //expected return val
        return 1;
      } catch (const calculator_exception& e) {
          //error found
        return 0;
      }
  }
  //two cases with "var ="
  int handle_assignment(std::vector<std::string> vec) {
    int length = vec.size();
    std::string var = vec[0];
    if (length == 3 || length == 5) {
      if(!is_var(var)) {
        throw invalid_var(var);
      }
      if(length == 3) {
      vars[var] = to_int(vec[2]);
      }
      else if(length == 5) {
      vars[var] = operate(vec[2],vec[3],vec[4]);
      }
      return vars[var];
    }
    else {
      throw invalid_input("inpavild input: '" + vec[0] + "'");
    }
  } 

  // two cases without "var ="
  int handle_statement(std::vector<std::string> vec) {
    int length = vec.size();
    if(length == 1) {
      return to_int(vec[0]);     
    }
    if(length == 3) {
      return operate(vec[0], vec[1], vec[2]);
    }
    else {
      throw invalid_input("inpavild input: '" /*+ vec[0] + "'"*/);
    } 
  }

  //math of operation of left, operation, and right string
  int operate(std::string left, std::string op, std::string right) {
    int lhs = to_int(left);
    int rhs = to_int(right);
    
    if(op.length() == 1) {
      switch(op[0]) {
      case '+': return lhs + rhs;
      case '-': return lhs - rhs;
      case '*': return lhs * rhs;
      case '/': 
        if (rhs == 0) {
        throw div_by_zero("div by 0");
      }
      return lhs / rhs;
      default:
      break;
      }
    }
    throw invalid_operator("invailid operator: '" + op + "'");
  }

  //convert string operand to int
  int to_int(const std::string& operand) {
    if(is_int(operand)) {
      return stoi(operand);
    }

    if(is_var(operand)) {
      auto var = vars.find(operand);
      if(var == vars.end()) {
        throw undefined_var("undefined var: '" + std::to_string (var->second) + "'");
      }
      return var->second;
    }

    throw invalid_operand("invalid operand: '" + operand + "'" );
  }

  //check if string is valid int
  bool is_int(const std::string& operand) {
    if(operand[0] != '-' && (operand[0] < '0' || operand[0] > '9')) {
      return false;
    }
    
    for(int i = 1; i < (int) operand.size(); i++) {
      if(operand[i] < '0' || operand[i] > '9') {
        return false;
      }
    }
    return true;
  }

  //check if string is valid var
  bool is_var(const std::string& operand) {
    for(int i = 0; i < (int) operand.size(); i++) {
      if((operand[i] >= 'A' && operand[i] <= 'Z') || (operand[i] >= 'a' && operand[i] <= 'z')) {
        return true;
      }
    }
    return false;
  }

private:
//use the following function to break an input expression into tokens
  std::vector<std::string> tokenize(const std::string &expr) {
    std::vector<std::string> vec;
    std::stringstream s(expr);
    std::string tok;
    while (s >> tok) {
      vec.push_back(tok);
    }
    return vec;
  }
};  


extern "C" struct Calc *calc_create(void) {
    return new Calc();
}

extern "C" void calc_destroy(struct Calc *calc) {
    delete calc;
}

extern "C" int calc_eval(struct Calc *calc, const char *expr, int *presult) {

  if (calc->lock() != 0) {
    std::cout << "lock failed" << std::endl;
    return -1;
  }
  //error handling
  try {
    int status = calc->evalExpr(expr, *presult);   
    if (calc->unlock() != 0) {
      std::cout << "unlock failed" << std::endl;
    }
    //returns 1 if good, 0 if error
    return status;
    } catch(const calculator_exception& e) {
      std::cout << "error:" << e.what() << std::endl;
      if (calc->unlock() != 0) {
      std::cout << "unlock failed" << std::endl;
      }
    } 
  
  //return in instance of error
  return -1;
}

