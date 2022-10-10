import React from "react";
import PropTypes from "prop-types";
function SingleReview({ item }) {
  return (
    <>
      <div className='review-count'>Rating: {item.rating}</div>
      <div className='text-display'>
        Text: <br />
        {item.text}
      </div>
    </>
  );
}

export default SingleReview;
