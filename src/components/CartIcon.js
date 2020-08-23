import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

function CartIcon() {
    return (
        <IconButton color="inherit">
            <ShoppingCartIcon />
        </IconButton>
    )
}

export default CartIcon;