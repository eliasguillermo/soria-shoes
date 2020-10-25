import React from 'react';
import Item from './Item';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 1200,
        margin: 'auto'
    },
    background: {
        backgroundColor: 'white'
    }
}));

export default function ItemList(props) {
    const classes = useStyles();

    return (
                <Grid className={classes.root} container spacing={3} justify="center" >
                    {props.data.map((u) => (
                        <Grid key={u.id + u.name} item xs={4} >
                            <Item data={u} key={u.id} />
                        </Grid>
                    ))}
                </Grid>
    );
}