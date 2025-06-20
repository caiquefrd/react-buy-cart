import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const dolar = 5.51;

const products = [
    { id: 1, name: 'Mouse', price: 50 * dolar },
    { id: 2, name: 'Keyboard', price: 150 * dolar },
    { id: 3, name: 'Monitor', price: 900 * dolar },
    { id: 4, name: 'Laptop', price: 1500  * dolar },
    { id: 5, name: 'Headphones', price: 200 * dolar},
    { id: 6, name: 'Webcam', price: 100 * dolar },
    { id: 7, name: 'Microphone', price: 120 * dolar },
    { id: 8, name: 'Speaker', price: 300 * dolar },
    { id: 9, name: 'USB Hub', price: 40 * dolar },
    { id: 10, name: 'External Hard Drive', price: 250 * dolar },
    { id: 11, name: 'Graphics Card', price: 2000 * dolar },
];

const ProductList = () => {
    const { addItemToCart } = useContext(CartContext);
    const [feedback, setFeedback] = useState('');

    const handleAdd = (product) => {
        addItemToCart(product);
        setFeedback(`✔️ ${product.name} added to cart!`);
        setTimeout(() => setFeedback(''), 5000);
    };

    return (
        <div className='section'>
            <div>
                <h2>Products</h2>
                {feedback && <p className="feedback">{feedback}</p>}
                {products.map(product => (
                    <div key={product.id}>
                        {product.name} - R${product.price.toFixed(2)}
                        <button onClick={() => handleAdd(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
