import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserAddress } from "../../redux/actions/UserAction";

const GetUserAddressHook = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.UserReducer.address);
  console.log(address?.length, "11111111");
  useEffect(() => {
    const f = async () => {
      await dispatch(getUserAddress());
    };
    f();
  }, [address.length]);

  return [address];
};

export default GetUserAddressHook;
