import React from 'react';
// import { getUserInfo, formatUserSkills } from './utils'; // Step 1 fix the import statement
import { getUserInfo, formatUserSkills } from '../utils/utils';

function UserProfile(props) {
  // Step 2 create object correctly
  // const user = new Object;
  //   firstName = 'John';
  //   lastName = 'Doe';
  //   age = 30;
  //   isStudent: false;
  //   skills: ['JavaScript', 'React', 'CSS'];
  // };
  // Creates a javascript object named user and has the following features
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isStudent: false,
    skills: ['JavaScript', 'React', 'CSS'],
  };

  // Step 3 fix the map method & fix duplicated method
  // const formatSkills = function(skills) {
  //   return skills.map(() => skill.touppercase());
  // };
  // Arrow function that takes an array of strings called skills
  // .map loops through each skill in the array and returns a new array of fully uppercase letters
  const formatSkills = (skills) => {
    return skills.map((skill) => skill.toUpperCase());
  };

  // Step 4 destructure props properly
  // const [firstname, lastname, age, isStudent, skills] = props;
  // extracts each property from pops into a separate variable
  const { firstName, lastName, age, isStudent, skills } = props;

  // Step 5 Fix the ternary operator
  // const greetingMessage = `Hello, {user.firstName : user.firstname  'Guest'}!`;
  // temperal literal string with greeting
  const greetingMessage = `Hello, ${user.firstName || firstName || 'Guest'}!`;

  // Step 6 Fix the duplicated method
  // const formattedSkills = formatSkills(user.skills);
  // Use formattedSkills utility function to return an array of skills
  const formattedSkills = formatUserSkills(user.skills || skills || []);

  // Use getUserInfo utility function to generate user info string
  const userInfo = getUserInfo(user);

  return (
    <div>
      <h1>User Profile</h1>
      <p>{greetingMessage}</p>
      <p>Age: {age > 18 ? "Adult" : "Minor"}</p>
      {/* <p>Skills: {formattedSkills.join(', ')}</p> // Incorrect usage */}
      <p>Skills: {formattedSkills.length ? formattedSkills.join(', ') : 'No skills listed'}</p>
    </div>
  );
}

export default UserProfile;
