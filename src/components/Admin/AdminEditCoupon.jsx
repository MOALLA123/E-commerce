import React from "react";
import { Row, Col } from "react-bootstrap";
import EditCouponHook from "../../hook/coupon/Edit_Coupon_Hook";
import GetSpecificCouponHook from "../../hook/coupon/Get_Specific_Coupon_Hook";
import { format } from "date-fns";
const AdminEditCoupon = () => {
  const [handleEditCoupon, handleSubmit, register, watch] = EditCouponHook();

  const [PreviousCoupon] = GetSpecificCouponHook();

  //defaultValue={format(new Date(Coupon.expire, "MM-dd-yyyy"))}
  PreviousCoupon?.data &&
    console.log(format(new Date(PreviousCoupon.data.expire), "MM/dd/yyyy"));

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      {PreviousCoupon?.data ? (
        <div>
          <Row className="justify-content-start ">
            <div className="admin-content-text pb-4"> صفحة تعديل الكوبون</div>
            <Col sm="8">
              <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم الكوبون"
                {...register("name", {
                  value: PreviousCoupon.data.name,
                  reaquired: "required",
                })}
                defaultValue={PreviousCoupon.data.name}
              />
              {console.log(PreviousCoupon.data.expire)}
              <input
                type="date"
                {...register("expire", {
                  reaquired: "required",
                })}
                className="input-form d-block mt-3 px-3"
                placeholder="تاريخ الانتهاء"
                defaultValue={format(PreviousCoupon.data.expire, "yyyy-MM-dd")}
                min={Date.now()}
              />

              <input
                {...register("discount", {
                  value: PreviousCoupon.data.discount,
                  reaquired: "required",
                })}
                defaultValue={PreviousCoupon.data.discount}
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
                onClick={handleSubmit(handleEditCoupon)}
              >
                حفظ التعديلات
              </button>
            </Col>
          </Row>
        </div>
      ) : null}
    </>
  );
};

export default AdminEditCoupon;
