import React, {useState, useContext} from 'react';
import CounterButton from './CounterButton';
import Input from '@material-ui/core/Input';
import './ItemCount.css';
import Button from '@material-ui/core/Button';
import {CartContext} from './CartContext.js'


function ItemCount(props) {

    const [counter, setCounter] = useContext(CartContext);
    const [state, setState] = useState(0);


    function increase()  {
        if (state < props.max) {
            setState(state + 1);
        }
    }

    function decrease ()  {
        if (state > props.min) {
            setState(state - 1);
        }
    }

    function onAdd () {
        alert(state + ' products added.' );
        setCounter(counter => counter + state);
    }


        return (
            <div className="Counter-Container">
                <div>
                    <CounterButton onClick={decrease} sign={"-"} />
                    <Input classes={{ input: 'Counter-Input' }} value={state}></Input>
                    <CounterButton onClick={increase} sign={"+"} />
                </div>
                <div className="Counter-Div">
                    <Button onClick={onAdd} classes={{ root: 'Counter-Button' }} variant="outlined" color="primary">Add to cart</Button>
                </div>
            </div>
        );
    
}

export default ItemCount;