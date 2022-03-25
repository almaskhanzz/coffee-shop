import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Items.css';
const Items = (props) => {
    const { item } = props;
    const { id, name, price, picture } = item;
    //console.log(picture);
    return (
        <div className='item'>
            <img src={picture} alt="" />
            <div className='item-info'>
                <h3 className='name'>{name}</h3>
                <p className='price'>Price: ${price}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Items;