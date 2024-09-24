import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Row, Container } from "react-bootstrap";
import SubTitle from "../utility/SubTitle";

function CardProductContainer({ title, btntitle, pathText, products }) {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="my-2 d-flex justify-content-between">
        {products && products.map((e, i) => <ProductCard key={i} item={e} />)}
      </Row>
    </Container>
  );
}

export default CardProductContainer;
