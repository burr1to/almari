import React from "react";
import PropTypes from "prop-types";
import "./../../../components/statics/extra.css";
function SingleReview({ item }) {
  return (
    <div className='review-single'>
      <div className='review-count'>
        Rating: <span>{item.rating}</span>
      </div>
      <div className='review-user'>burrito</div>
      <br />
      <div className='text-display'>
        <p>{item.text}</p>
      </div>
    </div>
  );
}

export default SingleReview;
