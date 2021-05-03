class CategoryApi {

    static baseURL = "http://localhost:3000/categories"
    
    static fetchCategories(){

        fetch(CategoryApi.baseURL)
        .then(response => response.json())
        .then(json => {
            json["data"].forEach(category => {                
                const newCategory = new Category({id: category.id, ...category.attributes})
                newCategory.addToDom()
            })        

        })
    }

}
