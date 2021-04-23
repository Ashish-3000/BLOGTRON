import React from "react";
import { Card } from "react-bootstrap";

function Contain(props) {
  const title = props.title;
  const imgsrc = props.imgsrc;
  // const tags = props.tags;
  // console.log(imgsrc);
  // const author=props.author;
  return (
    <>
      <Card.Img variant="top" src={imgsrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </>
  );
}

export default Contain;
