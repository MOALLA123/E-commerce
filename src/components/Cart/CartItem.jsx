import React from "react";
import { Col, Row } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";

import UpdateCartProductCountHook from "./../../hook/Cart/Update_Cart_Product_Count_Hook";
import DeleteCartItemHook from "./../../hook/Cart/Delete_Cart_Item_Hook";
const CartItem = ({ details }) => {
  const [handleEditproductQuantity, handleSubmit, register, watch] =
    UpdateCartProductCountHook(details._id, details.count);
  const [handleDeleteItemFromCart] = DeleteCartItemHook(details._id);

  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
      <img
        width="150px"
        height="197px"
        src={details.product.imageCover}
        alt=""
      />
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text">
              {" "}
              {details.product.category.name}
            </div>
            <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
              <img
                src={deleteicon}
                alt=""
                width="20px"
                height="24px"
                onClick={handleDeleteItemFromCart}
              />
              <div className="cat-text d-inline me-2">ازاله</div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">
              {details.product.name}
            </div>
            <div className="d-inline pt-2 cat-rate me-2">
              {details.product.ratingsAverage}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="barnd-text d-inline mx-1">
              {details.product.brand.name}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            <div
              className="color ms-2 border"
              style={{ backgroundColor: "#E52C2C" }}
            ></div>
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="cat-text  d-inline">الكمية المطلوبة :</div>
              <input
                min={1}
                {...register("count")}
                defaultValue={details.count}
                className="mx-2 "
                type="number"
                style={{ width: "40px", height: "25px" }}
              />
              {console.log(watch("count"))}
              <button
                onClick={handleSubmit(handleEditproductQuantity)}
                className="mx-2 "
                style={{ width: "40px", height: "25px" }}
              >
                حفظ
              </button>
            </div>
            <div>
              <div className="product-price d-inline w-100 mx-3 p-2 border">
                {details.price} :سعر القطعة
              </div>
              <div className="product-price d-inline w-100 mx-3  p-2 border">
                تكلفة الكرت الاجمالي {details.price * watch("count")}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CartItem;
