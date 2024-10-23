import React, { useEffect, useState } from "react";
import { DeleteAddress, getUserAddress } from "../../redux/actions/UserAction";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import notify from "../../hook/UseNotification";

const DeleteUserAddressHook = (id) => {
  const [loading, setLoadig] = useState(true);

  const dispatch = useDispatch();
  const handleDeleteAddress = () => {
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
          await dispatch(DeleteAddress(id));
          setLoadig(false);
        };
        f();
      }
    });
  };

  useEffect(() => {
    if (loading === false) {
      dispatch(getUserAddress());
      notify("تم الحذف بنجاح", "success");

      setLoadig(true);
    }
  }, [loading]);
  return [handleDeleteAddress];
};

export default DeleteUserAddressHook;
