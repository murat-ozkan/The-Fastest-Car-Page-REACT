import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { data } from "../helper/data.js";
import CarCard from "./CarCard.jsx";

const CardContainer = () => {
  return (
    <div>
      <Container className="card-container d-flex justify-content-center align-items-center">
        <Row className="d-flex justify-content-center align-items-center">
          {data.map((car, index) => (
            <Col key={index} className="d-flex justify-content-center align-items-center">
              <CarCard {...car} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;

