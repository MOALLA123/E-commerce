import React, { useEffect, useState } from "react";
import { Col, Spinner } from "react-bootstrap";
import { Row } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AddCategoryHook from "../../hook/category/Add-Category-Hook";

export const AdminAddCategory = () => {
  const [
    img,
    name,
    Loading,
    ispress,
    onPhotoChange,
    deleteImage,
    handlesubmit,
    onNameChange,
  ] = AddCategoryHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضف تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
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
      <ToastContainer
        autoClose={1000}
        position="top-right"
        hideProgressBar={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
};

export default AdminAddCategory;
