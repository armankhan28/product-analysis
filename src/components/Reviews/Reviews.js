import React from 'react';
import useReview from '../../hooks/use-Review';
import Review from '../Review/Review';

const Reviews = () => {
  const [review, setReview] = useReview();
  return (
    <div>
      <h1>This is our all review</h1>
      <div className="rev">
        {review.map(review => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
