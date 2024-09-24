import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetProductDetails } from "../../redux/actions/ProductsAction";

const ProductDetailsHook = () => {
  //details of product
  const { id } = useParams();
  const dispatch = useDispatch();
  const res = useSelector((state) => state.allproducts.productDetails);

  useEffect(() => {
    dispatch(GetProductDetails(id));
  }, [id]);

  return [res];
};

export default ProductDetailsHook;
