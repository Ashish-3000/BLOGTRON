import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Contain from "../Container/Contain";
import { useAuth } from "../../contexts/AuthContext";

function MyBlogs(props) {
  const [blogarr, setBlogArr] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    axios
      .get(`https://blogtronserver.herokuapp.com/author/${currentUser}`)
      .then((response) => {
        // console.log(response);
        setBlogArr(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {blogarr.map((val) => {
        return (
          <div style={{ width: "18rem", height: "18rem" }}>
            <Link
              to={{
                pathname: `/blogs/${val.title}`,
                containerpro: {
                  title: val.title,
                  author: val.author,
                  imgsrc: val.imgsrc,
                  content: val.content,
                  tags: val.tags,
                },
              }}
            >
              <Contain
                title={val.title}
                author={val.author}
                content={val.content}
                imgsrc={val.imgsrc}
              ></Contain>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default MyBlogs;
