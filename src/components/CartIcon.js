import React, { useContext} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import {CartContext} from './CartContext.js'

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 4,
        padding: '0 4px',
        color: 'white'
    },
}))(Badge);

function CartIcon() {
    const [counter, ] = useContext(CartContext);

    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={counter} color="secondary">
                    <ShoppingCartIcon style={{ color: "white", fontSize: "30" }} />
            </StyledBadge>
        </IconButton>
    );

}

export default CartIcon;

