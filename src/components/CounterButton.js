import React from 'react';
import Button from '@material-ui/core/Button';


function CounterButton(props) {
    return (
    <Button size="small" variant="contained" color="primary" onClick={props.onClick}>{props.sign}</Button>
    );
  }

  export default CounterButton;