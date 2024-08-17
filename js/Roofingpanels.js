document.addEventListener("DOMContentLoaded", function () {
  const learnMoreButtons = document.getElementsByClassName("learnmore");
  const moreInfos = document.getElementsByClassName("more-info");
  const closeButtons = document.getElementsByClassName("closeButton");

  for (let i = 0; i < learnMoreButtons.length; i++) {
    learnMoreButtons[i].addEventListener("click", function () {
      moreInfos[i].classList.remove("hidden");
    learnMoreButtons[i].classList.add("learnmore"); // Assuming you want to add the "child" class here
    });
  }

  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function () {
      moreInfos[i].classList.add("hidden");
    });
  }
});
