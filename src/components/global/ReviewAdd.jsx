import React from "react";
import { useState } from "react";
import "./../statics/extra.css";
import Button from "./Button";
import NumberRating from "./NumberRating";

function ReviewAdd({ handleAdd }) {
  const [text, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (text === "") {
      setbtnDisabled(true);
      setMessage(null);
    } else if (text != "" && text.trim().length <= 10) {
      setbtnDisabled(true);
      setMessage("Enter more than 10 characters please!");
    } else {
      setbtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newReview = {
        text,
        rating,
      };

      handleAdd(newReview);
      setText("");
    }
  };
  return (
    <>
      <div className='reviewform-wrap'>
        <form onSubmit={handleSubmit}>
          <h2>Add a review</h2>
          <NumberRating select={setRating} selected={rating} />
          <div className='input-group'>
            <input
              onChange={handleChange}
              type='text'
              value={text}
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
