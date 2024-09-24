import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import notify from "./../UseNotification";
import {
  createReview,
  getAllReviewOnProduct,
} from "../../redux/actions/ReviewAction";

const GetReviewHook = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    const f = async () => {
      await dispatch(getAllReviewOnProduct(id, 1, 4));
    };
    f();
  }, []);

  const review = useSelector((state) => state.reviewReducer.review);

  const onPress = async (page) => {
    await dispatch(getAllReviewOnProduct(id, page, 4));
  };
  return [review, onPress];
};

export default GetReviewHook;
