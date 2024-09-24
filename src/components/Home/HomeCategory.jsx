import React, { useEffect } from "react";
import { Container, PageItem, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import SubTitle from "../utility/SubTitle";
import HomeCategoryHook from "../../hook/category/Home-Category-Hook";

const HomeCategory = () => {
  const [category, loading] = HomeCategoryHook();
  return (
    <Container>
      <SubTitle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {loading ? (
          <div style={{ display: "flex" }}>
            <h4 style={{ paddingLeft: "20px" }}> الرجاء الانتظار...</h4>{" "}
            <Spinner animation="grow" />
          </div>
        ) : category ? (
          category.data.slice(0, 6).map((item, i) => {
            return (
              <CategoryCard
                key={i}
                title={item.name}
                img={item.image}
                background="#F4DBA4"
              />
            );
          })
        ) : (
          <h4>لا يوجد تصنيفات حاليا ...</h4>
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
