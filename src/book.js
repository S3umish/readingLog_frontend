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

  


  totalButton(){
      let tButton = document.createElement("button");
      tButton.displayTotal = `${this.displayTotal}`
      this.list.appendChild(tbutton);
    //   tbutton.addEventListener("mouseover",bookTotal)
      
  }

  static displayTotal() {
      const bookTotal = Book.all.length
      console.log(bookTotal)
      alert(`Total Number of Books are ${bookTotal}`)
      
  }


 


}
