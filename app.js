const form = document.querySelector("form");
const rating = document.querySelectorAll("li");
let isClicked = false;

rating.forEach(function (element) {
  element.addEventListener("click", function () {
    if (!isClicked){
      element.classList.add("selection");
      console.log("Element clicked!");
      isClicked = true;
    } 
  });
});
