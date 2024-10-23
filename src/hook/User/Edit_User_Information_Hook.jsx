import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../UseNotification";
import {
  AddProductToWishlist,
  DeleteProductFromWishlist,
} from "../../redux/actions/WishlistAction";
import {
  UpdateUserData,
  UpdateUserPasword,
} from "../../redux/actions/UserAction";
import { useForm } from "react-hook-form";

const EditUserInformationHook = () => {
  //loading1 for update userPassword but loading2 for update user information
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const dispatch = useDispatch();

  const [click, setclick] = useState(false);
  const update = useSelector((state) => state.UserReducer.updated);
  const dataUpdated = useSelector((state) => state.UserReducer.updatedData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const handleUpdate = () => {
    setclick(!click);
  };

  const handleClose = () => {
    setclick(false);
  };

  const handleEditInformation = async () => {
    const { name, phone } = getValues();
    setLoading2(true);
    await dispatch(UpdateUserData({ phone, name }));
    setLoading2(false);
  };

  const handleEditPassword = async () => {
    const { currentPassword, password, passwordConfirm } = getValues();
    console.log(currentPassword, password, passwordConfirm);
    setLoading1(true);

    await dispatch(
      UpdateUserPasword({
        currentPassword,
        password,
        passwordConfirm,
      })
    );

    setclick(false);
    setLoading1(false);
  };

  useEffect(() => {
    if (loading2 === false) {
      console.log(dataUpdated.status);
      if (dataUpdated.status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify(dataUpdated.data?.data.user)
        );
        notify("تم تعديل البيانات بنجاح", "success");
      } else if (dataUpdated.status === 400) {
        notify("هناك خطأ ", "warn");
      }
      setLoading2(true);
    }
  }, [loading2]);

  useEffect(() => {
    if (loading1 === false) {
      if (update.status === 200) {
        localStorage.setItem("token", update?.data.token);
        reset();
        notify("تم التعديل بنجاح ", "success");
      } else if (update.status === 400) {
        notify("يوجد مشكلة في الادخال", "warn");
      } else if (
        update === "ErrorAxiosError: Request failed with status code 401"
      ) {
        notify(" يجب تسجيل الدخول أولا ", "warn");
      } else if (
        update === "ErrorAxiosError: Request failed with status code 400"
      ) {
        notify("  قمت باضافة تعليق مسبقا ", "warn");
      }
      setLoading1(true);
    }
  }, [loading1]);

  return [
    handleEditPassword,
    click,
    handleClose,
    handleSubmit,
    register,
    errors,
    handleUpdate,
    handleEditInformation,
  ];
};

export default EditUserInformationHook;
