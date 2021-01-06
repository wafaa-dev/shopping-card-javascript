var partTot = Array.from(document.getElementsByClassName("partial-total"));
var quantity = Array.from(document.getElementsByClassName("input_quantity"));
var productPrice = Array.from(document.getElementsByClassName("product_price"));

// Incrementing
let plusBtn = Array.from(document.getElementsByClassName("plus-button"));
for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function () {
    plusBtn[i].nextElementSibling.innerText++;
    //Update partiel total
    partTot[i].innerText = quantity[i].innerText * productPrice[i].innerText;
    //Update the total price
    total();
  });
}

// Decrementing
let minusBtn = Array.from(document.getElementsByClassName("minus-button"));
for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener("click", function () {
    minusBtn[i].previousElementSibling.innerText--;
    //Update partiel total
    partTot[i].innerText = quantity[i].innerText * productPrice[i].innerText;
    //Update the total price
    total();
  });
}

// Removing
let removeButton = Array.from(document.querySelectorAll(".btn_remove"));
removeButton.forEach((el) =>
  el.addEventListener("click", function () {
    el.parentElement.parentElement.parentElement.remove();
    totalPrice();
  })
);

// Like
let likeBtn = document.querySelectorAll(".btn-like");
let heart = document.querySelectorAll(".like");
for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener("click", function () {
    if (heart[i].style.fill === "black") {
      heart[i].style.fill = "#2da345";
    } else {
      heart[i].style.fill = "black";
    }
  });
}

// Total
function total() {
  let productPrice = Array.from(
    document.getElementsByClassName("product_price")
  );
  let quantity = Array.from(document.getElementsByClassName("input_quantity"));
  let sum = 0;
  for (let i = 0; i < productPrice.length; i++) {
    sum += productPrice[i].innerText * quantity[i].innerText;
    console.log(sum);
  }
  document.getElementById("total").innerText = sum;
}
