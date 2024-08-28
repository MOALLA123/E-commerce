import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductGellery from "./ProductGellery";
import ProductText from "./ProductText";

const ProductDetails = ({ productdetails }) => {
  return (
    <div>
      {productdetails && (
        <Row className="py-3">
          <Col className="lg-4 d-flex">
            <ProductGellery gallery={productdetails.images} />
          </Col>
          <Col className="lg-8">
            <ProductText details={productdetails} />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductDetails;
