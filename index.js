const BASE_URL = "http://localhost:3000"


const list = document.querySelector("#List-of-Books")

const submitButton = document.getElementById("create-button")

const dropdown = document.querySelector("#cat-dropdown")


const bookShow = document.querySelector("#book-show")

// const bookSortDisplay = document.querySelector("#display-books")
//  bookSortDisplay.addEventListener("click",handleSortClick)



const form = document.querySelector("#create-book-form")
form.addEventListener("submit", handleFormSubmit)



function handleFormSubmit(e) {
    e.preventDefault()  
    BookApi.formHandler() 
    form.reset()       
}



 const greetButton = document.querySelector("button").addEventListener("click", handleClick)


 function handleClick(e) {
    e.preventDefault()
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
    
 }

 function displayMessage(msg){
     document.getElementById("greeting").innerText = msg
 }


 function greet(timeStr){
     const hour = parseInt(timeStr,10)
     if(hour < 12) return "Good Morning"
     if(hour > 17) return "Good Evening"
     return "Good Afternoon"
 }






BookApi.fetchBooks()
CategoryApi.fetchCategories()