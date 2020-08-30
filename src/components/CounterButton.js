import React from 'react';
 
function Button(){
    return <button onClick={props.onClick}>{props.sign}</button>
}

export default Button;

let contador = 0;

function Sumar(event){
  event.preventDefault()
  contador++
  console.log(contador);
  document.getElementById('contador').value = contador;
  return false;
}

function Restar(event){
  event.preventDefault()
  contador--
  console.log(contador);
  document.getElementById('contador').value = contador;
  return false;
}