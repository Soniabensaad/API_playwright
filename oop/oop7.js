class Person{
    constructor(name, age){

        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`HI name:${this.name} age:${this.age}`);
    }
}
class Student extends Person {
    
}
