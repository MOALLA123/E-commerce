import React, { useEffect } from "react";
import CategoryHeader from "../../components/Category/CategoryHeader";
import SearchCountResult from "../../components/utility/SearchCountResult";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../components/utility/SideFilter";
import CardProductContainer from "../../components/Products/CardProductContainer";
import Pagination from "../../components/utility/Pagination";
import Transitions from "../Animation/transation";

const ShopProductsPage = () => {
  return (
    <>
      <div style={{ minHeight: "670px" }}>
        <CategoryHeader />
        <Container>
          <SearchCountResult title="400نتيجة بحث " />
          <Row>
            <Col sm="2" xs="2" md="1" className="d-flex">
              <SideFilter />
            </Col>
            <Col sm="10" xs="10" md="11">
              <CardProductContainer title="" btntitle="" />
            </Col>
          </Row>
          <Pagination />
        </Container>
      </div>
    </>
  );
};

export default ShopProductsPage;
