import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/CategoryAction";

const AllCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory(2));
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  //for get numberofpage if the netwoork was a bad
  let pageCount = 0;
  if (category.paginationResult) {
    //when get the paginationresult ,then get the number of page
    pageCount = category.paginationResult.numberOfPages;
  }

  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
    console.log(page);
  };

  return [category, loading, pageCount, getPage];
};

export default AllCategoryHook;
