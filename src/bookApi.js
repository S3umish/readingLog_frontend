class BookApi {

    static baseURL = "http://localhost:3000/books"

    static bookContainer = document.querySelector('#book-container')

        static getBooks(){
            fetch(this.baseURL)
            .then(response => response.json())
        
            .then(data => {
                data["data"].forEach(book => {
                    const newBook = new Book({id: book.id, ...book.attributes} )
                    this.bookContainer.innerHTML += newBook.renderBook()

                })
            })
        }




}