class BookApi{

    static baseURL = "http://localhost:3000/books"
    
    static fetchBooks() {
        
        fetch(BookApi.baseURL)
        .then(response => response.json())
        .then(data => {
            data["data"].forEach(book => {
                    const newBook = new Book({id: book.id, ...book.attributes})
                    newBook.renderBook()
            });
           
                     
        })
    }

    //POST
     static formHandler() {
         
        const title = document.querySelector("#input-title").value 
        const image_url = document.querySelector("#input-image").value
        const remarks = document.querySelector("#input-remarks").value
        const categoryId = parseInt(document.querySelector("#categories").value)
        
        BookApi.createBook(title, image_url, remarks, categoryId)
        
       
    }

    static createBook(title, image_url, remarks, category_id) {
        const bodyData = {book:{title, image_url, remarks, category_id}}

        // const bodyData = {title, image_url, remarks, category_id}
        console.log(bodyData)
        // debugger
       
        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                 Accept: "application/json"
            },
            body: JSON.stringify(bodyData)
        }

        // debugger
        fetch(BookApi.baseURL, configObj)
        .then(response => response.json())
        .then(data => {
            const book = data["data"]
            // debugger
            console.log(book)
            let newBook = new Book({id: book.id, ...book.attributes})
                newBook.renderBook()
        
        })

    }


    //DELETE

    static deleteBook(id){
        
        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        fetch(`${BookApi.baseURL}/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)

        })
        

    }
    
} 
