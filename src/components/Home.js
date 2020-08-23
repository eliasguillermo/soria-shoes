import React from 'react';
import './Home.css';

function Home(props) {
    return (
        <div>
            <label className="Home-text">{props.greetings}</label>
        </div>
    )

}

export default Home;