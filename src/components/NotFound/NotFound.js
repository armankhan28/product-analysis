import React from 'react';
import Photo from './img/404.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='photo'>
           <img src={Photo} alt="" />
        </div>
    );
};

export default NotFound;