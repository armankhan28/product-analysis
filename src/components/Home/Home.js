import React from 'react';
import Photo from './img/austin.png'
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
        <div>
            <h1>New Collection For Fall</h1>
            <p><small>Discover all the new arrivals of ready-to-wear collection.</small></p>
            <button>SHOP NOW</button>
        </div>
       <div>
       <img src={Photo} alt="" />
       </div>
    </div>
    );
};

export default Home;