import React from 'react';
import "../Home.scss";
import backGroundImage from '../../assets/bg.jpeg'

const Hero = () => {
    return (
        <div id="Hero">
            <img src={backGroundImage} alt="" className="bg"/>
            <div className="content">
                <div className="left">
                    <h3>Making films is our</h3>
                    <h1>PASSION</h1>
                    <a href="https://www.youtube.com/channel/UC0qw5xPNJrofXi3dKboJg8A" className="call-to-action">Visit our YouTube channel</a>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;