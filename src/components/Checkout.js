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
import CartEmpty from './CartEmpty.js';
import { useFormik } from 'formik';

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
    },
    link: {
        textDecoration: 'none',
        fontWeight: 'bold'
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

    const validate = values => {
        const errors = {};
        if (!values.buyerName) {
            errors.buyerName = 'Field required';
        } else if (values.buyerName.length < 3) {
            errors.buyerName = 'Name should have at least 2 characters';
        }

        if (!values.buyerLastName) {
            errors.buyerLastName = 'Field required';
        } else if (values.buyerLastName.length < 3) {
            errors.buyerLastName = 'Last Name should have at least 2 characters';
        }

        if (!values.buyerEmail) {
            errors.buyerEmail = 'Field required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.buyerEmail)) {
            errors.buyerEmail = 'Invalid email address';
        }

        if (!values.buyerPhone) {
            errors.buyerPhone = 'Field required'
        } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(values.buyerPhone)) {
            errors.buyerPhone = 'Invalid phone number';
        }

        if (!values.buyerConfirmEmail) {
            errors.buyerConfirmEmail = 'Field required'
        } else if (values.buyerConfirmEmail !== values.buyerEmail) {
            errors.buyerConfirmEmail = 'Confirm email does not match';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            buyerName: '',
            buyerLastName: '',
            buyerEmail: '',
            buyerPhone: '',
            buyerConfirmEmail: '',
        },
        validate,
        onSubmit: values => {
            placeOrder(values);
        },
    });

    function placeOrder(values) {

        setLoading(true);
        const db = getFirestore();

        const orders = db.collection("orders");

        const buyerInfo = {
            name: values.buyerName,
            lastname: values.buyerLastName,
            phone: values.buyerPhone,
            email: values.buyerEmail
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

    return (
        <div>
            { loading ? <Loading /> :
                orderId !== 0 ?
                    <div>
                        <label className="Checkout"> Your order #{orderId} was created successfully!
            <br /><br /> <NavLink className={classes.link} to="/">Click here</NavLink> to continue shopping
            </label>
                    </div>
                    : cart.length === 0 ? <CartEmpty /> :
                        <div>
                            <div className="Cart-title">Checkout</div>
                            <Grid container justify="center" spacing={10}>
                                <Grid key="grid-1" item>
                                    <form className={classes.root} onSubmit={formik.handleSubmit} noValidate autoComplete="off">
                                        <Typography variant="h6">
                                            <label>Contact information</label>
                                        </Typography>
                                        <div>
                                            <TextField id="buyerName" name="buyerName" label="Name" error={formik.touched.buyerName && formik.errors.buyerName} helperText={formik.touched.buyerName && formik.errors.buyerName ? formik.errors.buyerName : ""} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.buyerName} />
                                        </div>
                                        <div>
                                            <TextField id="buyerLastName" name="buyerLastName" label="Last name" error={formik.touched.buyerLastName && formik.errors.buyerLastName} helperText={formik.touched.buyerLastName && formik.errors.buyerLastName ? formik.errors.buyerLastName : ""} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.buyerLastName} />
                                        </div>
                                        <div>
                                            <TextField id="buyerPhone" name="buyerPhone" label="Phone number" error={formik.touched.buyerPhone && formik.errors.buyerPhone} helperText={formik.touched.buyerPhone && formik.errors.buyerPhone ? formik.errors.buyerPhone : ""} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.buyerPhone} />
                                        </div>
                                        <div>
                                            <TextField id="buyerEmail" name="buyerEmail" label="Email" error={formik.touched.buyerEmail && formik.errors.buyerEmail} helperText={formik.touched.buyerEmail && formik.errors.buyerEmail ? formik.errors.buyerEmail : ""} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.buyerEmail} />
                                        </div>
                                        <div>
                                            <TextField id="buyerConfirmEmail" name="buyerConfirmEmail" label="Confirm Email" error={formik.touched.buyerConfirmEmail && formik.errors.buyerConfirmEmail} helperText={formik.touched.buyerConfirmEmail && formik.errors.buyerConfirmEmail ? formik.errors.buyerConfirmEmail : ""} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.buyerConfirmEmail} />
                                        </div>
                                        <div className={classes.button} >
                                            <Button type="submit" variant="contained" color="primary" >
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


