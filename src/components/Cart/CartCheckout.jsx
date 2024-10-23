import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ApplyCouponOnCartHook from "../../hook/Cart/Apply_Coupon_On_Cart_Hook";
const CartCheckout = ({ total }) => {
  const [handleApplyCoupon, handleSubmit, register, ApplliedCoupon] =
    ApplyCouponOnCartHook();
  console.log(ApplliedCoupon, "0000000");
  console.log(ApplliedCoupon?.data?.data?.totalAfterDiscount);
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex  flex-column  ">
        <div className="d-flex  ">
          <input
            {...register("couponName")}
            className="copon-input d-inline text-center "
            placeholder="كود الخصم"
          />
          <button
            className="copon-btn d-inline "
            onClick={handleSubmit(handleApplyCoupon)}
          >
            تطبيق
          </button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">
          {ApplliedCoupon.data ? (
            <div className="d-flex justify-content-center ">
              <div className="text-decoration-line-through">{total} جنية</div>

              <div className="mx-2">
                {ApplliedCoupon?.data?.data?.totalAfterDiscount} جنية
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center">{total} جنية</div>
          )}
        </div>
        <Link
          to="/order/paymethoud"
          style={{ textDecoration: "none" }}
          className="product-cart-add  d-inline "
        >
          <button className="product-cart-add w-100 px-2"> اتمام الشراء</button>
        </Link>
      </Col>
    </Row>
  );
};

export default CartCheckout;
