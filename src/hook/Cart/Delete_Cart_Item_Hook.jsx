import React, { useEffect, useState } from "react";
import { DeleteAddress, getUserAddress } from "../../redux/actions/UserAction";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import notify from "../../hook/UseNotification";
import {
  DeleteItemFromCart,
  getUserCart,
} from "../../redux/actions/UserCartAction";

const DeleteCartItemHook = (id) => {
  const [loading, setLoadig] = useState(true);

  const dispatch = useDispatch();
  const handleDeleteItemFromCart = () => {
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
          await dispatch(DeleteItemFromCart(id));
          setLoadig(false);
        };
        f();
      }
    });
  };

  useEffect(() => {
    if (loading === false) {
      dispatch(getUserCart());
      notify("تم الحذف بنجاح", "success");

      setLoadig(true);
    }
  }, [loading]);
  return [handleDeleteItemFromCart];
};

export default DeleteCartItemHook;
