import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const dolar = 5.51;

const products = [
    { id: 1, name: 'Mouse Attack Shark', price: 50 * dolar },
    { id: 2, name: 'Teclado AULA', price: 150 * dolar },
    { id: 3, name: 'Monitor AOC', price: 900 * dolar },
    { id: 4, name: 'Notebook DELL', price: 1500  * dolar },
    { id: 5, name: 'Headphones HyperX', price: 200 * dolar},
    { id: 6, name: 'Webcam', price: 100 * dolar },
    { id: 7, name: 'Microfone HyperX', price: 120 * dolar },
    { id: 8, name: 'Speaker Logitech', price: 300 * dolar },
    { id: 9, name: 'USB Hub', price: 40 * dolar },
    { id: 10, name: 'HD externo Kingston', price: 250 * dolar },
    { id: 11, name: 'Placa de Vídeo RX4090', price: 2000 * dolar },
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
                <h2>Produtos</h2>
                {feedback && <p className="feedback">{feedback}</p>}
                {products.map(product => (
                    <div key={product.id}>
                        {product.name} - R${product.price.toFixed(2)}
                        <button onClick={() => handleAdd(product)}>Adicionar ao Carrinho</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
