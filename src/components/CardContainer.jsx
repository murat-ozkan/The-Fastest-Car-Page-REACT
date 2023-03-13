import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { data } from "../helper/data.js";
import CarCard from "./CarCard.jsx";

const CardContainer = () => {
  return (
    <Container className="card-container">
      <Row>
        {data.map((car, index) => (
          <Col key={index}>
            <CarCard {...car} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardContainer;
