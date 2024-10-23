import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCard from "./UserAddressCard";
import GetUserAddressHook from "../../hook/User/Get_User_Address_Hook";

const UserAllAddress = () => {
  const [address] = GetUserAddressHook();
  console.log(address, "0000000000");
  return (
    <div>
      <div className="admin-content-text pb-4">دفتر العنوانين</div>
      {address?.map((e, i) => {
        return <UserAddressCard address={e} key={i} />;
      })}

      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address">اضافه عنوان جديد</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllAddress;
