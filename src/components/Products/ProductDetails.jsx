import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductGellery from "./ProductGellery";
import ProductText from "./ProductText";

const ProductDetails = ({ productdetails }) => {
  console.log(productdetails, "kllllllllllllllll");
  console.log(productdetails.imagew, "kllllllllllllllll");
  return (
    <div>
      <Row className="py-3">
        <Col className="lg-4 d-flex">
          <ProductGellery gallery={[productdetails]} />
        </Col>
        <Col className="lg-8">
          <ProductText />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
