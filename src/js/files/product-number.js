export default function productNumber() {
  const numbers = document.querySelectorAll(".product-number");

  if (numbers.length) {
    numbers.forEach((n) => {
      const btnPlus = n.querySelector(".product-number-plus");
      const btnMinus = n.querySelector(".product-number-minus");
      const value = n.querySelector(".product-number-value");

      btnPlus.addEventListener("click", () => value.value++);
      btnMinus.addEventListener(
        "click",
        () => value.value > 1 && value.value--
      );
    });
  }
}
