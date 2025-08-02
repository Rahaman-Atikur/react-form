import React, { useState } from 'react';
const ProductForm = ({ handleNewProduct }) => {
    const [error, setError] = useState('');
    const handleProductForm = e => {
        e.preventDefault();
        console.log(e.target);
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        // Validation
        if (name.length == 0) {
            setError('Please Provide Product Name');
            return;
        }
        else if (price.length == 0) {
            setError('Please add a price number');
            return;
        }
        else if (price.length < 0) {
            setError('Price can not be Negative');
            return;
        }
        else {
            setError('');
        }
        // console.log(name, price, quantity);
        const newProduct = {
            name,
            price,
            quantity
        }
        if (!error) {
            handleNewProduct(newProduct);
        }

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
            <p style={{ color: 'red' }}>{error}</p>
        </div>
    );
};
export default ProductForm;