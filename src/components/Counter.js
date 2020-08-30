import React from 'react';
import CounterButton from './CounterButton';
import Input from '@material-ui/core/Input';

class Counter extends React.Component {

    constructor(){
        super();
        const handleClick = function handleClick() { }
    }

    render () {
        return (
            <div>
                <CounterButton sign={"-"} />
                <Input/>
                <CounterButton sign={"+"} />
            </div>

        );
    }
}

export default Counter;