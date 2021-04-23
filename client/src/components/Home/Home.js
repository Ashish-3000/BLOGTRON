import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Home.css";
import { Card } from "react-bootstrap";

function Home() {
  const [blogarr, setBlogArr] = useState([]);
  const [tagarr, setTags] = useState([]);
  useEffect(() => {
    axios.get("https://blogtronserver.herokuapp.com/").then((res) => {
      setBlogArr(res.data);
    });
    axios.get("https://blogtronserver.herokuapp.com/taglist").then((res) => {
      setTags(res.data);
      // console.log(res.data);
    });
  }, []);

  return (
    <>
      <div class="hero">
        <h1>BLOGTRON</h1>
        <p>Let's find Together</p>
      </div>
      <div className="home">
        <div className="homecontainer">
          <Container blogarr={blogarr} />
        </div>
        <div className="tagcontainer">
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

export default Home;
