class Person {
  constructor(name, pets, residence, hobbies) {
    if (typeof name !== "string") {
      throw new Error("name must be a string");
    }
    if (typeof pets !== "number") {
      throw new Error("pets must be a number");
    }
    if (typeof residence !== "string") {
      throw new Error("residence must be a string");
    }
    if (!Array.isArray(hobbies)) {
      throw new Error("hobbies must be an array");
    }

    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
    console.log(`added the new hobby: ${hobby}`);
  }

  removeHobby(hobbyToRemove) {
    this.hobbies = this.hobbies.filter(hobby => hobby !== hobbyToRemove);
    console.log(`removed from hobbies: ${hobbyToRemove}`);
  }

  greeting() {
    console.log("Hello fellow person!");
  }
}

// Usage example
const person1 = new Person("Sonia", 2, "Tunis", ["reading", "coding"]);

person1.greeting();            // Hello fellow person!
person1.addHobby("music");     // added the new hobby: music
person1.removeHobby("coding"); // removed from hobbies: coding
console.log(person1.hobbies);  // ["reading", "music"]
