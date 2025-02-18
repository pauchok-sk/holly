export default function productCardOrder() {
  const buttonsRect = document.querySelectorAll(".product-card__rect");

  if (buttonsRect.length) {
    buttonsRect.forEach(btn => {
      const productCard = btn.closest(".product-card");
      const order = productCard.querySelector(".product-card__order");

      btn.addEventListener("click", () => {
        if (!order.classList.contains("_open")) {
          handleOpen();
        } else {
          handleClose();
        }
      })

      function handleOpen() {
        btn.classList.add("_active");
        order.classList.add("_open");
      }

      function handleClose() {
        btn.classList.remove("_active");
        order.classList.remove("_open");
      }
    })
  }
}