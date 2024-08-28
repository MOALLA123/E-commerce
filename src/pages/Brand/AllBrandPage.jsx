import React from "react";

import Pagination from "../../components/utility/Pagination";
import BrandContainer from "../../components/Brand/BrandContainer";
import AllBrandHook from "../../hook/brand/All_Brand_Hook";
import Transitions from "../../transation";
const AllBrand = () => {
  const [brand, loading, pageCount, getPage] = AllBrandHook();
  return (
    <>
      <div style={{ minHeight: "670px" }}>
        <BrandContainer brand={brand} loading={loading} />
        <Pagination pageCount={pageCount} onPress={getPage} />
      </div>
    </>
  );
};

export default AllBrand;
