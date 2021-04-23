import React, { useState, useRef } from "react";
import {
  Form,
  Row,
  Col,
  Container,
  Button,
  Overlay,
  Tooltip,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Write.css";

function Write() {
  const history = useHistory();
  const datetoday = new Date();
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    imgsrc: "",
    tags: [],
    date: datetoday,
    content: "",
  });
  const [show, setShow] = useState(false);
  const target = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    // console.log(value);
    setBlog((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function sendData() {
    axios
      .post("https://blogtronserver.herokuapp.com/write", blog)
      .then((response) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function postBlog(e) {
    e.preventDefault();
    sendData();
    setBlog({
      title: "",
      author: "",
      imgsrc: "",
      tags: [],
      date: "",
      content: "",
    });
    // history.push("/");
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={postBlog}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  value={blog.title}
                  placeholder="heading"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  name="author"
                  type="text"
                  value={blog.author}
                  placeholder="author"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  name="imgsrc"
                  type="text"
                  value={blog.imgsrc}
                  placeholder="imgsrc"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Tags</Form.Label>
                <Form.Control
                  ref={target}
                  onClick={() => setShow(!show)}
                  name="tags"
                  type="text"
                  value={blog.tags}
                  placeholder="tags"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                  <Tooltip id="overlay-example" {...props}>
                    The tags should be separated by commas
                  </Tooltip>
                )}
              </Overlay>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  name="content"
                  as="textarea"
                  value={blog.content}
                  rows={7}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button type="Submit">Post</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Write;
