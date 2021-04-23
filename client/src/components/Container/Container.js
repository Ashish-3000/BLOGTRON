import React from "react";
import Contain from "./Contain";
import { Link } from "react-router-dom";

function Container(props) {
  const blogarr = props.blogarr;
  return (
    <>
      {blogarr.map((val) => {
        return (
          <div style={{ width: "25rem", height: "20rem", margin: "1rem" }}>
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

export default Container;
