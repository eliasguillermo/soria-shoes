import React, { useContext } from 'react';
import { CartContext } from './context/CartContext.js'
import ItemPreview from './ItemPreview.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CartEmpty from './CartEmpty.js'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },
        padding: 20
    },
    link: {
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        width: 400,
        maxWidth: 400,
    }
}));

export default function Cart() {
    const classes = useStyles();
    const [cart,] = useContext(CartContext);

    const productTotal = cart.reduce((pSum, e) => {
        pSum += e[0].price * e[1];
        return pSum;
    }, 0);

    return (
        <div>
            <div className="Section-Title">Shopping cart</div>
                {cart.length > 0 ?
                    <div >
                        <List>
                            {cart.map(u =>
                                <ListItem key={u[0].id}>
                                    <ItemPreview product={u} key={u[0].id+u.name} />
                                </ListItem>)}
                        </List>
                        <Paper className={classes.paper}>
                            <Typography variant="body1">
                                {'TOTAL: $' + productTotal}
                            </Typography>
                        </Paper>
                        <div className={classes.root}>
                            <Link className={classes.link} to="/checkout">
                                <Button variant="contained" color="primary">
                                    Checkout
                                </Button>
                            </Link>
                        </div>
                    </div>
                    :
                    <CartEmpty />
                }

        </div>)


}
