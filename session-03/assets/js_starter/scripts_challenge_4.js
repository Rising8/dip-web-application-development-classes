// Get the form element
let form = document.querySelector("#save-me");

// localStorage prefix
let prefix = "autosave_";

/**
 * Helper to get key for storage: use name if exists, otherwise id
 */
function getKey(target) {
  return target.name || target.id || null;
}

/**
 * Handle input events
 * @param  {Event} event The event object
 */
function inputHandler(event) {
<<<<<<< HEAD
  let target = event.target;
  let key = getKey(target);
  if (!key) return; // if no name or id, ignore
  
  // Save the value to localStorage with prefix + key
  localStorage.setItem(prefix + key, target.value);
=======
  // save the event target
  let field = event.target;

  localStorage.setItem(prefix + field.id, field.value);
>>>>>>> da17e3c297817d42284d3d8f0bd61e682ca5fc32
}

/**
 * Clear all of the saved fields from storage
 */
function clearStorage() {
<<<<<<< HEAD
  // Loop backwards since localStorage length changes on removal
  for (let i = localStorage.length - 1; i >= 0; i--) {
    let key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      localStorage.removeItem(key);
    }
  }
  // Reset form fields visually
  form.reset();
=======
  let fields = form.elements;

  for (let field of fields) {
    localStorage.removeItem(prefix + field.id);
  }
>>>>>>> da17e3c297817d42284d3d8f0bd61e682ca5fc32
}

/**
 * Load saved data from localStorage
 */
function loadSaved() {
<<<<<<< HEAD
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      let savedKey = key.slice(prefix.length); // remove prefix
      // Find input by name or id
      let field = form.querySelector(`[name="${savedKey}"]`) || form.querySelector(`#${savedKey}`);
      if (field) {
        field.value = localStorage.getItem(key);
      }
    }
  }
}

// Load saved data from localStorage when page loads
loadSaved();

// Listen for DOM events
// Listen for input events on the form to autosave values
form.addEventListener("input", inputHandler);

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page reload
  alert("Form submitted! Page reload prevented so autosave can be tested.");
});


// The below code is for the "clear saved data" and basically clears the saved data and reloads page
// Find the clear button
const clearButton = document.querySelector("#clear-storage");

// When clicked, clear saved data and reset form
clearButton.addEventListener("click", function() {
  clearStorage();
  alert("Saved data cleared and form reset!");
});



// // Teacher solution

// let form = document.querySelector("#save-me");

// let prefix = "autosave_";

// function inputHandler(event) {
//   // Save the event target
//   let field = event.target;

//   localStorage.setItem(prefix + field.id, field.value)
// }

// function clearStorage() {
//   //
//   let fields = form.elements;

//   for (let field of fields) {
//     localStorage.removeItem(prefix + field.id);
//   }
// }

// function loadSaved() {
//   //
//   let fields = form.elements;
  
//   for(let field of fields) {
//     let saved = localStorage.getItem(prefix + field.id)
//     if(!saved) continue;
//     field.value = saved;
//   }
// }

// loadSaved();

// // Listen to DOM events
// form.addEventListener("input", inputHandler);
// form.addEventListener("submit", clearStorage);
=======
  //
  let fields = form.elements;

  for (let field of fields) {
    let saved = localStorage.getItem(prefix + field.id);
    if (!saved) continue;
    field.value = saved;
  }
}

loadSaved();

// Listen for DOM events
form.addEventListener("input", inputHandler);
form.addEventListener("submit", clearStorage);
>>>>>>> da17e3c297817d42284d3d8f0bd61e682ca5fc32
