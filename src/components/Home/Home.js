import React from 'react';
import Photo from './img/austin.png';
import './Home.css';
import useReview from '../../hooks/use-Review';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';
const Home = () => {
    const [review, setReview] = useReview();
    review.slice(0, 2)
  return (
    <div>
      <div className="home">
        <div>
          <h1>New Collection For Shop</h1>
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
      <h1>Customers Reviews </h1>
      <div className='rev'>
          {
              review.slice(3).map(review => <Review
                key ={review.id}
                review ={review}
              ></Review>)
          }
      </div>
       <Link to='/reviews'>
        <button>See All Reviews</button>
       </Link>
    </div>
  );
};

export default Home;
