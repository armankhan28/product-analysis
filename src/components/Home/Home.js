import React from 'react';
import Photo from './img/austin.png';
import './Home.css';
import useReview from '../../hooks/use-Review';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
const Home = () => {
    const [review, setReview] = useReview();
  return (
    <div>
      <div className="home">
        <div>
          <h1>New Collection For Fall</h1>
          <p>
            <small>
              Discover all the new arrivals of ready-to-wear collection.
            </small>
          </p>
          <button>SHOP NOW !!</button>
        </div>
        <div>
          <img src={Photo} alt="" />
        </div>
      </div>
      <h1>Customers Reviews: </h1>
      <div className='rev'>
          {
              review.map(review => <Review
                key ={review.id}
                review ={review}
              ></Review>)
          }
      </div>
      <button>See All Reviews</button>
    </div>
  );
};

export default Home;
