import React, { useState } from "react";
import { Col, Card, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  DeleteProduct,
  getAllProduct,
} from "../../redux/actions/ProductsAction";

const AdminAllProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    Swal.fire({
      title: "هل انت متأكد?",
      text: "لا يمكن التراجع!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "نعم,قم بالحذف",
      cancelButtonText: "الغاء",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(DeleteProduct(product._id));
        Swal.fire({
          title: "تم الحذف",

          icon: "success",
        });
      }
    });

    //dispatch(getAllProduct());
  };

  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div
              onClick={() => {
                handleDelete();
              }}
              className="d-inline item-delete-edit"
            >
              ازاله
            </div>
            <Link to={`/admin/products/${product._id}`}>
              <div className="d-inline item-delete-edit">تعديل</div>
            </Link>
          </Col>
        </Row>
        <Link to="/products/:id" style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={product.imageCover}
          />
          <Card.Body>
            <Card.Title>
              <div className="card-title">{product.title}</div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">4.5</div>
                <div className="d-flex">
                  <div className="card-currency mx-1">جنيه</div>
                  <div className="card-price">{product.price}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard;
