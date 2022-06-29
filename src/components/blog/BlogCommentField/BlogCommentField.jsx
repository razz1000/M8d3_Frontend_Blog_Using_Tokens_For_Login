import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

let BlogCommentField = (props) => {
  let [comment, setComment] = useState([]);

  let handleChange = (propertyKey, targetValue) => {
    setComment({
      ...comment,
      [propertyKey]: targetValue,
    });
  };

  let fetchData = async () => {
    let response = await fetch(
      "https://strive100.herokuapp.com/products" + props.id + "/reviews",
      {
        method: "post",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log(response);
    }
  };

  let submitFunction = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            onChange={(event) => {
              handleChange("comment", event.target.value);
            }}
            value={comment.comment}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Your Rating (1-5)</Form.Label>
          <Form.Control
            as="select"
            onChange={(event) => {
              handleChange("rate", event.target.value);
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
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
            onClick={submitFunction}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default BlogCommentField;
