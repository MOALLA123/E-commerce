import React from "react";
import { Row, Container } from "react-bootstrap";
import SubTitle from "../utility/SubTitle";
import BrandCard from "./BrandCard";
import HomeBrandhook from "../../hook/brand/Home-Brand-hook";
function BrandFeautured({ title, btntitle }) {
  const [brand, loading] = HomeBrandhook();
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-2 d-flex justify-content-between">
        {loading ? (
          <h1>loading.......</h1>
        ) : brand && brand.data.length > 0 ? (
          brand.data.slice(0, 5).map((item) => {
            return (
              <>
                <BrandCard img={item.image} name={item.name} />
              </>
            );
          })
        ) : (
          <h5>لا يوجد ماركات لعرضها !</h5>
        )}
      </Row>
    </Container>
  );
}

export default BrandFeautured;
