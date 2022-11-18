import React from "react";
import { useState, useEffect } from "react";
import "./../statics/extra.css";
import Button from "./Button";
import axios from "axios";

function ReviewAdd({ handleAdd }) {
  const [myData, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/users/1").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(myData);
  // useEffect(() => {});

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
          NumberRating
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
