import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import Pagination from "../utility/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { GetWishlist } from "../../redux/actions/WishlistAction";

const UserFavouriteProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetWishlist());
  }, []);

  const res = useSelector((state) => state.wishlistReducer.wishlist);

  return (
    <div>
      {res.length > 0 ? (
        <>
          <div className="admin-content-text pb-4">قائمة المنتجات المفضلة</div>
          <Row className="justify-content-start">
            {res.map((e) => (
              <ProductCard item={e} />
            ))}
          </Row>{" "}
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="admin-content-text pb-4 ">
            _ _ _ لا يوجد منتجات مفضلة لديك_ _ _
          </div>
        </div>
      )}
    </div>
  );
};

export default UserFavouriteProduct;
