import React, { useCallback, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
const NewBlogPost = (props) => {
  const [eComProducts, setEComProducts] = useState([]);

  let handleChange = (propertyName, targetValue) => {
    setEComProducts({
      ...eComProducts,
      reviews: [],
      [propertyName]: targetValue,
    });
  };

  /*   let fetchData = async () => {
    let response = await fetch(
      "https://strive100.herokuapp.com/products",
      {
        method: "POST",
        body: JSON.stringify(eComProducts),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log(response);
    }
  }; */

  let submitData = (event) => {
    event.preventDefault();
    /* fetchData(); */
  };

  return (
    <Container className="new-blog-container">
      <Form className="mt-5">
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Name of product</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Enter the name of the product"
            onChange={(event) => {
              handleChange("name", event.target.value);
            }}
            value={eComProducts.name}
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Product Brand</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Enter the brand"
            onChange={(event) => {
              handleChange("brand", event.target.value);
            }}
            value={eComProducts.brand}
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Enter an image URL"
            onChange={(event) => {
              handleChange("imageUrl", event.target.value);
            }}
            value={eComProducts.imageUrl}
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Enter the price"
            onChange={(event) => {
              handleChange("price", event.target.value);
            }}
            value={eComProducts.price}
          />
        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            size="lg"
            as="select"
            onChange={(event) => {
              handleChange("category", event.target.value);
            }}
            value={eComProducts.category}
          >
            <option>Running Shoes</option>
            <option>Lifestyle</option>
            <option>Football Shoes</option>
            <option>Winter Boots</option>
            <option>Sandals</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            onChange={(event) => {
              handleChange("description", event.target.value);
            }}
            value={eComProducts.description}
          />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{
              marginLeft: "1em",
            }}
            onClick={submitData}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewBlogPost;
