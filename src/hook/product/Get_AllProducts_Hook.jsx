import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/actions/ProductsAction";
import { GetWishlist } from "../../redux/actions/WishlistAction";
import { getUserCart } from "../../redux/actions/UserCartAction";

const GetAllProductsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getUserCart());
  }, []);

  const allProduct = useSelector((state) => state.allproducts.allproduct);
  const loading = useSelector((state) => state.allproducts.loading);
  let items = [];
  if (allProduct?.data) {
    items = allProduct.data.slice(0, 4);
  } else {
    items = [];
  }
  return [items, loading];
};

export default GetAllProductsHook;
