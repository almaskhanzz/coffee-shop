import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
const Cart = (props) => {
    const { cart, removeCart } = props;
    return (
        <div className='cart'>
            <h2>Selected Coffees</h2>
            {
                cart.map(carts => <div key={carts.id} className='cart-items'>
                    <img src={carts.picture} alt="" />
                    <p>{carts.name}</p>
                    <button><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
                </div>)
            }
            <div className='btn-choose'>
                <button>CHOOSE 1 FOR ME</button>
                <button onClick={() => removeCart(cart)}>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;