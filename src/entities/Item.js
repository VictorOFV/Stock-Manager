class Item {
    constructor({ name, description, price, quantity, category, id }) {
        this.id = id
        this.name = name
        this.description = description
        this.price = +price
        this.quantity = +quantity
        this.category = category
        this.createdAt = new Date()
        this.updatedAt = null
        this.validate = this.#validate()
    }

    #validate() {
        const validateName = typeof this.name === 'string';
        const validateId = typeof this.id === 'string';
        const validateDescription = typeof this.description === 'string';
        const validatePrice = typeof this.price === 'number';
        const validateQuantity = typeof this.quantity === 'number';
        const validateCategory = typeof this.category === 'string';
    
        if (!validateName || this.name === "") {
            throw new Error("Name is invalid!");
        } else if (!validateId || this.id === "") {
            throw new Error("Id is invalid");
        } else if (!validateDescription || this.description === "") {
            throw new Error("Description is invalid");
        } else if (!validatePrice || isNaN(this.price) || this.price < 0) {
            throw new Error("Price is invalid");
        } else if (!validateQuantity || isNaN(this.quantity) || this.quantity < 0) {
            throw new Error("Quantity is invalid");
        } else if (!validateCategory || this.category === "") {
            throw new Error("Category is invalid");
        }
    }
    
}

export default Item