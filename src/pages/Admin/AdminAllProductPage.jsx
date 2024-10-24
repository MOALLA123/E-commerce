import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminAllProducts from "../../components/Admin/AdminAllProducts";
import Pagination from "./../../components/utility/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/actions/ProductsAction";
import Transitions from "../Animation/transation";
const AdminAllProductPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const allProduct = useSelector((state) => state.allproducts.allproduct);
  if (allProduct) {
    return (
      <>
        <Container>
          <Row className="py-3">
            <Col sm="3" xs="2" md="2">
              <AdminSideBar />
            </Col>
            <Col sm="9" xs="10" md="10">
              <AdminAllProducts products={allProduct.data} />
              <Pagination />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default AdminAllProductPage;
