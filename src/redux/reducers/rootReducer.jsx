import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";
import SubCategoryReducer from "./SubCategoryReducer";
import productReducer from "./ProductReducer";

export default combineReducers({
  allCategory: CategoryReducer,
  allBrand: BrandReducer,
  subCategory: SubCategoryReducer,
  subCategoryx: SubCategoryReducer,
  allproducts: productReducer,
});
