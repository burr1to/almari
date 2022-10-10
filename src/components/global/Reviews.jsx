import React from "react";
import PropTypes from "prop-types";
import SingleReview from "./SingleReview";
import "./../statics/extra.css";

function Reviews({ data }) {
  return (
    <div className='reviews-con'>
      <h1>0 Shop Reviews</h1>
      <p>Average Rating: N/A</p>
      <br />
      <div className='review-list'>
        {data.map((singledata) => (
          <SingleReview key={singledata.id} item={singledata} />
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
