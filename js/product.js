const product = document.querySelectorAll("#product-list li");
const allCard = document.querySelectorAll(".product-container .sub-product");

function onFilter(e) {
  const datagroup = e.target.getAttribute("data-product");

  allCard.forEach((list) => {
    if (datagroup == 0) {
      list.classList.remove("hidden");
    } else {
      if (list.getAttribute("data-product") != datagroup) {
        list.classList.add("hidden");
      } else {
        list.classList.remove("hidden");
      }
    }
  });
}

product.forEach((list) => {
  list.addEventListener("click", onFilter);
});

// let iconCart = document.querySelector(".icon-cart");
// let closeBtn = document.querySelector(".close");
// let body = document.querySelector("body");

// iconCart.addEventListener("click", () => {
//   body.classList.toggle("activateCart");
// });

// closeBtn.addEventListener("click", () => {
//   body.classList.toggle("activateCart");
// });

// let add = 0;
// let number = document.querySelector(".icon-cart");
// function addToCart() {
//   number.addEventListener("click", () => {
//     add++;
//   });
// }
