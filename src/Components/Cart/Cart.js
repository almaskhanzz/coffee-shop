import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
const Cart = (props) => {
    const { cart, removeCart, chooseCart } = props;
    return (
        <div className='cart'>
            <h2>Selected Coffees</h2>
            {
                cart.map(carts => <div key={carts.id} className='cart-items-container'>
                    <div className='cart-items'>
                        <img className='img' src={carts.picture} alt="" />
                        <p>{carts.name}</p>
                    </div>
                    <div>
                        <button><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
                    </div>
                </div>)
            }
            <div className='btn-choose'>
                <button onClick={() => chooseCart(cart)} >CHOOSE 1 FOR ME</button><br />
                <button onClick={() => removeCart()}>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;