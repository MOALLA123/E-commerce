import React from "react";

import UserSideBar from "../../components/User/UserSideBar";
import { Col, Container, Row } from "react-bootstrap";
import UserFavouriteProduct from "../../components/User/UserFavouriteProduct";

const UserFavouriteProductsPage = () => {
  return (
    <div>
      <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <UserSideBar />
          </Col>
          <Col sm="9" xs="10" md="10">
            <UserFavouriteProduct />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserFavouriteProductsPage;
