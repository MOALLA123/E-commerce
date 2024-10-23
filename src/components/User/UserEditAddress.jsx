import React from "react";
import { Row, Col } from "react-bootstrap";
import EditUserAddressHook from "../../hook/User/Edit_User_Address_Hook";
import GetSpecificAddressHook from "../../hook/User/Get_Specific_Address_Hook";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
const UserEditAddress = () => {
  const { id } = useParams();
  const [handleEditAddress, handleSubmit, register, PreviousdAddress] =
    EditUserAddressHook(id);
  console.log(PreviousdAddress);
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2"> صفحة تعديل العنوان :</div>
        <Col sm="8">
          <input
            {...register("address", {
              value: PreviousdAddress.alias,
              required: "required",
            })}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
            defaultValue={PreviousdAddress.alias}
          />
          <textarea
            {...register("addressDetails", {
              value: PreviousdAddress.details,
              required: "required",
            })}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="العنوان بالتفصيل"
            defaultValue={PreviousdAddress.details}
          />
          <input
            {...register("phone", {
              value: PreviousdAddress.phone,
              required: "required",
            })}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
            defaultValue={PreviousdAddress.phone}
          />
          <input
            {...register("city", {
              required: "required",
              value: PreviousdAddress.city,
            })}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="المدينة "
            defaultValue={PreviousdAddress.city}
          />
          <input
            {...register("zip", {
              value: PreviousdAddress.postalCode,
              required: "required",
            })}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="كود المنطقة "
            defaultValue={PreviousdAddress.postalCode}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button
            className="btn-save d-inline mt-2 "
            onClick={handleSubmit(handleEditAddress)}
          >
            حفظ العنوان الجديد
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default UserEditAddress;
