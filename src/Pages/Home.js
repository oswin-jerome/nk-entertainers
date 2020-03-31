import React from 'react';
import "./Home.scss";
import backGroundImage from '../assets/bg.jpeg'

const HomePage = () => {
    return (
        <div id="homePage">
            <img src={backGroundImage} alt="" className="bg"/>
            <div className="content">
                <div className="left">
                    <h3>Making films is our</h3>
                    <h1>PASSION</h1>
                    <a href="#" className="call-to-action">Visit our YouTube channel</a>
                </div>
            </div>
        </div>
    );
}
 
export default HomePage;