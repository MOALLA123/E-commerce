import { useDispatch, useSelector } from "react-redux";
import { createorder } from "../../redux/actions/OrderAcrtion";
import { getUserCart } from "../../redux/actions/UserCartAction";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import notify from "../UseNotification";
const UserCreateOrderHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const f = async () => {
      getUserCart();
    };

    f();
  }, []);

  const cart = useSelector((state) => state.UserCartReducer.AlluserCart);

  const handleCreateOrder = async () => {
    setLoading(true);
    await dispatch(createorder(cart?.data?._id));
    console.log(res);
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res.status === 201) {
        notify("تم إنشاء طلبك بنجاح");
        setTimeout(() => {
          navigate("/user/allorders");
        }, 1000);
      }
    }
  }, [loading]);

  return [handleCreateOrder];
};

export default UserCreateOrderHook;
