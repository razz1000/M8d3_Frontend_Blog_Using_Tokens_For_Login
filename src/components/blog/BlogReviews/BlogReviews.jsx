import React from "react";

let BlogReviews = (props) => {
  return (
    <div>
      <p>Previous Comments</p>
      {props.reviews.map((r) => {
        return <p>{r.comment}</p>;
      })}
    </div>
  );
};

export default BlogReviews;
