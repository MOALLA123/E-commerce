import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createNewUser } from "../../redux/actions/AuthAction";
import notify from "./../../hook/UseNotification";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  // const formData = new FormData();
  //
  // const { password, passwordConfirm, name, phone, email } = getValues();

  const submit = async () => {
    const { password, passwordConfirm, name, phone, email } = getValues();

    setLoading(true);
    await dispatch(
      createNewUser({
        name,
        email,
        password,
        passwordConfirm,
        phone,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.Authreducer.user);

  useEffect(() => {
    if (loading === false) {
      if (res.token) {
        localStorage.setItem("token", res.token);

        notify("user added successfuly", "success");

        //reset the initial value of filds
        reset();

        // moving to login page after register
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        !!res.data
          ? res.data.errors && notify(res.data.errors[0].msg, "warn")
          : null;
      }
    }
  }, [loading]);

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">تسجيل حساب جديد</label>
            <input
              {...register("name", {
                required: "required",
                // pattern: {
                //   value: /[a-z]\w+/gi,

                //   message: "Entered value does not match email format",
                // },
              })}
              placeholder="اسم المستخدم.."
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            {errors.name && <p className="errorMsg">{errors.name.message}</p>}
            <input
              placeholder="الايميل..."
              type="text"
              className="user-input my-3 text-center mx-auto"
              {...register("email", {
                pattern: {
                  value: /\w+@\w+.com\s?/,
                  message: "Entered value does not match email format",
                },
                required: "required",
              })}
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}

            <input
              placeholder="كلمه السر..."
              type="password"
              className="user-input text-center mx-auto"
              {...register("password", {
                required: "required",
                pattern: {
                  value: /(\d+|\w+){6,}/,
                  message: "must be at least 6 chrecter",
                },
              })}
            />
            {errors.password && (
              <p className="errorMsg">{errors.password.message}</p>
            )}
            <input
              placeholder=" تأكيد كلمة السر ..."
              type="password"
              className="user-input my-3 text-center mx-auto"
              {...register("passwordConfirm", {
                required: "required",
                pattern: {
                  value: /(\d+|\w+){6,}/,
                  message: "Entered value does not match email format",
                },
              })}
            />
            {errors.passwordConfirm && (
              <p className="errorMsg">{errors.passwordConfirm.message}</p>
            )}

            <input
              placeholder="رقم الموبايل ..."
              type="phone"
              className="user-input  text-center mx-auto"
              {...register("phone", {
                required: "required",
                pattern: {
                  value: /010\d{8}/,
                  message: "phone number must start with 010",
                },
              })}
            />

            {errors.phone && (
              <p className="errorMsg"> {errors.phone.message}</p>
            )}

            <button className="btn-login mx-auto mt-4" type="submit">
              تسجيل الحساب
            </button>

            <label className="mx-auto my-4">
              لديك حساب بالفعل؟
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default RegisterPage;

// formData.append("name", name);
// formData.append("password", password);
// formData.append("passwordConfirm", passwordConfirm);
// formData.append("email", email);
// formData.append("phone", phone);
// formData.append("role", "admin");

// for (let [key, value] of formData.entries()) {
//   console.log(key, value);
// }
