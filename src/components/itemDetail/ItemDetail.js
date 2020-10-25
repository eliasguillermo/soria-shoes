import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import ItemCount from '../itemCounter/ItemCount.js';
import { CartContext } from '../../context/CartContext.js';
import CartSnackbar from '../cart/CartSnackbar.js';
import AlertDialog from '../common/AlertDialog.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    details: {
        maxWidth: 328,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#555',
        fontFamily: 'proxima-nova'
    },
    image: {
        marginTop: 15,
        height: 400
    },
    div: {
        padding: 20,
        maxWidth: 320,
        margin:'auto'
    },
    button: {
        display: 'block',
        width: '100%'
    }
});

export default function ItemDetail(props) {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const [, setCart] = useContext(CartContext);
    //Snackbar
    const [openBar, setOpenBar] = useState(false);

    const handleBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenBar(false);
    };

    //AlertDialog
    const [openAlert, setOpenAlert] = useState(false);

    const handleClose = () => {
        setOpenAlert(false);
    };

    return (
        <div>
            <label className="Section-Title">{props.data.name}</label>
            <div>
                <img alt="product" className={classes.image} src={props.data.image} />
            </div>
            <br />
            <div className={classes.details}>
                <label>{props.data.description}</label> <br /><br />
                <label> Price: ${props.data.price}</label> <br /><br />
                <ItemCount handleChange={handleChange} min="0" max="10" />
            </div>
            <div className={classes.div}>
                <Button id='AddButton' onClick={onAdd} className={classes.button} variant="outlined" color="primary">Add to cart</Button>
            </div>
            <CartSnackbar open={openBar} count={count} handleBarClose={handleBarClose} />
            <AlertDialog open={openAlert} message='Select at least 1 unit' handleClose={handleClose} />
        </div>

    )

    function onAdd() {
        if (count > 0) {
            setOpenBar(true);
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
            setOpenAlert(true);
        }
    }

    function handleChange(state) {
        setCount(state);
        state > 0 ? document.getElementById('AddButton').innerHTML = `Add ${state} to cart` : document.getElementById('AddButton').innerHTML = 'Add to cart';
    }

}
