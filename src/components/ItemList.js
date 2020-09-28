import React from 'react';
import './ItemList.css';
import Item from './Item'


function ItemList(props) {
    return (
        <div className="Product-Body">
            {props.data.map(u => 
            <Item data={u} key={u.id} />)
            }
        </div>
    )
}

export default ItemList;