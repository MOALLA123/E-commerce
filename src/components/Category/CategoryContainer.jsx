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
            category.data.map((item) => {
              return (
                <CategoryCard
                  title={item.name}
                  img={item.image}
                  background="#F4DBA4"
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
