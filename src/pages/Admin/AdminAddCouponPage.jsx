import React from "react";
import AdminAddBrand from "../../components/Admin/AdminAddBrand";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminAddCoupon from "../../components/Admin/AdminAddCoupon";
import AdminCouponCard from "./../../components/coupon/AdminCouponCard";

const AdminAddCouponPage = () => {
  return (
    <div>
      <Container>
        <Row className="py-3">
          <Col sm="3" xs="3" md="3">
            <AdminSideBar />
          </Col>

          <Col sm="9" xs="9" md="9">
            <AdminAddCoupon />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminAddCouponPage;
