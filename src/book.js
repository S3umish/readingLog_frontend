class Book {

  static all = []

  static list = document.querySelector("#List-of-Books")

  constructor(book){
      this.id = book.id
      this.title = book.title
      this.image_url = book.image_url
      this.remarks = book.remarks
      this.category_id = book.category_id

      Book.all.push(this)
  }

 

  renderBook(){

      let divCard = document.createElement("div")
      divCard.id = "cardID"
      divCard.className ="card"

      let H2 = document.createElement("h4")
      H2.innerText = this.title;

     
      let H4 = document.createElement("h6")
      H4.innerText = this.remarks;

      let Img = document.createElement("img")
      Img.className ="book-avatar"
      Img.src = this.image_url;

      let delButton = document.createElement("button")
      delButton.setAttribute('data-id', this.id)
      delButton.classname = "del-btn"
      delButton.id ="delButton"
      delButton.innerText = "Remove";
      delButton.addEventListener("click",this.handleDelete)

      divCard.append(H2, Img , H4, delButton);

      bookShow.append(divCard)
   
  }

  handleDelete = (e) => {
      e.preventDefault
      console.log(this)
      e.target.parentElement.remove()
      BookApi.deleteBook(this.id)
  }




  static filterByCategory(chooseCategory){      
      if (chooseCategory){

          let b =  Book.all.filter((book) => book.category_id === parseInt(chooseCategory.id))
          // console.log(b)
          let show = document.querySelector("#book-show")
              show.innerHTML = ` `

          for (const book of b){
              book.renderBook()}
      
          } else {

          for (const book of Book.all){
              console.log(book)
              
          }}
  }

  
  
  static sortBooks(){

      let books = Book.all
      let b = document.getElementById("demo").innerHTML   
         
         myFunction1() 
         books.sort();
  
         myFunction2() 
         books.sort(function(a, b){return a - b});
         document.getElementById("demo").innerHTML = books;
  }




  // static sortBooksByTitle = () => {
  //     debugger

  //     return Book.all.sort((a,b) => {

  //       let titleA = a.book.title.toUppercase()
  //       let titleB = b.book.title.toUppercase()
  //       if (titleA < titleB) {
  //         return -1
  //       }else{
  //         return 1
  //       }
  //     })

  // }
  totalButton(){
      let tButton = document.createElement("button");
      tButton.displayTotal = `${this.displayTotal}`
      this.list.appendChild(tbutton);
       tbutton.addEventListener("mouseover",bookTotal)

  }

  static displayTotal() {
      const bookTotal = Book.all.length
      console.log(bookTotal)
      alert(`Total Number of Books are ${bookTotal}`)
     
  }


  // static findById(id) {
  //     return this.all.find(book => book.id === this.id)
  // }

  // find as in the lesson

  // static find(array, criteriaFn){
  //     let current = array
  //     let next = []

  //     while (current || current === 0){

  //         if (criteriaFn(current)) {
  //             return current
  //         }

  //         if (Array. isArray(current)) {
  //             for (let i = 0; i< current.length; i++) {
  //                 next .push(current[i])
  //             }
  //         }

  //         current = next.shift()

  //         }
  //         return null
  //     }

      //find(numberCollections, number => number > 5) 
      //number => (typeof number === 'number' && number > 5) 




}
