import React, { useEffect, useState } from "react";
import { DeleteAddress, getUserAddress } from "../../redux/actions/UserAction";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import notify from "../../hook/UseNotification";
import { DeleteCoupon, getAllCoupon } from "../../redux/actions/CouponAction";

const DeleteCouponHook = (id) => {
  const [loading, setLoadig] = useState(true);

  const dispatch = useDispatch();
  const handleDeleteCoupon = () => {
    Swal.fire({
      title: "هل انت متأكد?",
      text: "لا يمكن التراجع!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "نعم,قم بالحذف",
      cancelButtonText: "الغاء",
    }).then((result) => {
      if (result.isConfirmed) {
        const f = async () => {
          setLoadig(true);
          await dispatch(DeleteCoupon(id));
          setLoadig(false);
        };
        f();
      }
    });
  };

  useEffect(() => {
    if (loading === false) {
      dispatch(getAllCoupon());
      notify("تم الحذف بنجاح", "success");

      setLoadig(true);
    }
  }, [loading]);
  return [handleDeleteCoupon];
};

export default DeleteCouponHook;
