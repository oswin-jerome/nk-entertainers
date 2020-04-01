import React from 'react';
import "./Home.scss";
import backGroundImage from '../assets/bg.jpeg'
import Hero from './Home/Hero';
import Works from './Home/Works';
import Connect from './Home/Connect';
import Contact from './Home/Contact';
import Footer from './Home/Footer';

const HomePage = () => {
    return (
        <div id="homePage">
            <Hero></Hero>
            <Works></Works>
            <Connect></Connect>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}
 
export default HomePage;