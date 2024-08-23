import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllBrand, getAllBrandPage } from "../../redux/actions/BrandAction";

const AllBrandHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrand(2));
  }, []);

  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.brand);

  //for get numberofpage if the netwoork was a bad
  let pageCount = 0;
  if (brand.paginationResult) {
    //when get the paginationresult ,then get the number of page
    pageCount = brand.paginationResult.numberOfPages;
  }

  const getPage = (page) => {
    dispatch(getAllBrandPage(page));
  };

  return [brand, loading, pageCount, getPage];
};

export default AllBrandHook;
