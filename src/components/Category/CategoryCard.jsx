import React from "react";
import { Col, Card } from "react-bootstrap";

const CategoryCard = ({ background, img, title }) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-4 d-flex justify-content-around "
    >
      <div className="allCard mb-3 ">
        <Card>
          <Card.Img variant="top" src={img} style={{ height: "154px" }} />
        </Card>
        <p className="categoty-card-text my-2">{title}</p>
      </div>
    </Col>
  );
};

export default CategoryCard;
