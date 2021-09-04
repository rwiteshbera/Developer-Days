import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Contact.css";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: "",
      mailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
      emailSent: true,
    });
  };
  render() {
    return (
      <div className="contact-div" id="contact">
        <h1>Let's Talk</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="full-name">Full Name</Form.Label>
            <Form.Control
              id="full-name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              id="message"
              name="message"
              as="textarea"
              rows="5"
              value={this.state.message}
              onChange={this.handleChange}
            ></Form.Control>
          </Form.Group>

          <Button
            id="submit"
            className="d-inline-block"
            type="submit"
            disabled={this.state.disabled}
          >
            Submit
          </Button>
        </Form>

        {/* Feedback after submission */}
        {this.state.emailSent === true && (
          <p className="d-inline success-msg"> Email Sent </p>
        )}
        {this.state.emailSent === false && (
          <p className="d-inline err-msg"> Email Not Sent </p>
        )}

        <div className="social">
          <a
            href="https://github.com/rwiteshbera"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="warning">Github</Button>
          </a>
          <a
            href="https://www.linkedin.com/in/rwitesh-bera/"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="warning" id="btn">
              Linkedin
            </Button>
          </a>
          <a
            href="https://twitter.com/RwiteshBera"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Button variant="warning" id="btn">
              Twitter
            </Button>
          </a>
        </div>
      </div>
    );
  }
}

export default Contacts;
