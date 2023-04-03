import React, { useState } from "react";
import "./App.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(3);
  const [comments, setComments] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "" || email === "" || comments === "") {
      setError("Please fill out all fields");
    } else {
      // code to send feedback
      // assuming it is successful for now
      setIsSubmitted(true);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  if (isSubmitted) {
    return <div>Thank you for your feedback!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </div>
      <div>
        <label>
          Rating:
          <input
            type="range"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
          />
        </label>
        {rating}
      </div>
      <div>
        <label>
          Comments:
          <textarea value={comments} onChange={handleCommentsChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Form;
