// traversing the DOM
const closeBtns = document.querySelectorAll(".question-btn");

closeBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
  });
});
