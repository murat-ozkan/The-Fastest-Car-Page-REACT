import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { data } from "../helper/data.js";
import CarCard from "./CarCard.jsx";

const CardContainer = () => {
  const [input, setInput] = useState("");
  console.log(input);

  return (
    <>
      <Form.Control
        className="mb-5 w-25 m-auto"
        type="search"
        placeholder="Search a car..."
        onChange={(e) => setInput(e.target.value)}
        // value = {input}
      ></Form.Control>
      <div>
        <Container className="card-container d-flex justify-content-center align-items-center">
          <Row className="d-flex justify-content-center align-items-center">
            {data
              .filter((car) =>
                car.title.toLowerCase().includes(input.trim().toLowerCase())
              )
              .map((car, index) => (
                <Col
                  key={index}
                  className="d-flex justify-content-center align-items-center"
                >
                  <CarCard {...car} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CardContainer;
