import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Contain from "../Container/Contain";
import { Card, Button } from "react-bootstrap";
import Container from "../Container/Container";
import "./Tags.css";

function Tags(props) {
  let location;
  location = props.location.pathname.substr(6);
  const [blogarr, setBlogArr] = useState([]);
  const [tagarr, setTags] = useState([]);
  useEffect(() => {
    axios.get("https://blogtronserver.herokuapp.com/taglist").then((res) => {
      setTags(res.data);
      // console.log(res.data);
    });
    axios
      .get(`https://blogtronserver.herokuapp.com/tags/${location}`)
      .then((response) => {
        setBlogArr(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);
  return (
    <>
      <div className="home">
        <div className="homecontainer">
          <Container blogarr={blogarr} />
        </div>
        <div className="tagc" style={{ maxWidth: "20rem" }}>
          <Card>
            <Card.Title>Tags</Card.Title>
            <Card.Text>
              {" "}
              {tagarr.map((val) => {
                return (
                  <Link to={`/tags/${val}`}>
                    <Button className="m-2">{val}</Button>
                  </Link>
                );
              })}
            </Card.Text>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Tags;
