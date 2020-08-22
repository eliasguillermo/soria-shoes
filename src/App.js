import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'


class App extends Component {
render() {
  return(
    <div className="App">
      <div>
             <NavBar color="primary" position="static"/>
       </div>
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

}

export default App;
