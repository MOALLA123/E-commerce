import React from "react";
import AdminAddProducts from "../../components/Admin/AdminAddProducts";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
const AdminAddProductPage = () => {
  return (
    <div>
      {" "}
      <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <AdminSideBar />
          </Col>
          <Col sm="9" xs="10" md="10">
            <AdminAddProducts />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminAddProductPage;
