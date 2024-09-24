import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { verifyCode } from "../../redux/actions/AuthAction";
import notify from "../../hook/UseNotification";
import { useNavigate } from "react-router-dom";

const VerifyPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(true);
  const submit = async (e) => {
    e.preventDefault;
    setLoading(true);

    await dispatch(
      verifyCode({
        resetCode: otp,
      })
    );

    setLoading(false);
  };

  const res = useSelector((state) => state.Authreducer.verifypassword);

  useEffect(() => {
    if (loading === false) {
      if (res.status === "Success") {
        notify("الكود صحيح", "success");
        navigate("/user/reset");
      } else {
        notify("  هناك مشكلة في الخطأ ", "warn");
      }
    }
    setLoading(true);
  }, [loading]);

  return (
    <div style={{ textAlign: "center" }}>
      <Row className="py-5 d-flex " style={{ textAlign: "center" }}>
        <Col sm="12">
          <label className=" title-login mb-2">ادخل رمز التحقق </label>
          <div
            style={{ margin: "auto", justifyContent: "center" }}
            className="d-flex  "
          >
            <div dir="ltr">
              <OTPInput
                inputStyle={{
                  borderRadius: "5px",
                  width: "40px",
                  margin: "5px",
                  textAlign: "center",
                }}
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={"."}
                renderInput={(props) => <input {...props} />}
              />
            </div>
          </div>
        </Col>{" "}
      </Row>{" "}
      <button className="btn-login " onClick={submit}>
        {" "}
        ارسل رمز التحقق
      </button>
    </div>
  );
};

export default VerifyPasswordPage;
