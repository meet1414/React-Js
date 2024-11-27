import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [username, setUsername] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !reviewText) {
      alert("Please fill out all fields!");
      return;
    }

    const newReview = {
      username,
      reviewText,
      rating,
    };

    setReviews([...reviews, newReview]);

    setUsername('');
    setReviewText('');
    setRating(1);
  };

  return (
    <div className="app">
      <h1>Validation Form</h1>
      
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label>Review:</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
            placeholder="Write your review"
          />
        </div>

        <div className="form-group">
          <label>Rating:</label>
          <select
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            required
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star} Star{star > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit Review</button>
      </form>

      <div className="reviews-list">
        <h2>All Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.username}</h3>
            <p>{review.reviewText}</p>
            <div className="rating">
              {'★'.repeat(review.rating)}{' '}
              {'☆'.repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
