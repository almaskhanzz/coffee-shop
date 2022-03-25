import React, { useEffect, useState } from 'react';
import Items from '../../Items/Items';
import './Shop.css';
const Shop = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div className='shop-container'>
            <div className="item-container">
                {
                    items.map(item => <Items
                        key={item.id}
                        item={item}
                    ></Items>)
                }
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Shop;