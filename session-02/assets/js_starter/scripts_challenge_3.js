// Challenge 3 Starter
// Initialise the array
let numbers = [1,2,3,4,5];

// Check if the array includes the number 5
if (numbers.includes(5)) {
    // If true, filter out numbers less than 5 
    let filtered = numbers.filter(num => num >= 5)

    // Square each number in the resulting array 
    let squared = filtered.map(num => num * num);

    // Output the final array 
    console.log("Squared numbers:", squared);
} else {
    // Output a message if the number 5 is not in the array
    console.log("The number 5 is not in the array.");
}
