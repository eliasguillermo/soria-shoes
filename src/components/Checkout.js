import React, { useContext, useState } from 'react';
import { CartContext } from './context/CartContext.js'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { getFirestore } from '../firebase';
import * as firebase from 'firebase/app';
import Grid from '@material-ui/core/Grid';
import CartPreview from './CartPreview.js'
import Loading from './Loading.js'
import { NavLink } from "react-router-dom";
import './Checkout.css';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },
    button: {
        padding: 30
    },
    control: {
        padding: theme.spacing(2)
    }
}));


export default function Checkout() {
    const classes = useStyles();
    const [cart, setCart] = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(0);

    const productTotal = cart.reduce((pSum, e) => {
        pSum += e[0].price * e[1];
        return pSum;
    }, 0);

    function validateFields() {

        let buyerName = document.getElementById("buyerName");
        console.log('BUYER ' + buyerName.value);

        if (buyerName.value === "") {
            buyerName.error = true;
            return false;
        }
        else {
            buyerName.error = false;
            return true;
        }
    }

    function placeOrder() {

        if (validateFields()) {

            setLoading(true);
            const db = getFirestore();

            const orders = db.collection("orders");

            const buyerInfo = {
                name: document.getElementById("buyerName").value,
                lastname: document.getElementById("buyerLastName").value,
                phone: document.getElementById("buyerPhone").value,
                email: document.getElementById("buyerEmail").value
            }

            const cartInfo = cart.map((u) => {
                return {
                    id: u[0].id,
                    name: u[0].name,
                    price: u[0].price,
                    quantity: u[1]
                }
            });

            const newOrder = {
                buyer: buyerInfo,
                items: cartInfo,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: productTotal
            };

            orders.add(newOrder).then(({ id }) => {
                setOrderId(id); //SUCCESS
                setCart([]);
            }).catch(err => {
                console.log('Error placing order'); //ERROR
            }).finally(() => {
                setLoading(false);
            });

        }
    }

    return (
        <div>
            { loading ? <Loading /> :
                orderId !== 0 ?
                    <div>
                        <label className="Checkout"> Your order #{orderId} was created successfully!
            <br /><br/> <NavLink className={classes.link} to="/">Click here</NavLink> to continue shopping
            </label>
                    </div>
                    :
                    <div>
                        <div className="Cart-title">Checkout</div>
                        <Grid container justify="center" spacing={10}>
                            <Grid key="grid-1" item>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <Typography variant="h6">
                                    <label>Contact information</label>
                                    </Typography>
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
                            </Grid>
                            <Grid key="grid-2" item>
                                <CartPreview />
                            </Grid>
                        </Grid>
                    </div>}
        </div>
    );
}


