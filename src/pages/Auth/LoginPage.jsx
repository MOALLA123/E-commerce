import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/AuthAction";
import notify from "../../hook/UseNotification";

const LoginPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const submit = async () => {
    const { email, password } = getValues();
    setLoading(true);
    await dispatch(
      login({
        email,
        password,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.Authreducer.user);

  useEffect(() => {
    if (loading === false) {
      if (res.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.data));

        reset();

        notify("logged in", "success");

        // moving to login page after register
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        !!res.data
          ? res.data.message && notify(res.data.message, "warn")
          : null;
      }
    }
  }, [loading]);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">تسجيل الدخول</label>
            <input
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\w+@gmail.com/,
                },
              })}
              placeholder="الايميل..."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />

            {errors.email && <p className="errorMsg">{errors.email.message}</p>}

            <input
              placeholder="كلمه السر..."
              type="password"
              className="user-input text-center mx-auto"
              {...register("password", {
                required: "required",
              })}
            />
            {errors.password && (
              <p className="errorMsg">{errors.password.message}</p>
            )}

            <button className="btn-login mx-auto mt-4">تسجيل الدخول</button>

            <label className="mx-auto my-4">
              ليس لديك حساب ؟{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>
            <Link
              to="/user/forget-password"
              style={{
                textDecoration: "none",
                margin: "auto",
                border: "2px solid black",
                borderRadius: "5px",
              }}
            >
              <span style={{ cursor: "pointer" }} className="text-danger m-2">
                نسيت كلمة المرور ؟
              </span>
            </Link>
          </Col>

          <label className="mx-auto my-4">
            <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                الدخول ادمن
              </span>
            </Link>

            <Link to="/user/allorders" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                الدخول مستخدم
              </span>
            </Link>
          </label>
        </Row>
      </Container>
    </form>
  );
};

export default LoginPage;
