import React, { useContext } from 'react';
import { CartContext } from './context/CartContext.js'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { getFirestore } from '../firebase';
import * as firebase from 'firebase/app';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },
    button: {
        padding: 30
    }
}));


export default function Checkout() {
    const classes = useStyles();
    const [cart,] = useContext(CartContext);

    function placeOrder () {
  
        const db = getFirestore();
    
        const orders = db.collection("orders");
    
        const buyerInfo = {
            name: document.getElementById("buyerName").value,
            lastname: document.getElementById("buyerLastName").value,
            phone: document.getElementById("buyerPhone").value,
            email: document.getElementById("buyerEmail").value
        }
    
        const cartInfo = cart.map((u) => {
           return {id: u[0].id,
            name: u[0].name,
            price: u[0].price,
            quantity: u[1]
            }
        });

        console.log(cartInfo);

        const newOrder = {
            buyer: buyerInfo,
            items: cartInfo,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: '100',
        };

        console.log(buyerInfo);
        console.log(newOrder);
    
        orders.add(newOrder).then(({id}) => {
            console.log('order id' + id);
            //setOrderId(id); //SUCCESS
        }).catch(err => {
           console.log('Error placing order'); //ERROR
        }).finally(() => {
            //setLoading(false);
        });
    
    }

    return (
        <div>
            <div className="Cart-title">Checkout</div>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField required id="buyerName" label="Name" />
                </div>
                <div>
                    <TextField required id="buyerLastName" label="Last name" />
                </div>
                <div>
                    <TextField required id="buyerPhone" label="Phone" />
                </div>
                <div>
                    <TextField required id="buyerEmail" label="Email" />
                </div>
                <div>
                    <TextField required id="buyerConfirmEmail" label="Confirm Email" />
                </div>
                <div className={classes.button} >
                    <Button variant="contained" color="primary" onClick={placeOrder}>
                        Place order
                    </Button>
                </div>
            </form>
        </div>
    );
}