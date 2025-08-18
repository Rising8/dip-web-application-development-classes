import multiply, { add, subtract, divide as myDivide} from "./math.js";

// // Console log for testing
// console.log(add(3, 2)); // 5
// console.log(subtract(5, 2)); // 3
// console.log(multiply(6, 2)); // 12
// console.log(myDivide(6, 3)); // 2



// Create the default multiple function

// Create the division function and give it an alias called myDivide

// Render the results using some sort of ternary

// Render the results in the UI

let add_result = add(3, 2); // 5
let subtract_result = subtract(5, 2); // 3
let divide_result = myDivide(6, 3); // 2
let multiply_result = multiply(6, 2); // 12

let results = [add_result, subtract_result, divide_result, multiply_result];

let app = document.getElementById("result_list");

let show = true;

show
  ? (app.innerHTML = `<ol>${results
      .map((result) => `<li>${result}</li>`)
      .join("")}
      </ol>`)
  : `<div>Nothing to show</div>`;



// const a = 6
// const b = 3

// const mulResult = multiply(a, b);
// const divResult = myDivide(a, b);

// document.getElementById("output").textContent = message;







