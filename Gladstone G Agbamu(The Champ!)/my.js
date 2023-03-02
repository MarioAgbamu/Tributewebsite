window.addEventListener("load", function() {
    setTimeout(function() {
      document.querySelector("#preloader").style.opacity = 0;
      setTimeout(function() {
        document.querySelector("#preloader").style.display = "none";
      }, 1000);
    }, 3000);
  });
  


    // Check if data exists in local storage
    if (localStorage.getItem("formValues")) {
      // If it does, get the data and display it on the page
      var formValues = JSON.parse(localStorage.getItem("formValues"));
      document.getElementById("displayName").textContent = formValues.name;
      document.getElementById("displayComment").textContent = formValues.comment;
    } else {
      // If it doesn't, display default values
      document.getElementById("displayName").textContent = "No Name Entered";
      document.getElementById("displayComment").textContent = "No Comment Entered";
    }


  function submitForm() {  
  // Add a submit event listener to the form
  document.getElementById("form").addEventListener("submit", function(event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();
    
    // Get the form values
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    
    // Construct the URL for the next page with the form values as URL parameters
    var url = "display.html?name=" + encodeURIComponent(name)  + "&comment=" + encodeURIComponent(comment);
    
    // Redirect to the next page
    window.location.href = url;
  });
}
// Store the form values in local storage
var formValues = { name: name, comment: comment };
localStorage.setItem("formValues", JSON.stringify(formValues));



  var urlParams = new URLSearchParams(window.location.search);
  var name = urlParams.get("name");
  var comment = urlParams.get("comment");
  
  // Display the form values
  document.getElementById("displayName").textContent = name;
  document.getElementById("displayComment").textContent = comment;


   // Get previous form data from local storage, or create an empty array if none exists
   var formValues = JSON.parse(localStorage.getItem("formValues")) || [];
      
   // Add current form data to array
   formValues.push({ name: name, comment: comment });
   
   // Store the array in local storage
   localStorage.setItem("formValues", JSON.stringify(formValues));

       // Reset form fields
       document.getElementById("name").value = "";
       document.getElementById("comment").value = "";
       
   