import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import notify from "./../UseNotification";
import x from "../../images/x.mp3";
import {
  createReview,
  getAllReviewOnProduct,
} from "../../redux/actions/ReviewAction";
import useSound from "use-sound";
const AddReviewHook = () => {
  const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const review = useSelector((state) => state.reviewReducer.createreview);

  // handle post

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const submit = async () => {
    const { post } = getValues();

    setLoading(true);

    await dispatch(createReview({ review: post, rating: rate }, id));

    setLoading(false);
  };

  const [play] = useSound(x);
  useEffect(() => {
    if (loading === false) {
      if (review.status === 201) {
        play();
        notify("تم اضافة التعليق بنجاح ", "success");
        dispatch(getAllReviewOnProduct(id, 1, 5));
      } else if (
        review === "ErrorAxiosError: Request failed with status code 403"
      ) {
        play();
        notify("لا يمكن للأدمن اضافة تقييم", "warn");
      } else if (
        review === "ErrorAxiosError: Request failed with status code 401"
      ) {
        play();
        notify(" يجب تسجيل الدخول أولا ", "warn");
      } else if (
        review === "ErrorAxiosError: Request failed with status code 400"
      ) {
        play();
        notify("  قمت باضافة تعليق مسبقا ", "warn");
      }
      setLoading(true);
    }
  }, [loading]);

  //star
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

  return [register, handleSubmit, submit, getValues, errors, setting, review];
};

export default AddReviewHook;
