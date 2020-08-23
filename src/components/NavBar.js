import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import logo from '../images/Logo.png';
import './NavBar.css';
import CartIcon from './CartIcon.js'

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
                                <Link href="#" color="inherit">Home</Link>
                            </TypoGraphy>
                        </ListItemText>

                        <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title" >
                                <Link href="#" color="inherit">About</Link>
                            </TypoGraphy>
                        </ListItemText>


                        <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title">
                                <Link href="#" color="inherit">Our work</Link>
                            </TypoGraphy>
                        </ListItemText>


                        <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title">
                                <Link href="#" color="inherit">Find us</Link>
                            </TypoGraphy>
                        </ListItemText>

                        <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title">
                                <CartIcon />
                            </TypoGraphy>
                        </ListItemText>

                    </ListItem >


                </List>
            </div>
        </div>
    )
}


export default NavBar;

