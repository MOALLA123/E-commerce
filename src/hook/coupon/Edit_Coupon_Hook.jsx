import { UpdateCoupon } from "../../redux/actions/CouponAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../UseNotification";
import { updateUserAddress } from "../../redux/actions/UserAction";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
const EditCouponHook = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const UpdatedCoupon = useSelector(
    (state) => state.CouponReducer.updatecoupon
  );

  const dateString = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm();

  const handleEditCoupon = async () => {
    const { name, expire, discount } = getValues();
    dateString;
    setLoading(true);
    await dispatch(
      UpdateCoupon(
        {
          name,
          expire,
          discount,
        },
        id
      )
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (UpdatedCoupon.status === 201) {
        notify("تم تعديل الكوبون بنجاح", "success");
      }
      setLoading(true);
    }
  }, [loading]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return [handleEditCoupon, handleSubmit, register, formatDate];
};

export default EditCouponHook;
