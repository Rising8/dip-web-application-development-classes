// Challenge 2
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
  changeAge(newAge) {
    this.age = newAge;
  },
};

// Deep clone the userObject three times using the spread operator for shallow cloning
// const clone1 = { ...userObject };
// const clone2 = { ...userObject };
// const clone3 = { ...userObject };

// Deep clone function
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Deep clone the userObject three times
const clone1 = deepClone(userObject);
const clone2 = deepClone(userObject);
const clone3 = deepClone(userObject);

// Change ages to see sorting work
clone1.age = 25;
clone2.age = 35;
clone3.age = 20;

// Store the cloned objects in an array
const clonedObjects = [clone1, clone2, clone3];

// Sort the array of cloned objects based on the 'age' property in ascending order
clonedObjects.sort((a, b) => a.age - b.age);

// Log the sorted array to the console
console.log(clonedObjects);


// This code creates 3 deep clones (full copies) of the original userObject using JSON.parse + JSON.stringify.
// Deep cloning makes sure that nested objects (like 'address') are fully copied, NOT linked to the original.

// Then, I change the 'age' value on each clone to make them different.
// I store all 3 clones inside an array called 'clonedObjects'.

// Next, I sort that array in ascending order based on the 'age' property, which uses the array sort() method with a custom comparison function.

// Finally, I use console.log() to print out the sorted list of user clones to check if everything worked.

// This is useful when I want to duplicate data and make sure I’m not accidentally changing the original object.
