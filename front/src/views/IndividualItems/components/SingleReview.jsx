import React from "react";
import PropTypes from "prop-types";
import "./../../../components/statics/extra.css";
function SingleReview({ item }) {
  return (
    <div className='review-single'>
      {" "}
      <div className='review-count'>Rating: {item.rating}</div>
      <div className='text-display'>
        Text: <br />
        {item.text}
      </div>
    </div>
  );
}

export default SingleReview;
