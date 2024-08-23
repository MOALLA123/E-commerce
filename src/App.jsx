import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Footer from "./components/utility/Footer";
import NavBarLogin from "./components/utility/NavBarLogin";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AllCategoryPage from "./pages/Category/AllCategoryPage";
import AllBrandpage from "./pages/Brand/AllBrandPage";
import ShopProductsPage from "./pages/Product/ShopProductsPage";
import ProductDetailsPage from "./pages/Product/ProductDetailsPage";
import CartPage from "./pages/Cart/CartPage";
import ChoosePayMethodPage from "./pages/Checkout/ChoosePayMethodPage";
import AdminAllProductPage from "./pages/Admin/AdminAllProductPage";
import AdminAllOrdersPage from "./pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./pages/Admin/AdminAddProductPage";
import UserAllOrdersPage from "./pages/User/UserAllOrdersPage";
import UserFavouriteProductsPage from "./pages/User/UserFavouriteProductsPage";
import UserAllAddresPage from "./pages/User/UserAllAddresPage";
import UserAddAddressPage from "./pages/User/UserAddAddressPage";
import UserEditAddressPage from "./pages/User/UserEditAddressPage";
import UserProfilePage from "./pages/User/UserProfilePage";
import AdminSetting from "./pages/Admin/AdminSetting";

const App = () => {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandpage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethodPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/23/" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route
            path="/admin/addsubcategory"
            element={<AdminAddSubCategoryPage />}
          />
          <Route path="/admin/setting" element={<AdminSetting />} />
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />

          <Route
            path="/user/favoriteproducts"
            element={<UserFavouriteProductsPage />}
          />

          <Route path="/user/addresses" element={<UserAllAddresPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
