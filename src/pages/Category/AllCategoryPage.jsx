import React, { useEffect } from "react";
import CategoryContainer from "../../components/Category/CategoryContainer";
import Pagination from "../../components/utility/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/CategoryAction";
import Spinner from "react-bootstrap/Spinner";
import AllCategoryHook from "../../hook/category/All-Category-Hook";
import Transitions from "../Animation/transation";

const AllCategoryPage = () => {
  const [category, loading, pageCount, getPage] = AllCategoryHook();

  return (
    <>
      {loading ? (
        <div
          style={{
            background: "rgb(29, 207, 22,.1)",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "670px",
          }}
        >
          <Spinner animation="grow" />
        </div>
      ) : (
        <div style={{ minHeight: "670px" }}>
          <CategoryContainer category={category} />
          {pageCount > 1 ? (
            <Pagination pageCount={pageCount} onPress={getPage} />
          ) : null}
        </div>
      )}
    </>
  );
};

export default AllCategoryPage;
