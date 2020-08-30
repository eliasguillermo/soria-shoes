import React from 'react';
import CounterButton from './CounterButton'

class Counter extends Component {

    constructor(){
        super();
        const handleClick = function handleClick() { }
    }

    render () {
        return (
            <div>
                <CounterButton onClick={handleClick} sign={"+"} />
                <input />
                <CounterButton sign={"-"} />
            </div>

        );
    }
}

export default Counter;