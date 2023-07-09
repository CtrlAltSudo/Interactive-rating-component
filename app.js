const form = document.querySelector("form");
const rating = document.querySelectorAll("li");
const thankYou = document.querySelector("span");
const secondContainer = document.getElementsByClassName("selContainer");

let selectedValue = null; 
let isClicked = false;

rating.forEach(function(list) { // Iterates over all the li HTML tags 
  list.addEventListener('click', function() { // Listens for a click on the iteration
    rating.forEach(function(sel) { // Iterates over the rating 
      if (sel !== list) { // Checks if selection is not the same as initial click
        sel.classList.remove("selection"); // removes selection CSS class 
      }
    });
    selectedValue = list.innerText; // stores the selected value in a variable
    thankYou.innerText = selectedValue + " ";
    list.classList.toggle("selection"); // Adds or removes selection class 
    console.log("Element clicked!"); // Used to help me check if code was working
  });
});



form.addEventListener("submit", function (event) {
  if (!selectedValue) {
    event.preventDefault(); // Prevent the form submission
    alert("Please select a rating before submitting."); // Display an alert message
  } else if (selectedValue){
    event.preventDefault(); // Prevent the form submission
    document.getElementById("container").style.display = "none"; // hides selection container once submit is clicked
    document.getElementById("selContainer").style.display = "flex"; // displays thank you container after selection is made and submit is clicked
  }
});

//DISCLAIMER ChatGPT helped with this code

