class Car {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;

    }
    start(){
        console.log(`the brand: ${this.brand} model : ${this.model} is starting...`)
    }
    driver(){
        console.log(`Driving the brand: ${this.brand} model : ${this.model} from year: ${this.year}`)
    }
}
const car1 = new Car ("Ford", "Escort", 2020);
car1.start();
car1.driver();
