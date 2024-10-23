import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../UseNotification";
import {
  getSpecificUserAddress,
  updateUserAddress,
} from "../../redux/actions/UserAction";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  getUserCart,
  updateCartQuantity,
} from "../../redux/actions/UserCartAction";
const UpdateCartProductCountHook = (id, count) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const productQuantity = useSelector(
    (state) => state.UserCartReducer.updatedQuantity
  );

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ defaultValues: { count: count } });

  const handleEditproductQuantity = async () => {
    const { count } = getValues();
    setLoading(true);
    await dispatch(
      updateCartQuantity(
        {
          count,
        },
        id
      )
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      console.log(productQuantity, "*************");
      if (productQuantity.status === 200) {
        dispatch(getUserCart());
        notify("تم تعديل الكمية بنجاح", "success");
      }
      setLoading(true);
    }
  }, [loading]);
  return [handleEditproductQuantity, handleSubmit, register, watch];
};

export default UpdateCartProductCountHook;
