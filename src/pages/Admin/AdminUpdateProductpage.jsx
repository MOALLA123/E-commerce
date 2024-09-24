import React from "react";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import { Row, Col, Container } from "react-bootstrap";
import AdminUpdateProduct from "../../components/Admin/AdminUpdateProduct";
import Transitions from "../Animation/transation";

const AdminUpdateProductpage = () => {
  return (
    <>
      <div>
        <Container>
          <Row className="py-3">
            <Col sm="3" xs="2" md="2">
              <AdminSideBar />
            </Col>
            <Col sm="9" xs="10" md="10">
              <AdminUpdateProduct />
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
};

export default AdminUpdateProductpage;
