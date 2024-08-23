import React from "react";
import { Container } from "react-bootstrap";
import ChoosePayMethoud from "../../components/Checkout/ChoosePayMethod";

const ChoosePayMethodPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <ChoosePayMethoud />
    </Container>
  );
};

export default ChoosePayMethodPage;
