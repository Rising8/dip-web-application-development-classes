// Utility functions

// This takes a user object and returns a single formatted string
export const getUserInfo = (user) =>
  `Name: ${user.firstName} ${user.lastName}, Age: ${user.age}`;

// This takes an array of skills and returns a new array that is all uppercase
export const formatUserSkills = (skills) =>
  skills.map((skill) => skill.toUpperCase());