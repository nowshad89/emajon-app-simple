import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = (total*0.10).toFixed(2);
    const grandTotal = total + totalShipping + parseFloat(tax);
    return (
        <div className='cart-result'>
            <h1>Order Summary</h1>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: {grandTotal}</h4>
        </div>
    );
};

export default Cart;