document.addEventListener("DOMContentLoaded", () => {
  // Grab elements from the DOM
  const fetchApodButton = document.getElementById("fetch-apod");
  const apodContent = document.getElementById("apod-content");

  // const apiKey = "YOUR_API_KEY";      (My NASA API key)
  const apiKey = "lnSaIZGsNvAcQcklteeOoEZpvxmCi56m6sJZBwku";

  // Adds a click listener to the fetch button
  fetchApodButton.addEventListener("click", () => {
    // Gets users input values
    const date = document.getElementById("date").value;
    const startDate = document.getElementById("start_date").value;
    const endDate = document.getElementById("end_date").value;
    const count = document.getElementById("count").value;
    const thumbs = document.getElementById("thumbs").checked;

    // Creates an array for API query parameters
    let params = [];
    if (count) params.push(`count=${count}`);
    if (startDate) params.push(`start_date=${startDate}`);
    if (endDate) params.push(`end_date=${endDate}`);
    if (date) params.push(`date=${date}`);
    if (thumbs) params.push(`thumbs=${thumbs}`);

    // Challenge 1: Constructs the API URL with parameters
    // 1. check all the form fields to see which fields have data
    // 2. add them to the apiURL as parameters
    // 3. Test the responses in the Network tab

    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    if (params.length > 0) {
      apiUrl += `&${params.join("&")}`; // Appends params if they exist
    }
    console.log("Final API URL:", apiUrl);

    // Challenge 2: Adds headers to API call
    // 1. add the following headers to your API call content type, user agent & cache control
    // 2. set the cache control no no cache
    // 3. set the content type application/json
    // 4. Test the responses in the Network tab

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Tells the API we want JSON
        "Cache-Control": "no-cache", // Force fresh results, no cached data
        "User-Agent": "MyNASAApp/1.0", // Example custom user agent
      },
    })

      // Challenge 3: Handle errors properly
      // 1. if not ok throw a new error which includes the status code
      // 2. Test the responses in the Network tab
      // 3. change the anonymous arrow function below to check if the response code is 200(ok)
      // 4. if the response is ok return the response.json() object
      .then((response) => {
        if (response.ok) {
          // If status code is 200-299 -> Success
          return response.json();
        } else {
          // If status is not ok, throw an error with status code
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
      })
      // Handle the response data
      .then((data) => {
        apodContent.innerHTML = ""; // Clears old content

        // NASA APOD API returns either an array (for ranges/counts) or a single object
        if (Array.isArray(data)) {          
          data.forEach((item) => displayApod(item, apodContent));
        } else {
          displayApod(data, apodContent);
        }
      })
      .catch((error) =>{
        // Handle network or response errors
        apodContent.innerHTML = `<p style="color:red;">Error fetching item: ${error.message}</p>`;
      });
  });

  // Challenge 4: Reusable function for displaying APOD data
  // Takes one APOD item from the NASA API response and the container element (apodContent), then displays the result
  function displayApod(item, apodContent) {
    // If media is an image
    if (item.media_type === "image") {
      // Adds an <img> element, title and explanation into the container
      apodContent.innerHTML += `
        <figure class="image is-4by3">
          <img src="${item.url}" alt="${item.title}">
        </figure>
        <h2 class="title is-4">${item.title}</h2>
        <p>${item.explanation}</p>
      `;
    } 
    // If the media is a VIDEO
    else if (item.media_type === "video") {
      // Adds an <iframe> to embed the video, title and explanation
      apodContent.innerHTML += `
        <div class="video-apodContent">
          <iframe src="${item.url}" frameborder="0" allowfullscreen></iframe>
        </div>
        <h2 class="title is-4">${item.title}</h2>
        <p>${item.explanation}</p>
      `;
    } 
    // If the media is something else
    else {
      // Show a fallback message
      apodContent.innerHTML += `<p>Media type not supported: ${item.media_type}</p>`;
    }
  }
});
