import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import logo from '../images/Logo.png';
import './NavBar.css';
import CartIcon from './CartIcon.js'
import { NavLink } from "react-router-dom";


function NavBar(props) {

    return (
        <div>
            <div>
                <img src={logo} alt="logo" className="Header-branding-logo" />
            </div>
            <div>
                <List component="nav">
                    <ListItem component="div">
                        <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title" >
                                <NavLink className="Nav-link" to="/">Our Work</NavLink>
                            </TypoGraphy>
                        </ListItemText>

                        <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title" >
                                <NavLink className="Nav-link" to="/about/">About</NavLink>
                            </TypoGraphy>
                        </ListItemText>

                        <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title">
                                <NavLink className="Nav-link" to="/contact/" color="inherit">Find us</NavLink>
                            </TypoGraphy>
                        </ListItemText>

                        <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title">
                                <NavLink className="Nav-link" to="/cart/" color="inherit">
                                    <CartIcon />
                                </NavLink>
                            </TypoGraphy>
                        </ListItemText>
                    </ListItem >
                </List>
            </div>
        </div>
    )
}


export default NavBar;

