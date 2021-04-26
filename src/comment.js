class Comment{

    static all =[]

    constructor ({id, name}){

        this.id = id
        this.name = name
        
        Comment.all.push(this)
    }
}