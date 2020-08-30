import React from 'react';
import CounterButton from './CounterButton';
import Input from '@material-ui/core/Input';
import './ItemCount.css';
import Button from '@material-ui/core/Button';

class ItemCount extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    increase = () => {
        if (this.state.counter < this.props.max) {
            this.setState((prevState) => ({ counter: prevState.counter++ }));
        }
    }

    decrease = () => {
        if (this.state.counter > this.props.min) {
            this.setState((prevState) => ({ counter: prevState.counter-- }));
        }
    }

    onAdd = () => {
        alert(this.state.counter + ' products added.' );
    }

    render() {
        return (
            <div className="Counter-Container">
                <div>
                    <CounterButton onClick={this.decrease} sign={"-"} />
                    <Input classes={{ input: 'Counter-Input' }} value={this.state.counter}></Input>
                    <CounterButton onClick={this.increase} sign={"+"} />
                </div>
                <div className="Counter-Div">
                    <Button onClick={this.onAdd} classes={{ root: 'Counter-Button' }} variant="outlined" color="primary">Add to cart</Button>
                </div>
            </div>
        );
    }
}

export default ItemCount;