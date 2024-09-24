import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import ProductDetailsHook from "../../hook/product/Product_Details_Hook";
import { reach } from "yup";
import GetReviewHook from "../../hook/review/Get_Review_Hook";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteReview,
  getAllReviewOnProduct,
} from "../../redux/actions/ReviewAction";
import notify from "../../hook/UseNotification";
import { useParams } from "react-router-dom";
import { GetProductDetails } from "../../redux/actions/ProductsAction";

const DeleteReviewHook = (review) => {
  const [loading, setLoadig] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  // const res = useSelector((state) => state.reviewReducer.deletedreview);
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
        setLoadig(true);
        dispatch(DeleteReview(review._id));
        setLoadig(false);
      }
    });
  };

  useEffect(() => {
    if (loading === false) {
      notify("تم الحذف بنجاح", "success");

      setTimeout(() => {
        dispatch(getAllReviewOnProduct(id, 1, 5));
      }, 1000);

      setTimeout(() => {
        dispatch(GetProductDetails(id));
      }, 500);
      setLoadig(true);
    }
  }, [loading]);

  return [handleDelete];
};

export default DeleteReviewHook;
