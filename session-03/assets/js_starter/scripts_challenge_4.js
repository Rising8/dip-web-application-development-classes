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
  let target = event.target;
  let key = getKey(target);
  if (!key) return; // if no name or id, ignore
  
  // Save the value to localStorage with prefix + key
  localStorage.setItem(prefix + key, target.value);
}

/**
 * Clear all of the saved fields from storage
 */
function clearStorage() {
  // Loop backwards since localStorage length changes on removal
  for (let i = localStorage.length - 1; i >= 0; i--) {
    let key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      localStorage.removeItem(key);
    }
  }
  // Reset form fields visually
  form.reset();
}

/**
 * Load saved data from localStorage
 */
function loadSaved() {
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