import React from 'react';
import EmptyCart from '../../images/cart-empty.png';
import { NavLink } from "react-router-dom";

export default function CartEmpty() {

    return (
        <div className="Page-message">
            <img src={EmptyCart} alt="empty-cart"></img>
            <label><NavLink className="Page-link" to="/">Click here</NavLink> to start shopping</label>
        </div>
    )
}