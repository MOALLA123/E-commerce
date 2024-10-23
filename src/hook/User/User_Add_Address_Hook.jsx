import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../UseNotification";
import {
  creteUseraddAddress,
  UpdateUserData,
  UpdateUserPasword,
} from "../../redux/actions/UserAction";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UserAddAddressHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const address = useSelector((state) => state.UserReducer.createdaddress);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const handleAddAddress = async () => {
    const { address, addressDetails, zip, city, phone, reset } = getValues();
    setLoading(true);
    await dispatch(
      creteUseraddAddress({
        alias: address,
        details: addressDetails,
        city,
        phone,
        postalCode: zip,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (address.status === "success") {
        notify("تم اضافة عنوان بنجاح", "success");
        reset();
        navigate("/user/addresses");
      }
      setLoading(true);
    }
  }, [loading]);

  return [handleAddAddress, handleSubmit, register];
};

export default UserAddAddressHook;
