import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import { useState } from "react";

const BlogList = (props) => {
  const [products, setProducts] = useState([]);

  let fetchData = async () => {
    let response = await fetch("https://strive100.herokuapp.com/products", {
      method: "GET",
    });
    if (response.ok) {
      let body = await response.json();
      console.log(body);
      setProducts(body);
    }
  };

  /* useEffect(() => {
    fetchData();
  }, []); */

  return (
    <Row>
      {products.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.id} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
