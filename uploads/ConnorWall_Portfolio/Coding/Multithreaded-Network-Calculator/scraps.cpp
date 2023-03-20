//letter variables
std::map<char, int> vars;
  
int get_functons() {
  int type = 0;

  int to_equal;
  
  //ints for computation. initializing as -1 since negatives aren't used in the given test
  int val1 = -1;
  int val2 = -1;
  

  //computation
  char operand;

  //answer
  int answer;

  //iterator
  int start = 0;
  
  //string of input, upper bound of 20 to be safe
  char *input[20];
  scanf("%20s", input);

  //send to error test function
  if(is_out_of_bounds(input)) {
    printf("Error\n");
    //go back to first part of ui
  }

  //check if it's a function setting a variable equal to something
  if (input[0] == 2 && (input.find("=") != 0)) {
      to_equal = input[0];
      start = 3;
  }
  
  //loop
  for(int i = start; input[i] != '\n', i++) {
    type = identify_char(input[i]);

    //type is an operand
    if (type == 1) {
      operand = input[i];
    }
    
    //type is a variable that is getting called
    else if (type == 2) {
      //check if the map at that address is empty
      if(vars.find(input[i]) == vars.end()) {
	printf("Error");
	return -1;
      }
      
      //send to first unused val
      if(val1 == -1) {
	//send to get full variable
	val1 = vars[input[i]];
      } else{
	val2 = vars[input[i]];
      }	
    }
    //type is a number
    else if(type == 3) {
      //send to first unused val
      if(val1 == -1) {
	//send to get full val
	val1 = get_int(input, i);
      } else{
	val2 = get_int(input, i);
      }
      
      //set i equal to next space character
      if(input.find(" ", i) != string::npos) {
	i = input.find(" ", i);
      } else {
	i = input.length();
      }
    }
    
  }

  //check if dividing by zero
  if(val2 == 0 && operand == '/') {
    printf("Error");

    //Error return value
    return -1;
  }
  
  answer = calculate(val1, val2, operand);

  //later
  if (to_equal != 0) {
    vars[to_equal] = answer;
  }

  return answer;
}

bool is_out_of_bounds(char *input) {
  //int for type of last character: space (0) or other (1)
  int last_char = 0;

  //bool for current char is a value-holding character
  bool has_value;

  //int for last symbol type. 0 for operand, 1 for =, 2 for var, and 3 for number
  int last_sym;
  
  //check if there are too many or too few spaces
  int num = std::count(input, ' ');
  if(num < 2 || num > 4) {
    return true;
  }

  //check if there are too many operands (or too many characters for too few operands)
  int operands = std::count(input, '*') + std::count(input, '-') + std::count(input, '+') + std::count(input, '/');
  if(operands > 1 || (operands == 0 && input.length() > 1)) {
    return true;
  }

  //loop to check if all values are valid
  for(int i = 0; input[i] != '\n', i++) {
    //if input[i] is not a value-holding number, set it to false, otherwise true
    if((input[i] < 65 || input[i] > 90) && (input[i] < 97 || input[i] > 112)) {
      has_value = false;
    }
    else {
      has_value = true;
    }
    
    if((input[i] != ' ') && (input[i] != '+') && (input[i] != '*') && (input[i] != '-') && (input[i] != '/') && (input[i] != '=') && !has_value) {
      return true;
    }

    //error if two subsequent spaces or input[1] is a space
    if(input[i] == ' ' && last_char == 0) {
      return true;
    }
    
    //if it isn't input[i], then last_char and last_sym can be tested
    if(i != 1) {
      //if there are no space between two different symbols that aren't both numbers
      if((last_sym != 3) && (last_char != 0) && (input[i] < 48 || input[i] > 57)) {
	return true;
      }

      //check if it's = without starting with variable
      if((last_sym != 2) && input[i] == '=') {
	return true;
      }


      //check if it's an operand followed by another operand
      if((last_sym == 0 || last_sym == 1) && !has_value) {
	return true;
      }

      //check if it's two value-holding characters next to each other when they're not immediately next to each other
      if((last_sym == 2 || last_sym == 3) && has_value && last_char == 0) {
	return true;
      }


      //update last_sym if input[i] isn't a space
      if (input[] != ' ') {
	last_char = 1;
	last_sym = identify_char(input[i]);
      }
      else {
	last_char = 0;
      }
    }

  }

  //check if ends on an operand or space
  if(last_sym == 0 || last_sym == 1 || last_char == 0) {
    return true;
  }

  return false;
}

int identify_char(char i) {
  //is operand
  if ((i == '+') || (i == '-') || (i == '*') || (i == '/')) {
    return 0;
  }
  
  //is =
  else if (i == '=') {
    return 1;
  }

  //is number
  else if (i >= 48 && i <= 57) {
    return 3;
  }

  //else it's a variable
  return 2;
}

int calculate(int var1, int var2, char operand) {
  //calculate base on operand
  switch(operand) {
  case '+': return var1 + var2;
  case '-': return var1 - var2;
  case '*': return var1 * var2;
  case '/': return var1 / var2;
  }

  //extra return statement to prevent compilation warnings
  return 0;
}
