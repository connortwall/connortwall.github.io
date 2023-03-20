/*
 * Assembly language implementations of functions declared in
 * textsearch_fns.h
 */
.section .rodata
err_msg: .asciz "Could not open file\n"
format_str: .asciz "%115s\n"
test_str: .asciz "fdsofiaofm"
.section .text

/*
 * Reads in the next line of the IO file
 *
 *Parameters:
 * 
 */
.globl read_line

#define MAXLINE 511
#define NEW_LINE 10
#define MAXLINE_STACK 512

read_line:
/*int read_line(FILE* fp, char* line) {*/
/*fp -> rdi, line -> rsi*/
/*use %rax for fgetc value (ch)*/
/*use %r12 for idx*/

push %rbp
movq %rsp, %rbp

pushq %r12
pushq %r13
pushq %r14
xor %r12, %r12
movq %rdi, %r13
movq %rsi, %r14

.Lread:
movq %r13, %rdi
call fgetc
cmpl $-1, %eax
je .Lnullterm
cmpl $NEW_LINE, %eax
je .Lnullterm

cmpq $(MAXLINE - 1), %r12 
jge .Lnullterm

movb %al, (%r14)
addq $1, %r12
addq $1, %r14
jmp .Lread

.Lnullterm:
movl $0, (%r14)

cmpl $0, %r12d
jne .Lnoteof
cmpl $-1, %eax
jne .Lnoteof

movl $0, %eax
jmp .Lreturn

.Lnoteof:
movl $1, %eax

.Lreturn:
popq %r14
popq %r13
popq %r12
popq %rbp
ret




/*
 *Counts the number of times that the word is found in the line.
 *
 *
 *Parameters:
 *
 */
.globl counter

counter:
/*word -> rdi, tmp=line -> rsi*/
/*use %rax for fgetc value (ch)*/
/*use %r12 for idx*/

pushq %r12 /*count*/
pushq %r13 /*i*/
pushq %r14 /*word*/
pushq %r15 /*line*/
xor %r12, %r12

/*compare 0 with rsi*/
.Lexamine:
cmpb $0, (%rsi)
je .Lexit

/*put rdi into al and compare*/
movb (%rdi), %al
cmpb %al, (%rsi)
je .Lmatch

/*increase rsi and repeat if not a match*/
incq %rsi
jmp .Lexamine

/*put 1 in r13 if match*/
.Lmatch:
movq $1, %r13

/*assign temporary registers for new word and line*/
.Lstrcmp:
movq %rdi, %r14
movq %rsi, %r15

addq %r13, %r14
cmpb $0, (%r14)
je .Lendstring

/*check if end of string reached*/
addq %r13, %r15
cmpb $0, (%r15)
je .Lendstring

movb (%r14), %al
cmpb %al, (%r15)
je .Lnextchar

incq %rsi
jmp .Lendstring
.Lnextchar:
incq %r13
jmp .Lstrcmp

.Lendstring:
cmpb $0, (%r14)

jne .Linctmp
incl %r12d
cmpb $0, (%r15)
je .Lexamine

.Linctmp:
addq %r13, %rsi 
jmp .Lexamine



.Lexit:
movq %r12, %rax
popq %r15
popq %r14
popq %r13
popq %r12

ret


/*
 *Throws error when issue with opening file pointer.
 *
 *
 *Parameters:
 *
 */
/*throws_error*/
.globl	throws_error
throws_error:
/*int throws_error(FILE* fp) {
  if (fp == NULL) {
    fprintf(stderr, "Could not open file");

    return 1;
  }

  return 0;
}*/
/*fp -> rdi*/

cmpq $0, %rdi
jne .Lreturnzero

movq stderr(%rip), %rdi
movq $err_msg, %rsi
call fprintf
movq $1, %rax
ret

.Lreturnzero:
movq $0, %rax
ret




/*
 *Checks and converts characters to lowercase for standard reading.
 *
 *
 *Parameters:
 *
 */
/*to_lowercase*/
.globl	to_lowercase
to_lowercase:
/*int to_lowercase(char* given, char* lower) {*/
pushq	%rbp /*saves value of base pointer to stack*/
movq	%rsp, %rbp /*saves stack pointer in base register / pointer*/

.Lcopyone:
movb (%rdi), %al

cmpb $'A', %al
jl .Lwrite
cmpb $'Z', %al
jg .Lwrite

addb $32, %al

.Lwrite:
movb %al, (%rsi)
cmpb $0, %al 
je .Lreturnlower

incq %rdi
incq %rsi
jmp .Lcopyone


.Lreturnlower:
movq	%rbp, %rsp /*restore rsp*/
popq	%rbp /*removes top element of stack*/
ret



 /*
 *Finds all the instances in which the word searched for is present in the file.
 *Prints those findings
 *
 *Parameters:
 *
 */
 
.globl instances
instances:

/*int instances(char* word, FILE* fp) {
  //the number of instances of the word
  int count = 0;
  
  //the line in fp that is currently being read
  char line[MAXLINE];

  while (read_line(fp, line)) {
    count += counter(word, line);
  }

  return count;
}*/
/*setup registers*/
/*word -> rdi, fp -> rsi*/
/*use %r12 for count*/
pushq	%rbp /*saves value of base pointer to stack*/
subq	$MAXLINE_STACK, %rsp
movq	%rsp, %rbp /*saves stack pointer in base register / pointer*/
pushq %r12
pushq %r13
pushq %r14
pushq %r15

xor %r12, %r12
movq %rdi, %r13 /*word*/
movq %rsi, %r14 /*fp*/
movq %rsp, %r15 /*line*/

/*continue loop*/
.Lcloop:
movq %r14, %rdi
movq %r15, %rsi
call read_line

cmpl $0, %eax
je .Lcleanupc

movq %r13, %rdi
movq %r15, %rsi
call counter

addl %eax, %r12d
jmp .Lcloop


.Lcleanupc:
movq %r12, %rax
popq %r15
popq %r14
popq %r13
popq %r12
addq $MAXLINE_STACK, %rsp
popq %rbp
ret
	

/*
 *Prints every line in the file in which the word is found.
 *
 *
 *Parameters:
 *
 */	
.global phrases
phrases:
/*setup registers*/

pushq %r12 
pushq %r13 
pushq %r14 
subq	$MAXLINE_STACK, %rsp

movq %rdi, %r12 /*word*/
movq %rsi, %r13 /*fp*/
movq %rsp, %r14 /*line*/

/*while file still has lines*/
.Lwhile:
movq %r13, %rdi
movq %r14, %rsi
call read_line
/*exit if no more lines*/
cmp $0, %rax
je .Lend

/*initialize counter function parameters*/
movq %r12, %rdi
movq %r14, %rsi
call counter
/*back to repeat if returns zero*/
cmpl $0, %eax
je .Lwhile

leaq format_str(%rip), %rdi
movq %r14, %rsi
call printf
jmp .Lwhile

.Lend:
addq	$MAXLINE_STACK, %rsp
popq %r14
popq %r13
popq %r12
ret
