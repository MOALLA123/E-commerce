import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../UseNotification";
import {
  getSpecificUserAddress,
  updateUserAddress,
} from "../../redux/actions/UserAction";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
const EditUserAddressHook = (id) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [loadingGet, setLoadingGet] = useState(true);
  const [PreviousdAddress, setPreviousAdddress] = useState([]);
  const address = useSelector((state) => state.UserReducer.updatedAddress);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  useEffect(() => {
    const f = async () => {
      setLoadingGet(true);
      await dispatch(getSpecificUserAddress(id));
      setLoadingGet(false);
    };
    f();
  }, []);

  const addressDet = useSelector((state) => state.UserReducer.specificAddress);
  useEffect(() => {
    if (loadingGet === false) {
      if (addressDet && addressDet.status === "success") {
        setPreviousAdddress(addressDet.data);
      }
    }
  }, [loadingGet]);

  const handleEditAddress = async () => {
    const { address, addressDetails, zip, city, phone } = getValues();
    setLoading(true);
    await dispatch(
      updateUserAddress(
        {
          alias: address,
          details: addressDetails,
          city,
          phone,
          postalCode: zip,
        },
        id
      )
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (address.status === 200) {
        notify("تم تعديل العنوان بنجاح", "success");
      }
      setLoading(true);
    }
  }, [loading]);

  console.log(addressDet);
  return [handleEditAddress, handleSubmit, register, PreviousdAddress];
};

export default EditUserAddressHook;
