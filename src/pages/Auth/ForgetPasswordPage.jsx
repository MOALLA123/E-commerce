import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../redux/actions/AuthAction";
import { useForm } from "react-hook-form";
import notify from "../../hook/UseNotification";

const ForgetPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const data = useSelector((state) => state.Authreducer.forget);
  const awaitt = useSelector((state) => state.Authreducer.loading);

  const submit = async () => {
    const { email } = getValues();
    localStorage.setItem("user-email", email);
    setLoading(true);

    await dispatch(forgetPassword({ email }));

    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (data.status === "Success") {
        notify("logged in", "success");
        setTimeout(() => {
          navigate("/user/verify-code");
        }, 1500);
      } else {
        notify("error", "warn");
        return;
      }
    }
  }, [loading]);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login" type="submit">
              استعادة كلمة المرور{" "}
            </label>
            <input
              {...register("email", {
                pattern: {
                  value: /\w+@\w+.com\s?/,
                  message: "Entered value does not match email format",
                },
                required: "required",
              })}
              placeholder="الايميل..."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
            <button className="btn-login mx-auto mt-4" type="submit">
              ارسل رمز التحقق
            </button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default ForgetPasswordPage;
