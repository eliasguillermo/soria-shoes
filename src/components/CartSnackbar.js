import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    snackbar: {
      marginTop: 80
    },
    link: {
      textDecoration: 'none',
    },
    button: {
        fontWeight: 600,
    }
  });

export default function CartSnackbar(props) {

    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);


    return (<Snackbar
        className={classes.snackbar}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
    >
        <SnackbarContent style={{
            backgroundColor: '#000000',
        }}
            message={props.count + ' items added'}
            action={
                <React.Fragment>
                    <NavLink className={classes.link} to="/cart/">
                        <Button className={classes.button} color="secondary" size="small">
                            Go to cart
                        </Button>
                    </NavLink>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
        />
    </Snackbar>
    )

}