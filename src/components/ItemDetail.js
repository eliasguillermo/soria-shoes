import React from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount.js'

export default function ItemDetail(props) {
    return (
        <div className="container">
                <div>
                    <img alt="product" className="preview-pic" src={props.data.image} />
                </div>
            <div className="details">
                <h2>{props.data.name}</h2>
                <p>{props.data.description}</p>
                <h3>Price: <span>{props.data.price}</span></h3>
                <ItemCount min="0" max="10" />
            </div>
        </div>

    )

}
