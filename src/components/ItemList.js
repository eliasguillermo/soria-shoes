import React from 'react';
import './ItemList.css';
import Item from './Item'


function ItemList(props) {
    return (
        <div className="Product-Body">
            {props.data.map(u => 
            <Item key={u.id} productId={u.id} title={u.name} image={u.image} />)
            }
        </div>
    )
}

export default ItemList;