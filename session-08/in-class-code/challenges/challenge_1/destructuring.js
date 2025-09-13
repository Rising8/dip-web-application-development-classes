const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,
};

// Destructure the entire userObject correctly so that all values in the structure have a variable
const {
  firstName,
  lastName,
  age: yearsOld,
  isStudent,
  address: { street, city, zipCode },
  skills,
  socialProfiles: { twitter: twitterHandle, linkedIn },
  isEmployed,
} = userObject;

// This doesnt look right!

// Updated code below
const greeting = `Hello, my name is ${firstName} ${lastName}. I am ${yearsOld} years old, living on ${street}. You can find me on Twitter as ${twitterHandle}.`;

console.log(greeting);
