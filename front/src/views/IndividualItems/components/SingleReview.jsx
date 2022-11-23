import React from "react";
import PropTypes from "prop-types";
import "./../../../components/statics/extra.css";
function SingleReview({ review }) {
  return (
    <div className='review-single'>
      <div className='review-count'>
        Rating: <span>{review.rating}</span>
      </div>
      <div className='review-user'>burrito</div>
      <br />
      <div className='text-display'>
        <p>{review.review}</p>
      </div>
    </div>
  );
}

export default SingleReview;
