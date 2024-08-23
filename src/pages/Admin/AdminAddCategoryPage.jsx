import React from "react";
import AdminAddCategory from "../../components/Admin/AdminAddCategory";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
const AdminAddCategoryPage = () => {
  return (
    <div>
      <Container>
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <AdminSideBar />
          </Col>
          <Col sm="9" xs="10" md="10">
            <AdminAddCategory />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminAddCategoryPage;
