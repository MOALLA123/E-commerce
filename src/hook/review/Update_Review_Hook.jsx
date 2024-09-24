import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import notify from "./../UseNotification";
import {
  getAllReviewOnProduct,
  UpdateReview,
} from "../../redux/actions/ReviewAction";
const UpdateReviewHook = (review) => {
  const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();

  const [click, setclick] = useState(false);
  const update = useSelector((state) => state.reviewReducer.update);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const handleUpdate = () => {
    setclick(true);
  };

  const handleClose = () => {
    setclick(false);
  };

  const handleComment = async () => {
    const { newPost } = getValues();

    setLoading(true);

    await dispatch(UpdateReview({ review: newPost, rating: "4" }, review._id));

    setclick(false);
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (update.status === 200) {
        notify("تم التعديل بنجاح ", "success");
        dispatch(getAllReviewOnProduct(id, 1, 5));
      } else if (
        update === "ErrorAxiosError: Request failed with status code 403"
      ) {
        notify("لا يمكن للأدمن اضافة تقييم", "warn");
      } else if (
        update === "ErrorAxiosError: Request failed with status code 401"
      ) {
        notify(" يجب تسجيل الدخول أولا ", "warn");
      } else if (
        update === "ErrorAxiosError: Request failed with status code 400"
      ) {
        notify("  قمت باضافة تعليق مسبقا ", "warn");
      }
      setLoading(true);
    }
  }, [loading]);

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 0,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      setRate(newValue);
      console.log(` new value is ${newValue}`);
    },
  };

  return [
    handleUpdate,
    click,
    handleClose,
    setting,
    handleComment,
    handleSubmit,
    register,
    errors,
  ];
};

export default UpdateReviewHook;
