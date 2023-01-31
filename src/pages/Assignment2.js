import React, { useState } from "react";
import { Form, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Assignment2() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted([...submitted, { firstName, lastName }]);
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="assignment2">
      <h1>Assignment2</h1>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </Form.Group>
        <Button className="m-3" variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>
      {submitted.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {submitted.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <div>
        <p>
          <Link className="m-3" to="/">
            Home
          </Link>
          <Link to="/assignment1">Assignment 1</Link>
        </p>
      </div>
    </div>
  );
}

export default Assignment2;
