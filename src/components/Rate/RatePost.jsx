import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactStars from "react-stars";

import AddReviewHook from "../../hook/review/Add_Review_Hook";

const RatePost = () => {
  const [register, handleSubmit, submit, getValues, errors, setting, review] =
    AddReviewHook();

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Row className="mt-3 ">
          <Col sm="12" className="me-5  d-flex">
            <div className="rate-name  d-inline ms-3 mt-1 ">علي محمد</div>
            <div dir="ltr">
              <ReactStars {...setting} />
            </div>
          </Col>
        </Row>
        <Row className="border-bottom mx-2">
          <Col className="d-felx me-4 pb-2">
            <textarea
              {...register("post", {
                required: "required",
                pattern: {
                  value: /[a-zA-Z]/,
                },
              })}
              className="input-form-area p-2 mt-3"
              rows="2"
              cols="20"
              placeholder="اكتب تعليقك...."
            />
            {errors.post && <p className="errorMsg">{errors.post.message}</p>}
            <div className=" d-flex justify-content-end al">
              <button className="product-cart-add px-3  py-2 text-center d-inline">
                اضف تعليق
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </form>
  );
};

export default RatePost;
