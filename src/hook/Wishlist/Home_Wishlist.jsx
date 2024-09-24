import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetWishlist } from "../../redux/actions/WishlistAction";
const Home_Wishlist = () => {
  const dispatch = useDispatch();
  const get = async () => {
    await dispatch(GetWishlist());
  };

  useEffect(() => {
    get();
  }, []);
};

export default Home_Wishlist;
