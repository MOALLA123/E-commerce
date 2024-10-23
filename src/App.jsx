import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes, useLocation } from "react-router-dom";
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
import AdminUpdateProductpage from "./pages/Admin/AdminUpdateProductpage";
import { AnimatePresence } from "framer-motion";
import Transitions from "./pages/Animation/transation";
import ScrollAnimation from "./pages/Animation/ScrollAnimation";

import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./pages/Auth/VerifyPasswordPage";
import UserProfile from "./components/User/UserProfile";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
import { ToastContainer } from "react-toastify";
import AdminAddCouponPage from "./pages/Admin/AdminAddCouponPage";
import AdminEditCouponPage from "./pages/Admin/AdminEditCouponPage";

const App = () => {
  const location = useLocation();

  return (
    <div className="font">
      <NavBarLogin />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route>
            <Route
              index
              element={
                <Transitions>
                  <HomePage />
                </Transitions>
              }
            />
            <Route
              path="/login"
              element={
                <Transitions>
                  <LoginPage />
                </Transitions>
              }
            />
            <Route
              path="/register"
              element={
                <Transitions>
                  <RegisterPage />
                </Transitions>
              }
            />
            <Route
              path="/allcategory"
              element={
                <Transitions>
                  <AllCategoryPage />
                </Transitions>
              }
            />
            <Route
              path="/allbrand"
              element={
                <Transitions>
                  <AllBrandpage />
                </Transitions>
              }
            />
            <Route
              path="/products"
              element={
                <Transitions>
                  <ShopProductsPage />
                </Transitions>
              }
            />
            <Route
              path="/products/:id"
              element={
                <Transitions>
                  <ProductDetailsPage />
                </Transitions>
              }
            />
            <Route
              path="/admin/products/:id"
              element={
                <Transitions>
                  <AdminUpdateProductpage />
                </Transitions>
              }
            />
            <Route
              path="/cart"
              element={
                <Transitions>
                  <CartPage />
                </Transitions>
              }
            />
            <Route
              path="/order/paymethoud"
              element={
                <Transitions>
                  <ChoosePayMethodPage />
                </Transitions>
              }
            />
            <Route
              path="/admin/allproducts"
              element={
                <Transitions>
                  <AdminAllProductPage />
                </Transitions>
              }
            />
            <Route
              path="/admin/allorders"
              element={
                <Transitions>
                  <AdminAllOrdersPage />
                </Transitions>
              }
            />
            <Route
              path="/admin/orders/23/"
              element={
                <Transitions>
                  <AdminOrderDetailsPage />
                </Transitions>
              }
            />
            <Route
              path="/admin/addbrand"
              element={
                <Transitions>
                  <AdminAddBrandPage />
                </Transitions>
              }
            />
            <Route
              path="/admin/addcategory"
              element={
                <Transitions>
                  <AdminAddCategoryPage />
                </Transitions>
              }
            />
            <Route
              path="/admin/addsubcategory"
              element={
                <Transitions>
                  <AdminAddSubCategoryPage />
                </Transitions>
              }
            />
            <Route
              path="/admin/Coupon"
              element={
                <Transitions>
                  <AdminAddCouponPage />
                </Transitions>
              }
            />
            {/* 
/admin/edit-Coupon/ */}

            <Route
              path="admin/edit-Coupon/:id"
              element={
                <Transitions>
                  <AdminEditCouponPage />
                </Transitions>
              }
            />
            <Route
              path="/admin/addproduct"
              element={
                <Transitions>
                  <AdminAddProductPage />
                </Transitions>
              }
            />
            <Route
              path="/user/allorders"
              element={
                <Transitions>
                  <UserAllOrdersPage />
                </Transitions>
              }
            />
            <Route
              path="/user/favoriteproducts"
              element={
                <Transitions>
                  <UserFavouriteProductsPage />
                </Transitions>
              }
            />
            <Route
              path="/user/addresses"
              element={
                <Transitions>
                  <UserAllAddresPage />
                </Transitions>
              }
            />
            <Route
              path="/user/add-address"
              element={
                <Transitions>
                  <UserAddAddressPage />
                </Transitions>
              }
            />
            <Route
              path="/user/edit-address/:id"
              element={
                <Transitions>
                  <UserEditAddressPage />
                </Transitions>
              }
            />

            <Route
              path="/user/forget-password"
              element={
                <Transitions>
                  <ForgetPasswordPage />
                </Transitions>
              }
            />

            <Route
              path="/user/profile"
              element={
                <Transitions>
                  <UserProfilePage />
                </Transitions>
              }
            />
            <Route
              path="/user/forget-password"
              element={
                <Transitions>
                  <ForgetPasswordPage />
                </Transitions>
              }
            />

            <Route
              path="/user/forget-password"
              element={
                <Transitions>
                  <ForgetPasswordPage />
                </Transitions>
              }
            />

            <Route
              path="/user/reset"
              element={
                <Transitions>
                  <ResetPasswordPage />
                </Transitions>
              }
            />

            <Route
              path="/user/verify-code"
              element={
                <Transitions>
                  <VerifyPasswordPage />
                </Transitions>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
      <Footer />

      <ToastContainer
        autoClose={1000}
        position="top-right"
        hideProgressBar={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
};

export default App;
