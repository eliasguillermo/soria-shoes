import React, { useContext, useEffect } from 'react';
import { CartContext } from './CartContext.js'
import ItemPreview from './ItemPreview.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './Cart.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }));

export default function Cart() {
    const classes = useStyles();
    const [cart,] = useContext(CartContext);

    useEffect(() => {

    }, [cart]);

    return (
        <div>
            <div className="Cart-title">Your cart:</div>
            <div className="Product-Body">
                {cart.length > 0 ?
                        <div >
                        <List>
                        {cart.map(u =>
                            <ListItem>
                                <ItemPreview product={u} key={u.id} />
                            </ListItem>) }
                        </List>
                        <div className={classes.root}>
                        <Button variant="contained" color="primary">
                            Checkout
                        </Button>
                        </div> 
                        </div>
                        :
                    <h3 className="Cart-title">Empty</h3>
                }
            </div>

        </div>)


}
