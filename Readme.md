## javascript: Highlevel
Garbage-collected
Interpreted or just in time
Multi-paradigm( procedure, object oriented and functional)
prototype based object-oriented
first class functions
Dynamic
Single threaded
Non Blocking event loop.

### JS engine and runtime:
engine has a callstack and heap
## callstack: where code are excuted
## eap:where object are stored.
## Compilation: the entire source code is converted to machine code at once, written to a  binary portable file that can be executed by the computer. source code -> (portable file)machine code -> program running(in the cpu).
## Interpretation:runs through the source code and executes it line by line.(very slow) source code -> program running
## Just in time: entire code is converted into machine at once, then executed immediately. source code -> machine code ->program running.

## how javascript runs
source code-> parsing(read the code) ->(converted into data structure)abstract syntax tree(check if there is any syntax error)->compilation->execution(call stack)

## Runtime in the broswer:
JS engine[heap and call stack], web api(DOM, fetchAPI etc), callback Queue(timer, data).

## Node in the broswer:
JS engine[heap and call stack], c++ bindings, callback Queue(timer, data).

## Execution context: Environment in which a piece of javascript is executed. stores all the necessary info for some code to be executed. 
## Call stack: is where execution context is stacked to keep track of where we are in the execution

## Scoping: it controls how our program is organized and accessed. 
## Scope: it is an environmnet where variables are declared. there is global, function and block scope.
## scope of a variable: it entails the entire region of our code where a certain variable can be accessed.

## Global scope: variable declared in global scope are accessible everywhere

## Function scope: variables declared are accessible only inside function, Not outside. local scope.

## Block scope:variable are accessible only inside block or curly braces. it only apply to let and const. var used in block can be used by function scope. functions are block in strict mode. e.g if block, loop blocks.

## Hoisting: this is when some type of variables are accessible or available for use before they are actually declared

## this keyword: special value created for every execution context(every function).
## Takes the values of or points to the owner of the function in which the this keyword is used.
## * this with methods = calling the object in which a method is defined.
## * this with function = calling the function in strict mode executes undefine, calling in loose mode execute the global window.
## * this with arrow function = calling the surrounding function
## * this with event listener = dom element thst the handler is attached to.

## Destructuring:
## * You can unpack element from an array
## * You can switch element postion in an array
## DEstructuring OBJECT
## * you use a curly bracket to destructure objects
## * the variable must match the property you want to unpack
## * since the order does not matter, we don't need to skip by making spaces but we need the properties to unpack.

## Object:

