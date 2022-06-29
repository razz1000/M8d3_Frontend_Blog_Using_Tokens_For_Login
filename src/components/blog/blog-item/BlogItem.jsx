import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
import BlogCommentField from "../BlogCommentField/BlogCommentField";
import BlogReviews from "../BlogReviews/BlogReviews";

const BlogItem = (props) => {
  return (
    <div>
      <Link to={`/blog/${props.id}`} className="blog-link">
        <Card className="blog-card">
          <Card.Img variant="top" src={props.imageUrl} className="blog-cover" />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <h2>{props.category}</h2>
            <h6>{props.description}</h6>
          </Card.Body>
          <Card.Footer></Card.Footer>

          {/*           <BlogReviews reviews={props.reviews} /> */}
        </Card>
      </Link>
      <div>{/*         <BlogCommentField id={props.id} /> */}</div>
    </div>
  );
};

export default BlogItem;
