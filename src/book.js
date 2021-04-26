class Book {

    static all = []

    constructor({id, title, image_url, category, comment_id}){

        this.id = id
        this.title = title
        this.image_url = image_url
        this.category = category
        this.commentId = comment_id
     
    

        Book.all.push(this)

    }


    renderBook() {

        // this.element.innerHTML = 
        return`
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src=${this.image_url} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
             <p class="card-text">${this.category}</p>
             <p class="card-text">${this.commentId}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">Comment: ${this.commentId}</small>
            </div>
          </div>
        </div>
      </div>
      <br><br>`;
     
    }

    




}