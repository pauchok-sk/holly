export default function productNumber() {
  const number = document.querySelector("#product-number");
  
  if (number) {
    const btnPlus = document.querySelector("#product-number-plus");
    const btnMinus = document.querySelector("#product-number-minus");

    btnPlus.addEventListener("click", () => number.value++)
    btnMinus.addEventListener("click", () => number.value > 1 && number.value--)
  }
}