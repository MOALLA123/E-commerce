import React from "react";
import BrandCard from "./BrandCard";
import { Container, Row } from "react-bootstrap";
import HomeBrandhook from "../../hook/brand/Home-Brand-hook";

const BrandContainer = ({ brand, loading }) => {
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل الماركات</div>
      <Row className="my-2 d-flex justify-content-between">
        {brand.data
          ? brand.data.map((item, i) => {
              return <BrandCard img={item.image} name={item.name} key={i} />;
            })
          : null}
      </Row>
    </Container>
  );
};

export default BrandContainer;
