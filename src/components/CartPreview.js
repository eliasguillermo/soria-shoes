import React, { useContext } from 'react';
import { CartContext } from './context/CartContext.js'
import ItemSummary from './ItemSummary.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './Cart.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
    paper: {
        padding: theme.spacing(1),
        margin: 'auto',
        width: 300,
        maxWidth: 300,
      }
}));

export default function CartPreview() {
    const [cart,] = useContext(CartContext);
    const classes = useStyles();

    const productTotal = cart.reduce((pSum, e) => {
        pSum += e[0].price * e[1];
        return pSum;
    }, 0);

    return (
        <div>
            <List className={classes.root} >
                {cart.map(u =>
                    <ListItem>
                        <ItemSummary product={u} key={u[0].id} />
                    </ListItem>)}
            </List>
            <Paper className={classes.paper}>
                <Typography variant="body1">
                    {'TOTAL: $' + productTotal}
                </Typography>
            </Paper>
        </div>)

}