import React from 'react';
import './Home.css';

function Home(props) {
    return (
        <label className="Home-text">{props.greetings}</label>
    )

}

export default Home;