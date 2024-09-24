import React, { useEffect, useState } from "react";
import { Col, Spinner } from "react-bootstrap";
import { Row } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import "react-toastify/dist/ReactToastify.css";
import AddBrandHook from "./../../hook/brand/Add_Brand_Hook";

export const AdminAddBrand = () => {
  const [
    img,
    name,
    Loading,
    ispress,
    onPhotoChange,
    deleteImage,
    handlesubmit,
    onNameChange,
  ] = AddBrandHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضف ماركة جديدة</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره الماركة </div>
          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="nothing"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              id="upload-photo"
              type="file"
              name="photo"
              onChange={onPhotoChange}
            />
            {img != avatar ? (
              <button
                id="delet-upload-photo"
                onClick={() => {
                  deleteImage();
                }}
              >
                حذف
              </button>
            ) : null}
          </div>
          <input
            onChange={onNameChange}
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button
            className="btn-save d-inline mt-2 "
            type="submit"
            onClick={handlesubmit}
          >
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {ispress ? (
        Loading ? (
          <Spinner animation="grow" />
        ) : (
          <h4>تم الانتهاء</h4>
        )
      ) : null}
    </div>
  );
};

export default AdminAddBrand;
