import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cartImg from "../../images/cart.png";
import { useSelector } from "react-redux";
const NavBarLogin = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    !!localStorage.getItem("user")
      ? setUser(JSON.parse(localStorage.getItem("user")))
      : logOut;
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };
  const cart = useSelector((state) => state.UserCartReducer.AlluserCart);
  console.log(cart);
  return (
    <Navbar className="sticky-top navbar" bg="none" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            {!!user ? (
              <NavDropdown title={user.name} id="basic-nav-dropdown">
                {user.role === "admin" ? (
                  <NavDropdown.Item href="/admin/allproducts">
                    لوحة التحكم
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="/user/profile">
                    الصفحة الشخصية
                  </NavDropdown.Item>
                )}

                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut} href="/">
                  تسجيل خروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
              >
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}> دخول</p>
              </Nav.Link>
            )}

            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <div className="position-relative">
                {cart.status === 404 ? null : cart.status === 401 ? (
                  <h1>Unauth</h1>
                ) : (
                  <>
                    <p
                      className="position-absolute p-.5 "
                      style={{
                        width: "10px",
                        background: "red",
                        borderRadius: "50%",
                        top: "-14px",
                      }}
                    >
                      {cart?.data?.products?.length}
                    </p>
                    <img src={cartImg} className="login-img" alt="sfvs" />
                  </>
                )}
              </div>

              <p style={{ color: "white" }}>العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
