class Category{

    static allCategories = []
    
    static categoryForm = document.querySelector("#category-form")


    constructor(category){
        this.id = category.id
        this.name = category.name

        this.active = false
       
        this.element = document.createElement('button')
       
        Category.allCategories.push(this)
    }

    books(){
        return Book.all.filter((book) => book.category_id === parseInt(this.id))
    }

    render(){
        this.element.innerText = this.name 
        this.element.id = `category-${this.id}`
        return this.element
    }

    addToDom(){
        Category.categoryForm.append(this.render())
        this.addListeners()
    }

    addListeners(){
      this.element.addEventListener('click', this.setActivecategory)
    }
      

    setActivecategory = (e) => {
        let chooseCategory
        Category.allCategories.forEach(c => {

            if(c.element === this.element && !this.active){
                // debugger
                
                c.element.classList.add('activated')
                c.active = true
                chooseCategory = c
            } else{
                c.element.classList.remove('activated')
                c.active = false
            }
            
        }) 
        
        Book.filterByCategory(chooseCategory)

    }

    

   


}


