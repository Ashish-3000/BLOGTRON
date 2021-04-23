import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import "./Container.css";
import { Link } from "react-router-dom";

function Cover(props) {
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    imgsrc: "",
    tags: [],
    content: "",
  });
  const [tagarr, setTags] = useState([]);
  useEffect(() => {
    const location = props.location.pathname.substr(7);
    console.log(location);
    axios
      .get(`https://blogtronserver.herokuapp.com/blogs/${location}`)
      .then((res) => {
        setBlog(res.data);
        // console.log(b
      });
    axios.get("https://blogtronserver.herokuapp.com/taglist").then((res) => {
      setTags(res.data);
      // console.log(res.data);
    });
  }, []);

  return (
    <>
      <Container className="p-0 m-auto">
        <Row className="p-0 m-0">
          <Col lg={9}>
            <Card border="light">
              <Card.Title>
                <h1>{blog.title}</h1>
              </Card.Title>
              <Card.Img variant="top" src={blog.imgsrc} />
              <Card.Body>
                <h5>{blog.author}</h5>
                <Card.Text>{blog.content}</Card.Text>
              </Card.Body>
            </Card>
            {blog.tags.map((val) => {
              return (
                <Link to={`/${val}`}>
                  <Button className="mr-1" variant="primary">
                    {val}
                  </Button>
                </Link>
              );
            })}
          </Col>
          <Col lg={3} style={{ width: "20rem" }}>
            <div className="tagcontain m-2">
              <Card.Title>Tags</Card.Title>
              <div>
                {tagarr.map((val) => {
                  return (
                    <Link to={`/tags/${val}`}>
                      <Button className="m-2">{val}</Button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cover;
