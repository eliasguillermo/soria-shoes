import React from 'react';
import CounterButton from './CounterButton';
import Input from '@material-ui/core/Input';
import './Counter.css';

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    increase = () => {
        if (this.state.counter < 10) {
            this.setState((prevState) => ({ counter: prevState.counter++ }));
        }
    }

    decrease = () => {
        if (this.state.counter > 0) {
            this.setState((prevState) => ({ counter: prevState.counter-- }));
        }
    }

    render() {
        return (
            <div>
                <CounterButton onClick={this.decrease} sign={"-"} />
                <Input classes={{input: 'Counter-Input'}} value={this.state.counter}></Input>
                <CounterButton onClick={this.increase} sign={"+"} />
            </div>

        );
    }
}

export default Counter;