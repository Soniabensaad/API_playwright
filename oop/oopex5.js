class Calculator{
    constructor(result=0){
        this.result = result;

    }
    add(a, b){
        this.result = a-b ;

    }
    subtract(a, b){
        this.result = a-b;


    }
    multiply(a, b){
        this.result = a*b;

    }
   divide(a, b) {
    if (b !== 0) {
      this.result = a / b;
    } else {
      console.log("Error: Division by zero!");
    }

    }
    displayResult(){
        console.log(`result : ${this.result}`);
    }
}
const result1 = new Calculator();
result1.add(3, 4);
result1.displayResult();

result1.divide(10,2);
result1.displayResult();

result1.subtract(9,3);
result1.displayResult();

result1.multiply(3,4);
result1.displayResult();
