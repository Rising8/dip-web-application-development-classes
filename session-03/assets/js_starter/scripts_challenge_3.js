// Challenge 3 Starter
// Create the class and use the constructor method
class UserObject {
  constructor(
    firstName,
    lastName,
    age,
    isStudent,
    isEmployed,
    address,
    skills,
    socialProfiles
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isStudent = isStudent;
    this.isEmployed = isEmployed;
    this.address = address;
    this.skills = skills;
    this.socialProfiles = socialProfiles;
  }
}

// Create an instance of the ComplexObject class (hint: add the properties)
const userObjectInstance = new UserObject(
  "John",
  "Doe",
  30,
  false,
  true,
  {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  ["JavaScript", "HTML", "CSS"],
  {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
);

// Log the new instance of the object
console.log(userObjectInstance);


// This defines a UserObject class with a constructor that sets all the user details.
// I pass values into the constructor using the 'new' keyword to create an instance.
//
// The order of the arguments matters — it must match the constructor parameter list.
//
// Then I log the instance to the console to see all the properties printed nicely.
//
// This is useful when I want to create many users with the same structure, using OOP!

// to create a new user: 
// const userObjectInstance2 = new UserObject(
//   "Jane",
//   "Smith",
//   28,
//   true,
//   false,
//   {
//     street: "456 Elm St",
//     city: "Othertown",
//     zipCode: "67890",
//   },
//   ["Python", "Django"],
//   {
//     twitter: "@janesmith",
//     linkedIn: "linkedin.com/in/janesmith",
//   }
// );

// to log both:
// console.log(userObjectInstance);
// console.log(userObjectInstance2);