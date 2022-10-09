import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h1>order summary</h1>
            <p>selected items:{cart.length}</p>
        </div>
    );
};

export default Cart;