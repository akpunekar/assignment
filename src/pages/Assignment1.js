import React, { useEffect, useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Assignment1() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");

  useEffect(() => {
    switch (operation) {
      case "add":
        setResult(parseFloat(number1) + parseFloat(number2));
        break;
      case "subtract":
        setResult(parseFloat(number1) - parseFloat(number2));
        break;
      case "multiply":
        setResult(parseFloat(number1) * parseFloat(number2));
        break;
      case "divide":
        setResult(parseFloat(number1) / parseFloat(number2));
        break;
      default:
        break;
    }
  }, [number1, number2, operation]);

  const handleAddition = () => {
    setOperation("add");
  };

  const handleSubtraction = () => {
    setOperation("subtract");
  };

  const handleMultiplication = () => {
    setOperation("multiply");
  };

  const handleDivision = () => {
    setOperation("divide");
  };

  return (
    <div className="assignment1">
      <h1>Assignment 1</h1>
      <br />
      <div>
        <h1>Result: {result}</h1>
      </div>
      <br />
      <Form>
        <Form.Group>
          <Form.Label>Number 1:</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Number 2:</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
            />
          </InputGroup>
          <br />
        </Form.Group>
        <Button className="m-2" variant="outline-dark" onClick={handleAddition}>
          Add
        </Button>
        <Button
          className="m-2"
          variant="outline-dark"
          onClick={handleSubtraction}
        >
          Subtract
        </Button>
        <Button
          className="m-2"
          variant="outline-dark"
          onClick={handleMultiplication}
        >
          Multiply
        </Button>
        <Button className="m-2" variant="outline-dark" onClick={handleDivision}>
          Divide
        </Button>
      </Form>
      <br />
      <div>
        <p>
          <Link className="m-3" to="/">
            Home
          </Link>
          <Link to="/assignment2">Assignment 2</Link>
        </p>
      </div>
    </div>
  );
}

export default Assignment1;
