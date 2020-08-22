import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title" >
                        <Link href="https://www.facebook.com.ar" color="inherit">Home</Link>
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title" >
                    <Link href="https://www.google.com.ar" color="inherit">About</Link>
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <Link href="https://www.instragram.com.ar" color="inherit">Our work</Link>
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <Link href="https://www.google.com.ar" color="inherit">Find us</Link>
                    </TypoGraphy>
                </ListItemText>
            </ListItem >
        </List>
    )
}


export default NavBar;

