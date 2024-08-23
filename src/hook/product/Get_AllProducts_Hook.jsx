import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/actions/ProductsAction";

const GetAllProductsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const allProduct = useSelector((state) => state.allproducts.allproduct);
  let items = [];
  if (allProduct?.data) {
    items = allProduct.data.slice(0, 4);
  } else {
    items = [];
  }
  return [items];
};

export default GetAllProductsHook;
