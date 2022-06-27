const submitBtn = document.querySelector(".submit-btn");
const rating = document.querySelector(".rating");
const rates = document.querySelectorAll(".rate");
const ratingContainer = document.querySelector(".rating-container");
const rateValue = document.querySelector(".rate-value");

rating.addEventListener("click", (e) => {
  //add class active to the clicked element
  if (e.target.classList.contains("rate")) {
    rates.forEach((rate) => rate.classList.remove("active"));
    e.target.classList.add("active");
  }
  //show the submit button
  if (e.target.classList.contains("active")) {
    submitBtn.removeAttribute("hidden");
  }
});

submitBtn.addEventListener("click", () => {
  //show the thank you message and hide the rating container
  const thankYou = document.querySelector(".thank-you");
  if (ratingContainer.style.display !== "block") {
    thankYou.style.display = "block";
    ratingContainer.style.display = "none";
  } else {
    thankYou.style.display = "none";
    ratingContainer.style.display = "block";
  }

  //access the rating value and store it in a variable to be used in the api call
  let rateContent = document
    .querySelector(".rate.active")
    .getAttribute("data-rate");
  rateValue.innerHTML = `${rateContent}/5`;
});