import moment from "moment";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import DeleteCouponHook from "../../hook/coupon/Delete_Coupon_Hook";

const AdminCouponCard = ({ coupon }) => {
  const [handleDeleteCoupon] = DeleteCouponHook(coupon._id);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="user-address-card my-3 px-2">
      <Row className="d-flex justify-content-between  ">
        <Col xs="6">
          <div className="p-2">اسم الكوبون: {coupon.name} </div>
        </Col>
        <Col xs="6" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <Link
              to={`/admin/edit-Coupon/${coupon._id}`}
              style={{ textDecoration: "none" }}
            >
              <div style={{ cursor: "pointer" }}>
                <FaEdit />
              </div>{" "}
            </Link>
            <div className="mx-1" style={{ cursor: "pointer" }}>
              <MdDeleteForever onClick={handleDeleteCoupon} />
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            تاريخ الانتهاء: {formatDate(coupon.expire)}
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            نسبه الخصم :{coupon.discount} %
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            الوقت المتبقي للانتهاء : {moment().endOf(coupon.expire).fromNow()}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminCouponCard;
