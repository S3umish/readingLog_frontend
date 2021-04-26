class BookApi {

    static baseURL = "http://localhost:3000/books"

        static getBooks(){
            fetch(this.baseURL)
            .then(response => response.json())
        
            .then(data => {
                data["data"].forEach(book => {
                    const b = new Book({id: book.id, ...book.attributes} )
        
                    console.log(b)

                })
            })
        }
}