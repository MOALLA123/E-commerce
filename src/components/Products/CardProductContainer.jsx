import React from "react";
import ProductCard from "./ProductCard";
import { Row, Container } from "react-bootstrap";
import SubTitle from "../utility/SubTitle";

function CardProductContainer({ title, btntitle, pathText, products }) {
  return products ? (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="my-2 d-flex justify-content-between">
        {products &&
          products
            .sort((a, b) => b.price - a.price)
            .map((e, i) => {
              return <ProductCard key={i} item={e} />;
            })}
      </Row>
    </Container>
  ) : null;
}

export default CardProductContainer;
