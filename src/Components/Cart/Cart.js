import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
const Cart = ({ cart }) => {
    //console.log(cart);
    let name = '';
    let img = '';
    for (const item of cart) {
        name = item.name;
        img = item.picture;

    }
    return (
        <div className='cart'>
            <h2 style={{ textAlign: 'center' }}>Selected Coffees</h2>
            <div className='cart-items'>
                <img src={img} alt="" />
                <p>{name}</p>
                <button><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Cart;