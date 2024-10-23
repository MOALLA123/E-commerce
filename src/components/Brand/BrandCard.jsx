import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import SubTitle from "./../utility/SubTitle";

const BrandCard = ({ img, name }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="2" className="my-2 justify-content-center ">
      <Card>
        <Card.Img variant="top" src={img} style={{ height: "154px" }} />
        <Card.Body>
          <Card.Title className="brand-title"> {name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BrandCard;
