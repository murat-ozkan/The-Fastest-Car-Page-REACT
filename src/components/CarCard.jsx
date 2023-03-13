import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Sound from "react-sound";
import carsound from "../helper/mixkit-car-engine-start-1566.wav";

const CarCard = ({ id, title, description, imageLink }) => {
  // const {id, title, description, imageLink} = props // diğer tür yakalama
  const [show, setShow] = useState(true);
  const [playStatus, setPlayStatus] = React.useState(Sound.status.STOPPED);

  function handleImageClick() {
    setPlayStatus(Sound.status.PLAYING);
  }
  const detail = () => {
    setShow(!show);
  };
  return (
    <Card
      onClick={detail}
      className="car-card mb-4"
      style={{ width: "24rem", height: "18rem" }}
    >
      {show ? (
        <>
          <Card.Img
            onClick={handleImageClick}
            className="car-image"
            variant="top"
            src={imageLink}
          />
        </>
      ) : (
        <>
          <Card.Body className="car-body"> {description}</Card.Body>
          <Sound url={carsound} playStatus={playStatus} />
        </>
      )}
      <Card.Footer>
        <Card.Title className="car-title">{title}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default CarCard;
