import React, { useState } from "react";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../redux/actions/AuthAction";
import notify from "../../hook/UseNotification";

const ResetPasswordPage = () => {
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

  const res = useSelector((state) => state.Authreducer.resetPassword);

  const submit = async () => {
    const { password, Confirmpassword } = getValues();
    if (password === Confirmpassword) {
      await dispatch(
        resetPassword({
          email: localStorage.getItem("user-email"),
          newPassword: password,
        })
      );

      if (res.token) {
        notify("تم التعديل بنجاح", "success");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } else {
      notify("كلمات المرور غير متطابقة", "warn");
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0.5, x: 0 }}
        whileInView={{ opacity: 1, x: -40 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit(submit)}>
          <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 d-flex justify-content-center ">
              <Col sm="12" className="d-flex flex-column ">
                <label className="mx-auto title-login">
                  {" "}
                  تعيين كلمة مرور جديدة
                </label>
                <input
                  {...register("password", {
                    required: "required",
                  })}
                  placeholder="كلمة المرور الجديدة..."
                  type="text"
                  className="user-input my-3 text-center mx-auto"
                />

                {errors.email && (
                  <p className="errorMsg">{errors.password.message}</p>
                )}

                <input
                  placeholder=" تأكيد كلمة المرور..."
                  type="password"
                  className="user-input text-center mx-auto"
                  {...register("Confirmpassword", {
                    required: "required",
                  })}
                />
                {errors.Confirmpassword && (
                  <p className="errorMsg">{errors.Confirmpassword.message}</p>
                )}

                <button className="btn-login mx-auto mt-4">
                  حفظ التعديلات
                </button>
              </Col>
            </Row>
          </Container>
        </form>
      </motion.div>
    </div>
  );
};

export default ResetPasswordPage;
