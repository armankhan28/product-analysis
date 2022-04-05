import React from 'react';
import useReview from '../../hooks/use-Review';
import './Review.css'
const Review = (props) => {
    const [review, setReview] = useReview();
    const {name, image, comment, rating} = props.review;
    return (
        <div className='review'>
            <img src= {image} alt="" />
            <h3>Name: {name}</h3>
            <h4>Comment:{comment}</h4>
            <h5>Rating:{rating}</h5>
        </div>
    );
};

export default Review;