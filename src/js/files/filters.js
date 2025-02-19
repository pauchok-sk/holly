export default function filters() {
  const filters  = document.querySelector("#filters");
  
  if (filters) {
    const btnOpen = document.querySelector("#filters-open");
    const btnClose = document.querySelector("#filters-close");
    const overlay = document.querySelector("#filters-overlay");

    btnOpen.addEventListener("click", handleOpen)
    btnClose.addEventListener("click", handleClose)
    overlay.addEventListener("click", handleClose)

    function handleOpen() {
      document.body.classList.add("body-hidden");
      filters.classList.add("_open");
      overlay.classList.add("_active");
    }

    function handleClose() {
      document.body.classList.remove("body-hidden");
      filters.classList.remove("_open");
      overlay.classList.remove("_active");
    }
  }
}