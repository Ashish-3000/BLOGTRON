import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <h1>BLOGTRON</h1>
          <p>Let's Find Together</p>
        </div>
        <div className="list">
          <Link className="link" to="/">
            <div>HOME</div>
          </Link>
          <Link className="link" to="/about">
            <div>ABOUT</div>
          </Link>
          <Link className="link" to="/contact">
            <div>CONTACT</div>
          </Link>
          <Link className="link" to="/login">
            <div>LOGIN</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
