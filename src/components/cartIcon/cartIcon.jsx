import './cartIcon.css';
import React, { useState } from 'react';
const CartIcon=(props)=>{
    return <div><div className="circleCartIcon">{props.cart.cartQty!=null?props.cart.cartQty:0}</div>
    <div className="rextangleCartIcon">${props.cart.cartTotal.toFixed(2)}</div>
    </div>
}
export default CartIcon;