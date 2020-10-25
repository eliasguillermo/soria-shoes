import React from 'react';
import './About.css';
import AboutImage from '../images/about.jpg';

function About() {
    return (
        <div>
            <label className="Section-Title">About</label>
            <div className="About">
            <p className="About-message">
            Every brand, every project, is a statement, it is a way of living and creating, they are convictions and intentions about the world we want to build. <br /> <br />
            We understand about the need to change the industry, consumption and above all the need to create a balance in our lives. <br /> <br />
            At SORIA we want to build a bond, we want to show the path between what we do and what we consume, we aim to remain, to manual work and to connect with the object that we produce. <br /> <br />
            We are committed to conscious consumption, to responsibility between the relations of production and consumption. For this reason, we do not work seasonally, but with models of unique runs, made entirely by hand with the best raw materials to guarantee their durability and persistence over time.
            </p>
            <img className="About-image" src={AboutImage} alt="about" />
            </div>
        </div>
    )

}

export default About;