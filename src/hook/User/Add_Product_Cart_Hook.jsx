import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../UseNotification";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  AddProductToCart,
  getUserCart,
} from "../../redux/actions/UserCartAction";
const AddProductCartHook = (id) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [loadingAdd, setloadingAdd] = useState(true);
  const res = useSelector((state) => state.UserCartReducer.CartProduct);
  const AllCard = useSelector((state) => state.UserCartReducer.AlluserCart);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const handleAddProductTocart = async () => {
    setLoading(true);

    await dispatch(getUserCart());

    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (AllCard?.data?.products?.some((obj) => obj.product._id === id)) {
        notify("هذا المنتج قمت باضافته الى العربة مسبقا ", "warn");
      } else {
        const { color } = getValues();
        const f = async () => {
          setloadingAdd(true);
          await dispatch(
            AddProductToCart({
              productId: id,
              color,
            })
          );

          setloadingAdd(false);
        };

        f();
      }
      setLoading(true);
    }
  }, [loading]);

  useEffect(() => {
    if (loadingAdd === false) {
      const f = async () => {
        await dispatch(getUserCart());
        console.log("hertre");
      };
      f();
      notify("تم اضافة  المنتج للعربة", "success");
    }
  }, [loadingAdd]);

  return [handleAddProductTocart, handleSubmit, register];
};

export default AddProductCartHook;
