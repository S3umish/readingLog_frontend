
class CommentApi {


    static baseURL = "http://localhost:3000/comments"

    static commentContainer = document.querySelector('#comment-container')

    static getComments() {

        fetch(this.baseURL)
        .then(response => response.json())
        .then( json => {
            json["data"].forEach(comment => {

                const newComment = new Comment({id: comment.id, ...comment.attributes} )
                newComment.addToDom()
                newComment.addToDropDown()

            })
        })


    }
    
}