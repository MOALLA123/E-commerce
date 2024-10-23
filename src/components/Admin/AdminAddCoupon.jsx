import React from "react";
import AdminCouponCard from "../coupon/AdminCouponCard";
import { Row, Col } from "react-bootstrap";
import AddViewsCouponHook from "../../hook/coupon/Add_View_Coupon_Hook";
const AdminAddCoupon = () => {
  const [handleAddCoupon, handleSubmit, register, getCoupons] =
    AddViewsCouponHook();

  return (
    <div style={{ height: "100%" }}>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضف كوبون جديد</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الكوبون"
            {...register("name", {
              reaquired: "required",
            })}
          />
          <input
            {...register("expire", {
              reaquired: "required",
            })}
            type="date"
            className="input-form d-block mt-3 px-3"
            placeholder="تاريخ الانتهاء"
          />
          <input
            {...register("discount", {
              reaquired: "required",
            })}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="نسبة خصم الكوبون"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button
            className="btn-save d-inline mt-2 "
            onClick={handleSubmit(handleAddCoupon)}
          >
            حفظ الكوبون
          </button>
        </Col>
      </Row>
      <div className="admin-content-text pb-4">الكوبونات الموجودة :</div>
      <Col sm="8" className="">
        {getCoupons.data?.map((e, i) => {
          return <AdminCouponCard coupon={e} key={i} />;
        })}
      </Col>
    </div>
  );
};

export default AdminAddCoupon;
