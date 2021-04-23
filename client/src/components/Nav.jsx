import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Zoom from "react-reveal/Zoom";
import "./Nav.css";

function Nav() {
  const { currentUser, logout } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function changeAll() {
    console.log("clicked");
    if (makeVisible === "none") {
      setVisible("block");
      document.body.style.overflow = "hidden";
    } else {
      setVisible("none");
      document.body.style.overflowY = "scroll";
    }
  }

  async function handleLogout() {
    try {
      await logout();
      history.push("/");
    } catch {
      history.push("/");
    }
  }

  const [makeVisible, setVisible] = useState("none");
  function takeAbout() {
    setVisible("none");
    document.body.style.overflowY = "scroll";
    history.push("/about");
  }

  function takeLogin() {
    setVisible("none");
    document.body.style.overflowY = "scroll";
    history.push("/login");
  }
  function takeContact() {
    setVisible("none");
    document.body.style.overflowY = "scroll";
    history.push("/contact");
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClosed = () => {
    setAnchorEl(null);
    handleLogout();
  };
  // console.log(currentUser);
  const history = useHistory();

  function toHome() {
    history.push("/");
  }

  return (
    <>
      <div className="navi">
        <div>
          <h1 onClick={toHome}>BLOGTRON</h1>
        </div>
        <div className="navi-left">
          <div>
            <Link to="/about">ABOUT</Link>
          </div>
          <div>
            <Link to="/contact">CONTACT</Link>
          </div>
          {currentUser === null ? (
            <Link to="/login">
              <div>LOGIN</div>
            </Link>
          ) : (
            <>
              <div>
                <Link to="/write">WRITE</Link>
              </div>
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/myboard">My Board</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClosed}>Log Out</MenuItem>
                </Menu>
              </div>
            </>
          )}
        </div>
        <div onClick={changeAll} className="hamburger">
          <div></div>
          <div className="div2"></div>
          <div></div>
        </div>
      </div>
      <Zoom>
        <div
          style={{
            display: makeVisible,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "3rem",
              height: "100%",
            }}
          >
            <div className="style1"></div>

            <div className="navbarcompo" onClick={takeAbout}>
              About
            </div>
            <div className="navbarcompo" onClick={takeContact}>
              Contact
            </div>
            <div className="navbarcompo" onClick={takeLogin}>
              Login
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
}

export default Nav;
