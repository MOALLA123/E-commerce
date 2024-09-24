import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AdminSetting = () => {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit((e) => console.log(e.lname))}>
      <input {...register("firstname")} />
      <input {...register("lname")} />
      <button type="submit">ddd</button>
    </form>
  );
};

export default AdminSetting;
