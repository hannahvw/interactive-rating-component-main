const submitBtn = document.querySelector(".submit-btn");
const ratingCard = document.querySelector(".rating-container");
const thankYouCard = document.querySelector(".thank-you-container");
const rating = document.querySelector(".rating-selection");
const ratingOptions = document.querySelectorAll(".rating-numbers li");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");

function changeCard() {
  ratingCard.style.display = "none";
  thankYouCard.style.display = "unset";
}

submitBtn.addEventListener("click", changeCard);

function changeStyleOne() {
  one.style.backgroundColor = "var(--neutral-color-light)";
  one.style.color = "var(--neutral-color-white)";
  rating.innerText = ratingOptions[0].innerText;
}
function changeStyleTwo() {
  two.style.backgroundColor = "var(--neutral-color-light)";
  two.style.color = "var(--neutral-color-white)";
  rating.innerText = ratingOptions[1].innerText;
}
function changeStyleThree() {
  three.style.backgroundColor = "var(--neutral-color-light)";
  three.style.color = "var(--neutral-color-white)";
  rating.innerText = ratingOptions[2].innerText;
}
function changeStyleFour() {
  four.style.backgroundColor = "var(--neutral-color-light)";
  four.style.color = "var(--neutral-color-white)";
  rating.innerText = ratingOptions[3].innerText;
}
function changeStyleFive() {
  five.style.backgroundColor = "var(--neutral-color-light)";
  five.style.color = "var(--neutral-color-white)";
  rating.innerText = ratingOptions[4].innerText;
}

one.addEventListener("click", changeStyleOne);
two.addEventListener("click", changeStyleTwo);
three.addEventListener("click", changeStyleThree);
four.addEventListener("click", changeStyleFour);
five.addEventListener("click", changeStyleFive);
