import React from 'react';
import "../Home.scss";
import img1 from '../../assets/img1.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'

const Works = () => {
    return (
        <div id="Works">
            <div className="title">
                <h1 className="title-text">Our Recent Works</h1>
            </div>
            <div className="content">
                <div className="card">
                    <img src={img1} alt=""/>
                    <p>Ustad Hotel - Malayalam movie review</p>
                </div>
                <div className="card">
                    <img src={img3} alt=""/>
                    <p>Unknown facts about Cats </p>
                </div>
                <div className="card">
                    <img src={img4} alt=""/>
                    <p>Master - second look poster - review and reaction </p>
                </div>
            </div>
        </div>
    );
}
 
export default Works;