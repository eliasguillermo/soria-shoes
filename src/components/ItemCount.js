import React, { useState } from 'react';
import CounterButton from './CounterButton';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        boxSizing: 'border-box',
    }
});

function ItemCount(props) {
    const classes = useStyles();
    const [state, setState] = useState(0);

    function increase() {
        if (state < props.max) {
            setState(state + 1);
            props.handleChange(state + 1);
        }

    }

    function decrease() {
        if (state > props.min) {
            setState(state - 1);
            props.handleChange(state - 1);
        }
    }

    return (
        <div className={classes.container}>
            <div>
                <CounterButton onClick={decrease} sign={"-"} />
                <Input inputProps={{style: { textAlign: 'center' }}} value={state}></Input>
                <CounterButton onClick={increase} sign={"+"} />
            </div>
        </div>
    );
}

export default ItemCount;