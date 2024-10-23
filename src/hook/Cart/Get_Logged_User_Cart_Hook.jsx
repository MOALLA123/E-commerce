import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserCart } from "./../../redux/actions/UserCartAction";

const GetLoggedUserCartHook = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.UserCartReducer.AlluserCart);

  useEffect(() => {
    const f = async () => {
      await dispatch(getUserCart());
    };
    f();
  }, []);

  return [cart];
};

export default GetLoggedUserCartHook;
