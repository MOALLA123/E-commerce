import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import deleteicon from "../../images/delete.png";
import EditUserInformationHook from "../../hook/User/Edit_User_Information_Hook";

import { FaEdit } from "react-icons/fa";
import Transitions from "../../pages/Animation/transation";
import { MdDoneOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const UserProfile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    !!localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const [
    handleEditPassword,
    click,
    handleClose,
    handleSubmit,
    register,
    errors,
    handleUpdate,
    handleEditInformation,
  ] = EditUserInformationHook();

  return (
    <div>
      <div className="admin-content-text">الصفحه الشخصية</div>
      <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div className="p-2 d-inline">الاسم:</div>
            {/* {user && user.name} */}
            {click ? (
              <Transitions>
                <input
                  className="m-1 d-inline"
                  defaultValue={user.name}
                  {...register("name", {
                    value: user.name,
                    required: "required",
                  })}
                />
              </Transitions>
            ) : (
              <div className="p-1 item-delete-edit">{user && user.name}</div>
            )}
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div className="d-flex mx-2">
              <FaEdit onClick={handleUpdate} style={{ cursor: "pointer" }} />
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            {" "}
            <div className="p-2">رقم الهاتف:</div>
            {click ? (
              <Transitions>
                <input
                  className="p-1 "
                  {...register("phone", {
                    required: "required",
                    value: user.phone,
                    pattern: {
                      value: /010\d{8}/,
                      message: "phone number must start with 010",
                    },
                  })}
                  defaultValue={user.phone}
                />
              </Transitions>
            ) : (
              <div className="p-1 item-delete-edit">{user && user.phone}</div>
            )}
            {errors.phone && (
              <p className="errorMsg"> {errors.phone.message}</p>
            )}
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">الايميل:</div>
            <div className="p-1 item-delete-edit">{user && user.email}</div>
          </Col>{" "}
          {click && (
            <Transitions>
              <div className="justify-content-end d-flex">
                <>
                  <div className="mx-1" style={{ cursor: "pointer" }}>
                    <MdDoneOutline onClick={handleEditInformation} />
                  </div>
                  <div style={{ cursor: "pointer" }}>
                    <RxCross2 onClick={handleClose} />
                  </div>
                </>
              </div>
            </Transitions>
          )}
        </Row>

        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="">
            <div className="admin-content-text">تغير كملة المرور</div>
            <input
              {...register("currentPassword", {
                required: "required",
                pattern: {
                  value: /(\d+|\w+){6,}/,
                  message: "Entered value does not match email format",
                },
              })}
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="ادخل كلمة المرور القديمة"
            />
            {errors.currentPassword && (
              <p className="errorMsg">{errors.currentPassword.message}</p>
            )}
            <input
              {...register("password", {
                required: "required",
                pattern: {
                  value: /(\d+|\w+){6,}/,
                  message: "Entered value does not match email format",
                },
              })}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="ادخل كلمة المرور الجديده"
            />
            {errors.password && (
              <p className="errorMsg">{errors.password.message}</p>
            )}
            <input
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="أكد كلمة المرور الجديده"
              {...register("passwordConfirm", {
                required: "required",
                pattern: {
                  value: /(\d+|\w+){6,}/,
                  message: "Entered value does not match email format",
                },
              })}
            />
            {errors.passwordConfirm && (
              <p className="errorMsg">{errors.passwordConfirm.message}</p>
            )}
          </Col>
        </Row>
        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button
              className="btn-save d-inline mt-2 "
              onClick={handleSubmit(handleEditPassword)}
            >
              حفظ كلمة السر
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserProfile;
