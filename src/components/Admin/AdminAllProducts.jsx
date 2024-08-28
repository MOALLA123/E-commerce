import React from "react";
import AdminAllProductsCard from "./AdminAllProductsCard";
import { Col, Row } from "react-bootstrap";

const AdminAllProducts = ({ products }) => {
  return (
    <div>
      <div className="admin-content-text">ادارة جميع المنتجات</div>
      <Row className="justify-content-start">
        {!!products
          ? products.map((e, idx) => {
              return <AdminAllProductsCard key={idx} product={e} />;
            })
          : null}
      </Row>
    </div>
  );
};

export default AdminAllProducts;
