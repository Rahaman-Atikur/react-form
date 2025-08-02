import React from 'react';

const ProductForm = () => {
    const handleProductForm = e => {
        e.preventDefault();
        console.log(e.target);
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        // console.log(name, price, quantity);
        const newProduct = {
            name,
            price,
            quantity
        }
        console.log(newProduct);
    }
    return (
        <div>
            <h3>Add a Product</h3>
            <form onSubmit={handleProductForm} >
                <input type="text" name='name' placeholder='Product Name' />
                <br />
                <input type="text" name='price' placeholder=' Price' />
                <br />
                <input type="text" name='quantity' placeholder=' Quantity' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};
export default ProductForm;