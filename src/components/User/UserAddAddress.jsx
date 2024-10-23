import React from "react";
import { Row, Col } from "react-bootstrap";
import UserAddAddressHook from "../../hook/User/User_Add_Address_Hook";
import GetUserAddressHook from "../../hook/User/Get_User_Address_Hook";

const UserAddAddress = () => {
  const [handleAddAddress, handleSubmit, register] = UserAddAddressHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
        <Col sm="8">
          <input
            {...register("address", {
              required: "required",
            })}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
          />
          <textarea
            {...register("addressDetails", {
              required: "required",
            })}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="العنوان بالتفصيل"
          />
          <input
            {...register("phone", {
              required: "required",
            })}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
          />
          <input
            {...register("city", {
              required: "required",
            })}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="المدينة "
          />
          <input
            {...register("zip", {
              required: "required",
            })}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="كود المنطقة "
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button
            className="btn-save d-inline mt-2 "
            onClick={handleSubmit(handleAddAddress)}
          >
            اضافة عنوان
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddAddress;
