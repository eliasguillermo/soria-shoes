import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import logo from '../../images/Logo.png';
import './NavBar.css';
import CartIcon from '../cart/CartIcon.js'
import { NavLink } from "react-router-dom";
import CategoryList from '../categories/CategoryList.js'

function NavBar() {

    return (
            <div className="NavBar">
                <div>
                    <img src={logo} alt="logo" className="Header-branding-logo" />
                </div>
                <div>
                    <List component="nav">
                        <ListItem component="div">
                            <ListItemText inset>
                                <TypoGraphy color="inherit"  >
                                    <NavLink className="Nav-link" to="/">Home</NavLink>
                                </TypoGraphy>
                            </ListItemText>

                            <ListItemText inset>
                                <CategoryList />
                            </ListItemText>

                            <ListItemText inset>
                                <TypoGraphy color="inherit" >
                                    <NavLink className="Nav-link" to="/about/">About</NavLink>
                                </TypoGraphy>
                            </ListItemText>

                            <ListItemText inset>
                                <TypoGraphy color="inherit" >
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

