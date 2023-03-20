/*
 * Assembly language implementation of the main function
 * for the asm_textsearch_fns program
 * change to pull
 */

.section .rodata

.File_msg: .string	"r"

.Occ_msg: .string	"%i occurance(s)\n"

.NoCall_msg: .string	"Function was not called"

	.section .text

	.globl main
main:

/*setup pointers for main*/
pushq	%rbp
movq	%rsp, %rbp
subq	$36, %rsp
movl	%edi, %r14d
movq	%rsi, %r15

/*FILE *fp;*/
/*char array for file name*/
/*char *fileName = argv[3];*/

/*create register for file pointer*/
movq	%r15, %rax
movq	24(%rax), %rax
movq	%rax, -32(%rbp)
/*name of file is argv[2]*/
movq	%r15, %rax
movq	16(%rax), %rax
movq	%rax, -24(%rbp)


/*char *indicator = argv[1];*/
/**/
movq	%r15, %rax
movq	8(%rax), %rax
movq	%rax, -16(%rbp)

/*fp = fopen(fileName, "r");*/
movq	-32(%rbp), %rax
leaq	.File_msg(%rip), %rsi
movq	%rax, %rdi
call	fopen
movq	%rax, -8(%rbp)

/*int isErr = throws_error(fp);*/
movq	-8(%rbp), %rax
movq	%rax, %rdi
call	throws_error
movl	%eax, %r13d

/*//if an error is thrown, end prematurely*/
/*if (isErr == 1) {*/
cmpl	$1, %r13d
jne	.If2

/*return isErr;*/
movl	%r13d, %eax
jmp	.End

.If2:
/*//send to fns functions depending*/
/*if (indicator[0] == '-' && indicator[1] == 'c') {*/
movq	-16(%rbp), %rax
movzbl	(%rax), %eax
cmpb	$45, %al /*hyphen*/
jne	.BreakIf2
movq	-16(%rbp), %rax
addq	$1, %rax
movzbl	(%rax), %eax
cmpb	$99, %al /*c*/
jne	.BreakIf2


/*int num = instances(word, fp);*/
movq	-8(%rbp), %rdx
movq	-24(%rbp), %rax
movq	%rdx, %rsi
movq	%rax, %rdi
call	instances
movl	%eax, %r12d

/*printf("%i occurance(s)\n", num);*/
movl	%r12d, %eax
movl	%eax, %esi
leaq	.Occ_msg(%rip), %rdi
movl	$0, %eax
call	printf

/*int num = instances(word, fp);*/
jmp	.Finish

.BreakIf2:
/*else {int calledFunc = argc;*/
movl	%r14d, %eax
movl	%eax, -36(%rbp)

/*calledFunc = phrases(word, fp);*/
movq	-8(%rbp), %rdx
movq	-24(%rbp), %rax
movq	%rdx, %rsi
movq	%rax, %rdi
call	phrases
movl	%eax, -36(%rbp)

/*if (calledFunc == argc) {*/
movl	-36(%rbp), %eax
cmpl	%r14d, %eax
jne	.Finish

/*printf("Function was not called");*/
leaq	.NoCall_msg(%rip), %rdi
movl	$0, %eax
call	printf

.Finish:
/*fclose(fp);*/
movq	-8(%rbp), %rax
movq	%rax, %rdi
call	fclose

/*return 0;*/
movl	$0, %eax

.End:
ret
