import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";
import SubCategoryReducer from "./SubCategoryReducer";
import productReducer from "./ProductReducer";
import AuthReducer from "./AuthReducer";
import reviewReducer from "./ReviewReducer";
import wishlistReducer from "./WishlistReducer";
import UserReducer from "./UserReducer";
import CouponReducer from "./CouponReducer";
import UserCartReducer from "./UserCartReducer";
import OrderReducer from "./OrderReducer";

export default combineReducers({
  allCategory: CategoryReducer,
  allBrand: BrandReducer,
  subCategory: SubCategoryReducer,
  subCategoryx: SubCategoryReducer,
  allproducts: productReducer,
  Authreducer: AuthReducer,
  reviewReducer: reviewReducer,
  wishlistReducer: wishlistReducer,
  UserReducer: UserReducer,
  CouponReducer: CouponReducer,
  UserCartReducer: UserCartReducer,
  OrderReducer: OrderReducer,
});
