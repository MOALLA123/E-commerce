import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../../components/Cart/CartItem";
import CartCheckout from "../../components/Cart/CartCheckout";
import GetLoggedUserCartHook from "../../hook/Cart/Get_Logged_User_Cart_Hook";
import emptyImage from "../../images/Empty.png";
import ApplyCouponOnCartHook from "../../hook/Cart/Apply_Coupon_On_Cart_Hook";
const CartPage = () => {
  const [cart] = GetLoggedUserCartHook();

  return (
    <Container style={{ minHeight: "670px" }}>
      {cart?.status !== 404 ? (
        <>
          <Row>
            <div className="cart-title mt-4"> عربة التسوق</div>
          </Row>
          <Row className="d-flex jsutify-content-center">
            <Col xs="12" md="9">
              {cart?.data?.products?.map((e, i) => {
                return <CartItem key={i} details={e} />;
              })}
            </Col>
            <Col xs="6" md="3">
              <CartCheckout total={cart?.data?.totalCartPrice} />
            </Col>
          </Row>
        </>
      ) : (
        <>
          <div className="cart-title mt-4 text-center">
            {" "}
            عربة التسوق فارغة!{" "}
          </div>

          <img
            src={emptyImage}
            style={{
              width: "50%",
              height: "50%",
              margin: "auto",
              marginTop: "20px",
              display: "block",
            }}
          />
        </>
      )}
    </Container>
  );
};

export default CartPage;
