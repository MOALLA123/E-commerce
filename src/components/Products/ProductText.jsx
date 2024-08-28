import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificBrand } from "../../redux/actions/BrandAction";
import { getSpecifiCategory } from "../../redux/actions/CategoryAction";

const ProductText = ({ details }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecificBrand(details.brand));
    dispatch(getSpecifiCategory(details.category));
  }, []);
  const brand = useSelector((state) => state.allBrand.specificBrand.data);
  const category = useSelector(
    (state) => state.allCategory.specificCategory.data
  );
  category ? console.log(category, "uuuuuuuuu") : null;
  return (
    <div>
      <Row className="mt-2">
        {category ? <div className="cat-text">{category.name}</div> : null}{" "}
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {details.title}
            <div className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          {brand && (
            <div className="barnd-text d-inline mx-1">{brand.name} </div>
          )}
        </Col>{" "}
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          <div className="cat-text">الألوان المتاحة : </div>
          {details.availableColors.map((e) => {
            return (
              <div
                className="color ms-2 border"
                style={{ backgroundColor: e }}
              ></div>
            );
          })}
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {details.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">
            {details.price} $
          </div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">
            اضف للعربة
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductText;
