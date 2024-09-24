import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import { MdDeleteForever, MdDoneOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DeleteReviewHook from "../../hook/review/Delete_Review_Hook";
import UpdateReviewHook from "../../hook/review/Update_Review_Hook";
import { RxCross2 } from "react-icons/rx";
import ReactStars from "react-stars";

const RateItem = ({ review }) => {
  const [handleDelete] = DeleteReviewHook(review);
  const [
    handleUpdate,
    click,
    handleClose,
    setting,
    handleComment,
    handleSubmit,
    register,
    errors,
  ] = UpdateReviewHook(review);

  return (
    <div>
      <div className="div">
        <Row className="mt-3">
          <Col className="d-felx me-5">
            <div className="rate-name  d-inline ms-2">{review.user.name}</div>

            {click ? (
              <div dir="ltr" className="d-flex justify-content-end">
                <ReactStars {...setting} />
              </div>
            ) : (
              <>
                <img src={rate} alt="" height="16px" width="16px" />
                <div className="cat-rate  d-inline  p-1 pt-2">
                  {review.rating}
                </div>
              </>
            )}
          </Col>
        </Row>
        <Row className="border-bottom mx-2">
          <Col className="d-felx me-4 pb-2">
            {click ? (
              <input
                type="text"
                className="rate-description  d-inline ms-2"
                defaultValue={review.review}
                {...register("newPost", {
                  value: review.review,
                  required: "required",
                })}
              />
            ) : (
              <div className="rate-description  d-inline ms-2">
                {review.review}
              </div>
            )}

            {review.user._id ===
            JSON.parse(localStorage.getItem("user"))?._id ? (
              <div className="d-flex justify-content-end ">
                {click ? (
                  <>
                    <div className="mx-1" style={{ cursor: "pointer" }}>
                      <MdDoneOutline onClick={handleSubmit(handleComment)} />
                    </div>
                    <div style={{ cursor: "pointer" }}>
                      <RxCross2 onClick={handleClose} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mx-1" style={{ cursor: "pointer" }}>
                      <MdDeleteForever onClick={handleDelete} />
                    </div>
                    <div style={{ cursor: "pointer" }}>
                      <FaEdit onClick={handleUpdate} />
                    </div>
                  </>
                )}
              </div>
            ) : null}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RateItem;

/*

import React from "react";
import { Row, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import ProductDetailsHook from "../../hook/product/Product_Details_Hook";
import { reach } from "yup";
import GetReviewHook from "../../hook/review/Get_Review_Hook";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { DeleteReview } from "../../redux/actions/ReviewAction";
const RateItem = ({ review }) => {
  console.log()
  const dispatch = useDispatch();
  const handleDelete = () => {
    Swal.fire({
      title: "هل انت متأكد?",
      text: "لا يمكن التراجع!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "نعم,قم بالحذف",
      cancelButtonText: "الغاء",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(DeleteReview("66ec0bbe1982a13d88340901"));
        console.log(result, "fffffffffffff");
      }
    });
  };

  return (
    <div>
      {review.data ? (
        review.data.data.map((e, idx) => {
          return (
            <div className="div" key={idx}>
              <Row className="mt-3">
                <Col className="d-felx me-5">
                  <div className="rate-name  d-inline ms-2"> {e.user.name}</div>
                  <img
                    className=""
                    src={rate}
                    alt=""
                    height="16px"
                    width="16px"
                  />
                  <div className="cat-rate  d-inline  p-1 pt-2">{e.rating}</div>
                </Col>
              </Row>
              <Row className="border-bottom mx-2">
                <Col className="d-felx me-4 pb-2">
                  <div className="rate-description  d-inline ms-2">
                    {e.review}
                  </div>
                  {e.user._id ===
                  JSON.parse(localStorage.getItem("user"))?._id ? (
                    <div className="d-flex justify-content-end ">
                      <div className="mx-1" style={{ cursor: "pointer" }}>
                        <MdDeleteForever onClick={handleDelete} />
                      </div>

                      <div style={{ cursor: "pointer" }}>
                        <FaEdit />
                      </div>
                    </div>
                  ) : null}
                </Col>
              </Row>
            </div>
          );
        })
      ) : (
        <h6>لا يوجد تقييمات </h6>
      )}
    </div>
  );
};

export default RateItem;

*/
