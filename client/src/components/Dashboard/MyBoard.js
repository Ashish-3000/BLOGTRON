import React from "react";
import { Card, ListGroup, Tab, Row, Col } from "react-bootstrap";
import Login from "../Login/Login";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import Dashboard from "./Dashboard";
import MyBlogs from "./MyBlogs";

function MyBoard() {
  return (
    <>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Update Profile
              </ListGroup.Item>
              {/*<ListGroup.Item action href="#link2">
                My Blogs
  </ListGroup.Item>*/}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <UpdateProfile />
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <MyBlogs />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default MyBoard;
