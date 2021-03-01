/**
 * @param {string} s
 * @return {boolean}
 */

class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    push(element) {
      this.data[this.top] = element;
      this.top = this.top + 1;
    }
   length() {
      return this.top;
   }
   peek() {
      return this.data[this.top-1];
   }
   isEmpty() {
     return this.top === 0;
   }
   pop() {
    if( this.isEmpty() === false ) {
       this.top = this.top -1;
       return this.data.pop(); // removes the last element
     }
   }
   
}

var isValid = function(s) {
    const stack =  new Stack();
   const charArr =  [...s]
   
   for(let i=0; i< charArr.length; i++) {
       let c=  charArr[i]
       if(c == '(') {
           stack.push(')')
       }
       else if(c== '{') {
           stack.push('}')
       }
       else if(c== '[') {
           stack.push(']')
       }
       else if(!stack.isEmpty() && stack.peek() ==c) {
           stack.pop();
       }
       else if(stack.isEmpty() || stack.peek() != c) {
          
           return false;
       }
   }
    
    return stack.isEmpty();
};

console.log(isValid('()'))