import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../UseNotification";
import { useForm } from "react-hook-form";
import {
  ApplyCouponOncart,
  getUserCart,
} from "../../redux/actions/UserCartAction";
const ApplyCouponOnCartHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const ApplliedCoupon = useSelector(
    (state) => state.UserCartReducer.appliedCoupon
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const handleApplyCoupon = async () => {
    const { couponName } = getValues();

    setLoading(true);
    await dispatch(
      ApplyCouponOncart({
        couponName,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (ApplliedCoupon.status === 200) {
        notify("تم تطبيق الكوبون بنجاح", "success");
        getUserCart();
      } else {
        notify("خطأ في بيانات الكوبون", "warn");
      }
      setLoading(true);
    }
  }, [loading]);

  return [handleApplyCoupon, handleSubmit, register, ApplliedCoupon];
};

export default ApplyCouponOnCartHook;
