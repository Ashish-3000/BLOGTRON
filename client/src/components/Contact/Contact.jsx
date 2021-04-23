import React from "react";
import "./Contact.css";
import { Form, Container } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Container
        className="contact_form d-flex align-items-center justify-content-center "
        style={{ minHeight: "88vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="name" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Contact;
