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

// Fix the ternary operator to correctly reflect the user's employment status so that:
// if they are employed and a student they are not looking for work.

// const employmentStatus = userObject.isEmployed
//   ? "Employed"
//   : "Unemployed"
//   ? "Looking for work"
//   : "Not looking";

const employmentStatus = userObject.isEmployed
  ? "Employed"
  : userObject.isStudent
  ? "Not looking for work"
  : "Looking for work";

// Change this console.log to pull first and last name as userObject does not have a name property
// console.log(`${userObject.name} is ${employmentStatus}`);

console.log(`${userObject.firstName} ${userObject.lastName} is ${employmentStatus}`);
