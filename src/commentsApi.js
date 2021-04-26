class Book {

    static all = []

    constructor({id, title, image_url, comment_id}){

        this.id = id
        this.title = title
        this.image_url = image_url
        this.commentID = comment_id

        Book.all.push(this)

    }

}