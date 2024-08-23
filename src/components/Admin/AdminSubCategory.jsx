import React from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddSubcategoryHook from "../../hook/subcategory/Add_Subcategory_Hook";

const AdminAddSubCategory = () => {
  const [
    id,
    name,
    loading,
    category,
    subcategory,
    handleChange,
    handleSubmit,
    onNameChange,
  ] = AddSubcategoryHook();

  /**/
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            value={name}
            onChange={onNameChange}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
          />
          <select
            name="languages"
            id="lang"
            className="select mt-3 px-2 "
            onChange={handleChange}
          >
            <option value="0">اختر تصنيف</option>
            {category.data
              ? category.data.map((e) => {
                  return (
                    <option key={e._id} value={e._id}>
                      {e.name}{" "}
                    </option>
                  );
                })
              : null}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSubmit}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>
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

export default AdminAddSubCategory;
