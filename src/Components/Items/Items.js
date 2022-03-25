import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Items.css';
const Items = (props) => {
    const { handlePlaceOrder, item } = props;
    const { name, price, picture } = item;
    //console.log(picture);
    return (
        <div className='item'>
            <img src={picture} alt="" />
            <div className='item-info'>
                <h3 className='name'>{name}</h3>
                <p className='price'>Price: ${price}</p>
            </div>
            <button onClick={() => handlePlaceOrder(item)} className='btn-cart'>
                <p>Place Order</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Items;