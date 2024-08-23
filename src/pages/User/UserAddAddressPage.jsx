import React from "react";
import UserAddAddress from "../../components/User/UserAddAddress";

import UserSideBar from "../../components/User/UserSideBar";
import { Col, Container, Row } from "react-bootstrap";
const UserAddAddressPage = () => {
  return (
    <div>
      {" "}
      <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <UserSideBar />
          </Col>
          <Col sm="9" xs="10" md="10">
            <UserAddAddress />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserAddAddressPage;
