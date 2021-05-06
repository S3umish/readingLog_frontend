const BASE_URL = "http://localhost:3000"
const list = document.querySelector("#List-of-Books")
const submitButton = document.getElementById("create-button")
const dropdown = document.querySelector("#cat-dropdown")
const bookShow = document.querySelector("#book-show")

const form = document.querySelector("#create-book-form")
form.addEventListener("submit", handleFormSubmit)



function handleFormSubmit(e) {
    e.preventDefault()  
    BookApi.formHandler() 
    form.reset()       
}





BookApi.fetchBooks()
CategoryApi.fetchCategories()