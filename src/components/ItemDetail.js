import React, { useContext } from 'react';
import './ItemDetail.css';
import Button from '@material-ui/core/Button';
import './ItemCount.css';
import ItemCount from './ItemCount.js'
import { CartContext } from './CartContext.js'

export default function ItemDetail(props) {

    let count = 0;
    const [,setCart] = useContext(CartContext);

    return (
        <div className="container">
            <div>
                <img alt="product" className="preview-pic" src={props.data.image} />
            </div>
            <div className="details">
                <h2>{props.data.name}</h2>
                <p>{props.data.description}</p>
                <h3>Price: <span>${props.data.price}</span></h3>
                <ItemCount handleChange={handleChange} min="0" max="10" />
            </div>
            <div className="Add-Div">
                <Button id='AddButton' onClick={onAdd} classes={{ root: 'Add-Button' }} variant="outlined" color="primary">Add to cart</Button>
            </div>
        </div>

    )

    function onAdd() {
        if (count > 0) {
            alert(count + ' products added.')
            setCart((currentCart) => {
                const c = currentCart.find(p => p[0].id === props.data.id);
                let newState;
                if (c !== undefined) {
                    c[1] += count;
                    newState = [...currentCart];
                }
                else {
                    newState = [...currentCart, [props.data, count]]
                }
                return newState;
            });
        }
        else {
            alert('Select at least 1 unit.');
        }
    }

    function handleChange(state) {
        count = state
        state > 0 ? document.getElementById('AddButton').innerHTML = 'Add ' + count + ' to cart' : document.getElementById('AddButton').innerHTML = 'Add to cart';
    }

}
