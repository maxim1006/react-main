/*
* Infix expression: The expression of the form a op b. When an operator is in-between every pair of operands.
Postfix expression: The expression of the form a b op. When an operator is followed for every pair of operands.
Why postfix representation of the expression?
The compiler scans the expression either from left to right or from right to left.
Consider the below expression: a op1 b op2 c op3 d
If op1 = +, op2 = *, op3 = +
The compiler first scans the expression to evaluate the expression b * c, then again scans the expression to add a to it. The result is then added to d after another scan.
The repeated scanning makes it very in-efficient. It is better to convert the expression to postfix(or prefix) form before evaluation.
The corresponding expression in postfix form is abc*+d+. The postfix expressions can be evaluated easily using a stack. We will cover postfix expression evaluation in a separate post.

*
* let exp = 'a+b*(c^d-e)^(f+g*h)-i';
console.log(infixToPostfix(exp)); // abcd^e-fgh*+^*+i-
*
*
*
*
*
*
*
*
*
*
*
*
*
*
* Algorithm
1. Scan the infix expression from left to right.
2. If the scanned character is an operand, output it.
3. Else,
      1 If the precedence and associativity of the scanned operator is greater than the precedence and associativity of the operator in the stack(or the stack is empty or the stack contains a ‘(‘ ), push it.

      2 ‘^’ operator is right associative and other operators like ‘+’,’-‘,’*’ and ‘/’ are left associative. Check especially for a condition when both top of the operator stack and scanned operator are ‘^’. In this condition the precedence of scanned operator is higher due to it’s right associativity. So it will be pushed in the operator stack. In all the other cases when the top of operator stack is same as scanned operator we will pop the operator from the stack because of left associativity due to which the scanned operator has less precedence.
      3 Else, Pop all the operators from the stack which are greater than or equal to in precedence than that of the scanned operator. After doing that Push the scanned operator to the stack. (If you encounter parenthesis while popping then stop there and push the scanned operator in the stack.)
4. If the scanned character is an ‘(‘, push it to the stack.
5. If the scanned character is an ‘)’, pop the stack and output it until a ‘(‘ is encountered, and discard both the parenthesis.
6. Repeat steps 2-6 until infix expression is scanned.
7. Print the output
8. Pop and output from the stack until it is not empty.
*/

/* Javascript implementation to convert
infix expression to postfix*/

//Function to return precedence of operators
function getPrec(c) {
    if (c === '^') return 3;
    else if (c === '/' || c === '*') return 2;
    else if (c === '+' || c === '-') return 1;
    else return -1;
}

// The main function to convert infix expression
//to postfix expression
function infixToPostfix(s) {
    let str = []; //For stack operations, we are using C++ built in stack
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        // If the scanned character is
        // an operand, add it to output string.
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) result += c;
        // If the scanned character is an
        // ‘(‘, push it to the stack.
        else if (c === '(') str.push('(');
        // If the scanned character is an ‘)’,
        // pop and to output string from the stack
        // until an ‘(‘ is encountered.
        else if (c === ')') {
            while (str[str.length - 1] !== '(') {
                result += str[str.length - 1];
                str.pop();
            }
            str.pop();
        }

        //If an operator is scanned
        else {
            while (str.length !== 0 && getPrec(s[i]) <= getPrec(str[str.length - 1])) {
                result += str[str.length - 1];
                str.pop();
            }
            str.push(c);
        }
    }

    // Pop all the remaining elements from the stack
    while (str.length !== 0) {
        result += str[str.length - 1];
        str.pop();
    }

    return result;
}

let exp = 'a+b*(c^d-e)^(f+g*h)-i';
console.log(infixToPostfix(exp)); // abcd^e-fgh*+^*+i-
