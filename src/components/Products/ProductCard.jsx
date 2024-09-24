import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import prod1 from "../../images/prod1.png";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import AMProductWishlistHook from "../../hook/Wishlist/AM_Product_Wishlist_Hook";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
const ProductCard = ({ item }) => {
  const [handleAdd, handleDelete, Fav] = AMProductWishlistHook(item._id);

  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <div className="imagex">
          <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
            <Card.Img
              style={{ height: "228px", width: "100%" }}
              src={item.imageCover}
            />

            <div className="content">
              <h6>عرض التفاصيل</h6>
            </div>
          </Link>
        </div>

        {Fav ? (
          <div className="d-flex justify-content-end mx-2">
            <FaHeartCircleCheck
              onClick={handleDelete}
              style={{
                cursor: "pointer",
                height: "24px",
                width: "26px",
                color: "red",
              }}
            />
          </div>
        ) : (
          <motion.div
            animate={{ rotate: [0, 1, 0, 1, 0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="d-flex justify-content-end mx-2"
          >
            <IoMdHeartEmpty
              onClick={handleAdd}
              className="text-center"
              style={{
                cursor: "pointer",
                height: "24px",
                width: "26px",
              }}
            />
          </motion.div>
        )}

        <Card.Body>
          <Card.Title>
            <div className="card-title">{item.title}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">
                  {item.ratingsAverage ? item.ratingsAverage : "لم يقيم بعد"}
                </div>
              </div>
              <div className="d-flex">
                <div className="card-price">{item.price}</div>
                <div className="card-currency mx-1">$</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
