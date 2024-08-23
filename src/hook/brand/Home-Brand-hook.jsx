import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actions/BrandAction";

const HomeBrandhook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand());
  }, []);
  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);
  return [brand, loading];
};

export default HomeBrandhook;
