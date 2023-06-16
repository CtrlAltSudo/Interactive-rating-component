const form = document.querySelector("form");
const rating = document.querySelectorAll("li");


let isClicked = false;

rating.forEach(function(list) {
  list.addEventListener('click', function() {
    rating.forEach(function(sel) {
      if (sel !== list) {
        sel.classList.remove("selection");
      }
    });

    list.classList.toggle("selection");
    console.log("Element clicked!");
  });
});


