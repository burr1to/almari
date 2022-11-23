import React from "react";
import PropTypes from "prop-types";
import SingleReview from "./SingleReview";
import "./../../../components/statics/extra.css";
import { useEffect, useState } from "react";

function Reviews({ data }) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].rating;
  }

  return (
    <div className='reviews-con'>
      <h5>{data.length} Shop Reviews</h5>
      <p>Average Rating: {(sum / data.length).toFixed(3)}</p>
      <br />
      <div className='review-list'>
        {data.map((element, index) => (
          <SingleReview key={element.id} review={element} />
        ))}
      </div>
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};
export default Reviews;
