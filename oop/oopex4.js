class Student {
    constructor(name, grades){
        this.name = name;
        this.grades = grades;
    }
    addGrade(grade){
        this.grades.push(grade);
        console.log(`grade: ${grade}`);
    }
    getAverage(){
        let sum =0;
        for (let i = 0 ; i< this.grades.length ; i++){
            sum += this.grades[i];
        }
        const average = sum / this.grades.length;
    console.log(`${this.name}'s average is: ${average}`);

    }
}
const student1 = new Student("Mike", [14,8,9,16,18]);
student1.addGrade(20);
student1.getAverage();
