export default function headerSearchToggle() {
  const searchForm = document.querySelector("#header-search-form");
  const searchFormBtn = document.querySelector("#header-search-btn")

  if (searchForm) {
    searchFormBtn.addEventListener("click", () => {
      searchForm.classList.toggle("_open");
    })
  }
}