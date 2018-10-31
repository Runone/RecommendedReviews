import React from 'react';

const Users = (props) => (
  <div className="reviews">
    {props.reviews.map(user => (
      <div key={user.id}>
        <span> {user.user_name}</span>
        <b> {user.location}</b>
        <div>Reviews: {user.number_reviews}</div>
        <div>Photos: {user.number_photos}</div>
      </div>)
)}
  </div>
);


export default Users;