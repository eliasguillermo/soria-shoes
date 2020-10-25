import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


export default function AlertDialog(props) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);

    return (
        <div>
            <Dialog
                open={open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary" autoFocus>
                        OK
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}