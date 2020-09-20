import React, {useState} from 'react';
import CounterButton from './CounterButton';
import Input from '@material-ui/core/Input';


function ItemCount(props) {

    const [state, setState] = useState(0);

    function increase()  {
        if (state < props.max) {
            setState(state + 1);
            props.handleChange(state + 1);
        }
      
    }

    function decrease ()  {
        if (state > props.min) {
            setState(state - 1); 
            props.handleChange(state - 1);
        }
    }

        return (
            <div className="Counter-Container">
                <div>
                    <CounterButton onClick={decrease} sign={"-"} />
                    <Input classes={{ input: 'Counter-Input' }} value={state}></Input>
                    <CounterButton onClick={increase} sign={"+"} />
                </div>
            </div>
        );
}

export default ItemCount;