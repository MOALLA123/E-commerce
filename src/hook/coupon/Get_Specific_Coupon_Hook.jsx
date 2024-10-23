import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificUserCoupon } from "../../redux/actions/CouponAction";

const GetSpecificCouponHook = () => {
  const [PreviousCoupon, setPreviousCoupon] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();

  const Coupon = useSelector((state) => state.CouponReducer.SpecificCoupon);

  useEffect(() => {
    const f = async () => {
      setLoading(true);
      await dispatch(getSpecificUserCoupon(id));
      setLoading(false);
    };

    f();
  }, []);

  useEffect(() => {
    if (loading === false) {
      if (Coupon.status === 200) {
        setPreviousCoupon(Coupon.data);
        console.log(PreviousCoupon, "88888888888888");
      }
    }
  }, [loading]);

  console.log(Coupon.status);

  return [PreviousCoupon];
};

export default GetSpecificCouponHook;
