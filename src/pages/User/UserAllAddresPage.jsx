import React from "react";

import UserSideBar from "../../components/User/UserSideBar";
import { Col, Container, Row } from "react-bootstrap";
import UserAllAddres from "../../components/User/UserAllAddres";
const UserAllAddresPage = () => {
  return (
    <div>
      <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <UserSideBar />
          </Col>
          <Col sm="9" xs="10" md="10">
            {" "}
            <UserAllAddres />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserAllAddresPage;
