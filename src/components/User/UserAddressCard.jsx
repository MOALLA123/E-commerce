import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../images/delete.png";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DeleteUserAddressHook from "../../hook/User/Delete_User_Address_Hook";
const UserAddressCard = ({ address }) => {
  const [handleDeleteAddress] = DeleteUserAddressHook(address._id);
  return (
    <div className="user-address-card my-3 px-2">
      <Row className="d-flex justify-content-between  ">
        <Col xs="1" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
              marginLeft: "2px",
            }}
          >
            العنوان:
          </div>
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            {address.alias}
          </div>
        </Col>
        <Col xs="4" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <Link
              to={`/user/edit-address/${address._id}`}
              style={{ textDecoration: "none" }}
            >
              <div style={{ cursor: "pointer" }}>
                <FaEdit />
              </div>{" "}
            </Link>
            <div className="mx-1" style={{ cursor: "pointer" }}>
              <MdDeleteForever onClick={handleDeleteAddress} />
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            العنوان بالتفصيل :
          </div>
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            {address.details}
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            المدينة التابع لها منزلك :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {address.city}
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            رقم الهاتف:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {address.phone}
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            ZIP CODE:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {address.postalCode}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddressCard;
