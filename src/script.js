const searchForm = document.querySelector(".search-btn");

searchForm.addEventListener("click", () =>
{
    searchFormBtn();
})
function searchFormBtn()
{
    searchForm.classList.toggle("open")
}