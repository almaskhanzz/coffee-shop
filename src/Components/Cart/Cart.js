import React from 'react';
import './Cart.css';
const Cart = () => {
    return (
        <div className='cart'>
            <h2 style={{ textAlign: 'center' }}>Selected Coffees</h2>
            <div className='cart-items'>
            </div>
        </div>
    );
};

export default Cart;