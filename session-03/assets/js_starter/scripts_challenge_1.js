// Challenge 1 Starter

// userObject is a collection of data about a person
const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,

  // Method to change the age property
  // changeAge function which takes newAge as an input and uses "this.age = newAge" to update the age
  // "this" inside a method refers to the object that it belongs to, "this" refers to the userObject
  changeAge: function(newAge) {
    this.age = newAge;
  }
};

// Execute the method to change the age
userObject.changeAge(35);

// Log the updated complexObject
console.log(userObject);


// print this in console

// const userObject = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   isStudent: false,
//   changeAge: function(newAge) {
//     this.age = newAge;
//   }
// };
// userObject.changeAge(40);
// console.log(userObject);

// we will see this output: {firstName: 'John', lastName: 'Doe', age: 40, isStudent: false, changeAge: ƒ} (changes name to 40)

// print the below and we will see 21

// userObject.changeAge(21);
// console.log(userObject.age);


// if we forget this, it will not update the age, the age will still be 30.
// const userObject = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   changeAge: function(newAge) {
//     age = newAge; 
//   }
// };

// userObject.changeAge(40);
// console.log(userObject.age);
