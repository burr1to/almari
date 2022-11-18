import React from "react";
import { useState, useEffect } from "react";
import "./../../../components/statics/extra.css";
import Button from "./../../../components/global/Button";
import NumberRating from "./NumberRating";
import axios from "axios";

function ReviewAdd({ handleAdd }) {
  const [review, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [rating, setRating] = useState();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (review === "") {
      setbtnDisabled(true);
      setMessage(null);
    } else if (review != "" && review.trim().length <= 10) {
      setbtnDisabled(true);
      setMessage("Enter more than 10 characters please!");
    } else {
      setbtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const formData = new FormData();

  formData.append("review", review);
  formData.append("rating", rating);
  formData.append("product_id", 1);
  formData.append("owner_id", 2);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim().length > 10) {
      setText("");
    }
  };
  return (
    <>
      <div className='reviewform-wrap'>
        <form onSubmit={handleSubmit}>
          <h2>Add a review</h2>
          <NumberRating select={(rating) => setRating(rating)} />
          <div className='input-group'>
            <input
              onChange={handleChange}
              type='text'
              value={review}
              placeholder='Write a review'
            />
            <Button isDisabled={btnDisabled} type='submit'>
              Submit
            </Button>
          </div>
          {message && <div className='message'>{message}</div>}
        </form>
      </div>
    </>
  );
}

export default ReviewAdd;
