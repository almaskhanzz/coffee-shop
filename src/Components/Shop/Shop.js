import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Items from '../Items/Items';
import './Shop.css';
const Shop = () => {
    //for items
    const [items, setItems] = useState([]);
    //for cart
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    //to share data of items with cart
    const handlePlaceOrder = (item) => {
        // console.log(item);
        const newCart = [...cart, item];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="item-container">
                {
                    items.map(item => <Items
                        key={item.id}
                        item={item}
                        handlePlaceOrder={handlePlaceOrder}
                    ></Items>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;