import React, {useState, useContext } from 'react';
import './ItemDetail.css';
import Button from '@material-ui/core/Button';
import './ItemCount.css';
import ItemCount from './ItemCount.js';
import { CartContext } from './context/CartContext.js';
import CartSnackbar from './CartSnackbar.js';

export default function ItemDetail(props) {

    const [count, setCount] = useState(0);
    const [,setCart] = useContext(CartContext);
    //Snackbar
    const [open, setOpen] = useState(false);

    return (
        <div class="container">
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
                <Button id='AddButton' onClick={onAdd} className="Add-Button" variant="outlined" color="primary">Add to cart</Button>
            </div>
            <CartSnackbar open={open} count={count}/>
        </div>

    )

    function onAdd() {
        if (count > 0) {
            setOpen(true);
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
        setCount(state);
        state > 0 ? document.getElementById('AddButton').innerHTML = `Add ${state} to cart` : document.getElementById('AddButton').innerHTML = 'Add to cart';
    }

}
