import React, { useEffect } from "react";
import CategoryHeader from "../../components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../components/Products/ProductDetails";
import RateContainer from "../../components/Rate/RateContainer";
import CardProductContainer from "./../../components/Products/CardProductContainer";
import { useDispatch, useSelector } from "react-redux";
import { GetProductDetails } from "../../redux/actions/ProductsAction";
import { useParams } from "react-router-dom";
import Transitions from "../../transation";

const ProductDetailsPage = () => {
  const { id } = useParams();
  console.log(id, "hhhhhhhhhhhhhhhhh");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProductDetails(id));
  }, [id]);

  const res = useSelector((state) => state.allproducts.productDetails);
  if (res) {
    return (
      <>
        <div style={{ minHeight: "670px" }}>
          <CategoryHeader />
          <Container>
            <ProductDetails productdetails={res.data} />
            <RateContainer />
            <CardProductContainer title="منتجات قد تعجبك" />
          </Container>
        </div>{" "}
      </>
    );
  }
};

export default ProductDetailsPage;
