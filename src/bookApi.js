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


        static formHandler(e) {
            e.preventDefault()
            const title = document.querySelector("#input-title").value 
            const image_url = document.querySelector("#input-image_url").value
            const category = document.querySelector("#input-category").value
            const commentId = parseInt(document.querySelector("#input-comment").value)
            postFetch(title, image_url, category, commentId) 
        }
    
      
        static postBook(title, image_url, category, commentId) {
            const bodyData = {title, image_url, category, commentId}
    
            let configObj = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(bodyData)
            }
            fetch(this.baseURL, configObj)
            .then(response => response.json())
            .then(data => {
                console.log(data)
    
            // const book = data["data"]
            // console.log(book)
            
            // let newBook = new Book(book , book.attributes)
            // // console.log(newBook)
                    
            // document.querySelector('#book-container').innerHTML += newBook.renderBook()
        })
    }
    
    
    







}
