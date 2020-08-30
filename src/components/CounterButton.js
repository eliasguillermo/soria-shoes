import React from 'react';
import Button from '@material-ui/core/Button';


function CounterButton(props) {
    //return <button onClick={props.onClick}>{props.sign}</button>
    return (
    <Button size="small" variant="contained" color="secondary">{props.sign}</Button>
    );
  }

  export default CounterButton;

  let contador = 0;

  function Sumar(event) {
    event.preventDefault()
    contador++
    console.log(contador);
    document.getElementById('contador').value = contador;
    return false;
  }

  function Restar(event) {
    event.preventDefault()
    contador--
    console.log(contador);
    document.getElementById('contador').value = contador;
    return false;
  }
