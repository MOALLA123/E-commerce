import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
const CategoryContainer = ({ category }) => {
  return (
    <div>
      <Container>
        <div className="admin-content-text mt-2 ">كل التصنيفات</div>

        <Row className="my-2 d-flex justify-content-between">
          {category ? (
            category.data.map((item, i) => {
              return (
                <CategoryCard
                  key={i}
                  title={item.name}
                  img={item.image}
                  background="d8d3d2"
                />
              );
            })
          ) : (
            <>hhhh</>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default CategoryContainer;
