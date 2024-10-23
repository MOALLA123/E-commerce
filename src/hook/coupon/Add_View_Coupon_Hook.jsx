import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../UseNotification";

import { useForm } from "react-hook-form";

import { createcoupon, getAllCoupon } from "../../redux/actions/CouponAction";

const AddViewsCouponHook = () => {
  const dispatch = useDispatch();
  const [loadingCreate, setLoadingCreate] = useState(true);
  const [loadingGet, setLoadingGet] = useState(true);

  const createdCoupon = useSelector(
    (state) => state.CouponReducer.createCoupon
  );

  const getCoupons = useSelector((state) => state.CouponReducer.coupon);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const handleAddCoupon = async () => {
    const { name, expire, discount } = getValues();
    setLoadingCreate(true);
    await dispatch(
      createcoupon({
        name,
        expire,
        discount,
      })
    );
    setLoadingCreate(false);
  };

  // for get all coupons in admin page
  useEffect(() => {
    const f = async () => {
      setLoadingGet(true);
      await dispatch(getAllCoupon());
      setLoadingGet(false);
    };
    f();
  }, []);

  useEffect(() => {
    if (loadingCreate === false) {
      if (createdCoupon.status === 201) {
        notify("تم اضافة عنوان بنجاح", "success");
        dispatch(getAllCoupon());
        reset();
      } else if (createdCoupon.status === 400) {
        notify("  هذا الاسم موجود مسبقا", "warn");

        reset();
      }
      setLoadingCreate(true);
    }
  }, [loadingCreate]);

  return [handleAddCoupon, handleSubmit, register, getCoupons];
};

export default AddViewsCouponHook;
