import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../UseNotification";
import {
  AddProductToWishlist,
  DeleteProductFromWishlist,
} from "../../redux/actions/WishlistAction";
import { BsNutFill } from "react-icons/bs";

/***************/
/*  AM is  abbreviation of ADD & REMOVE* */
/***************/
const AMProductWishlistHook = (id) => {
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);
  const [Fav, setFav] = useState(false);
  const [x, setX] = useState([]);

  const dispatch = useDispatch();
  const res = useSelector((state) => state.wishlistReducer.addtowishlist);
  const HomeWishlist = useSelector((state) => state.wishlistReducer.wishlist);

  const handleAdd = async () => {
    setLoading(true);
    setClick(true);

    await dispatch(AddProductToWishlist({ productId: id }));

    setLoading(false);
  };

  const handleDelete = async () => {
    setClick(false);

    await dispatch(DeleteProductFromWishlist(id));
  };

  useEffect(() => {
    HomeWishlist.some((e) => (e._id === id) === true) && setClick(true);
  }, [HomeWishlist]);

  //|| x.some((e) => e === id)
  useEffect(() => {
    click && localStorage.getItem("token") ? setFav(true) : setFav(false);
  }, [click, HomeWishlist]);

  useEffect(() => {
    if (loading === false) {
      if (res === "ErrorAxiosError: Request failed with status code 403") {
        notify("لا يمكن للأدمن اضافة تقييم", "warn");
      } else if (
        res === "ErrorAxiosError: Request failed with status code 401"
      ) {
        notify(" يجب تسجيل الدخول أولا ", "warn");
      }
      setLoading(true);
    }
  }, [loading]);

  return [handleAdd, handleDelete, Fav];
};

export default AMProductWishlistHook;
