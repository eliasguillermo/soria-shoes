import React from 'react';
import EmptyCart from '../images/cart-empty.png';
import { NavLink } from "react-router-dom";
import './CartEmpty.css';

export default function CartEmpty() {

    return (
        <div className="Cart-empty">
            <img src={EmptyCart} alt="empty-cart"></img>
            <label><NavLink className="Cart-link" to="/">Click here</NavLink> to start shopping</label>
        </div>
    )
}