import React from "react";
import { Row, Col, Alert } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import avatar from "../../images/avatar.png";
import add from "../../images/add.png";

import { CompactPicker } from "react-color";

import { ToastContainer } from "react-toastify";
import AddProductHook from "../../hook/product/Add_Product_Hook";

const AdminAddProducts = () => {
  const [
    removeImage,
    handleTheColorListClicked,
    onchangeProdname,
    onchangeDescription,
    onchangepricebefor,
    onchangePriceAfter,
    onchangeQty,
    onchangebrand,
    onchangecategory,
    category,
    brand,
    options,
    click,
    loading,
    imageaForSend,
    images,
    colors,
    ShowColor,
    ProdName,
    ProdDescription,
    PriceBefor,
    PriceAfter,
    Qty,
    CatId,
    BrandId,
    SubCatId,
    SelectedSubId,
    handleChangeComplete,
    removecolor,
    onselectCategory,
    onselectBrand,
    handleImagInput,
    onSelect,
    onRemove,
    handleSubmit,
  ] = AddProductHook();

  // const setcolor = (e) => {
  //   document.documentElement.style.setProperty("--color-logo", e);
  // };
  return (
    <div>
      {/* <button
        onClick={() => {
          setcolor("red");
        }}
      >
        red
      </button>
      <button
        onClick={() => {
          setcolor("blue");
        }}
      >
      //   blue */}
      {/* // </button> */}
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
        <Col sm="8">
          {4 - images.length > 0 ? (
            <div className="text-form mt-3 ">
              أضف صور للمنتج ,يمكنك اضافة {4 - images.length} صورة كحد أقصى
            </div>
          ) : null}

          <div className="text-form pb-2">
            {images.length >= 4 ? null : (
              <label for="upload-photo">
                <img
                  src={avatar}
                  alt="nothing"
                  height="50px"
                  width="50px"
                  style={{ cursor: "pointer" }}
                />
              </label>
            )}
            <input
              multiple
              id="upload-photo"
              type="file"
              onChange={handleImagInput}
            />
          </div>
          {images &&
            images.map((e) => {
              return (
                <img
                  onClick={() => removeImage(e)}
                  src={e}
                  alt="nothing"
                  height="100px"
                  width="120px"
                  style={{ cursor: "pointer" }}
                />
              );
            })}

          {images.length > 0 && (
            <div className="text-form mt-3 ">لحذف الصورة قم بالضغط عليها</div>
          )}
          {click && images.length === 0 && (
            <Alert variant={"danger"}>ادخل صور للمنتج</Alert>
          )}

          <input
            value={ProdName}
            onChange={onchangeProdname}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
          />

          {click && ProdName === "" && (
            <Alert key={"danger"} variant={"danger"}>
              ادخل اسم المنتج
            </Alert>
          )}

          <textarea
            value={ProdDescription}
            onChange={onchangeDescription}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
          />
          {click && ProdDescription === "" && (
            <Alert variant={"danger"}>ادخل وصف للمنتج</Alert>
          )}
          <input
            value={PriceBefor}
            onChange={onchangepricebefor}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
          />
          {click && PriceBefor <= 0 && (
            <Alert variant={"danger"}>ادخل سعر للمنتج قبل الخصم</Alert>
          )}
          <input
            value={PriceAfter}
            onChange={onchangePriceAfter}
            type="number"
            placeholder="السعر بعد الخصم"
            className="input-form d-block mt-3 px-3"
          />
          {click && PriceAfter <= 0 && (
            <Alert variant={"danger"}>ادخل سعر للمنتج بعد الخصم</Alert>
          )}
          <input
            value={Qty === 0 ? "الكمية المتاحة" : Qty}
            onChange={onchangeQty}
            type="number"
            placeholder=" الكمية المتاحة"
            className="input-form d-block mt-3 px-3"
          />
          {click && Qty === 0 && (
            <Alert variant={"danger"}>ادخل الكمية المتاحة</Alert>
          )}
          <select
            onChange={onselectCategory}
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">التصنيف الرئيسي</option>
            {category.data &&
              category.data.map((e, index) => {
                return (
                  <option key={index} value={e._id}>
                    {e.name}
                  </option>
                );
              })}
          </select>
          {click && CatId === "" && (
            <Alert variant={"danger"}>اختر تصنيف رئيسي</Alert>
          )}

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          {click && SelectedSubId.length === 0 && (
            <Alert variant={"danger"}>اخنر تصنيف فرعي</Alert>
          )}
          <select
            onChange={onselectBrand}
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">الماركة</option>
            {brand.data &&
              brand.data.map((e, index) => {
                return (
                  <option key={index} value={e._id}>
                    {e.name}
                  </option>
                );
              })}
          </select>

          {click && BrandId === "" && (
            <Alert variant={"danger"}>اختر ماركة</Alert>
          )}

          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            <img
              onClick={handleTheColorListClicked}
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
            />

            {colors.length >= 1
              ? colors.map((e) => {
                  return (
                    <div
                      onClick={() => removecolor(e)}
                      className="color ms-2 border mt-1"
                      style={{ backgroundColor: e }}
                    ></div>
                  );
                })
              : null}

            {ShowColor ? (
              <CompactPicker onChangeComplete={handleChangeComplete} />
            ) : null}
          </div>
          {colors.length >= 1 && (
            <div className="text-form mt-3 "> لحذف اللون , قم بالضغط عليه</div>
          )}
          {click && colors.length === 0 && (
            <Alert variant={"danger"}>اختر لون للمنتج</Alert>
          )}
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
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

export default AdminAddProducts;
