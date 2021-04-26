class Comment{

    static all =[]

    static commentContainer = document.querySelector('#comment-container')

    constructor ({id, name}){

        this.id = id
        this.name = name

        this.liElement = document.createElement('li')

        Comment.all.push(this)
    }


    renderComment(){
        this.liElement.innerText = this.name
        this.liElement.id = `comment-{this.id}`
        return this.liElement
    }

    addToDom(){
        Comment.commentContainer.append(this.renderComment())
    }

    addToDropDown(){
        const option = document.createElement('option')
        option.value  = this.id 
        option.innerText = this.name
        dropdown.append(option)
    }
}