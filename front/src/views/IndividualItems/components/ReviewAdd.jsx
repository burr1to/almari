import React from "react";
import { useState, useEffect } from "react";
import "./../../../components/statics/extra.css";
import Button from "./../../../components/global/Button";
import NumberRating from "./NumberRating";
import axios from "axios";

function ReviewAdd() {
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

  const productID = 1;

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      review: review,
      rating: rating,
      product_id: productID,
      owner_id: 1,
    };
    console.log(data);
    if (review.trim().length > 10) {
      await axios
        .post(`http://localhost:8000/rating/${productID}`, data, {
          headers: headers,
        })
        .then((response) => {
          console.log(response);
          console.log("Success");
        })
        .catch((error) => {
          console.log(error);
        });
      setText("");
    }
  };
  return (
    <>
      <div className='reviewform-wrap'>
        <form onSubmit={handleSubmit}>
          <h4>Add a review</h4>
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
