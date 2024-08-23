import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/CategoryAction";
import notify from "../../hook/UseNotification";
import { createSubCategory } from "../../redux/actions/SubCategoryAction";

const AddSubcategoryHook = () => {
  const [loading, setLoading] = useState(true);
  const [id, sestId] = useState("0");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const onNameChange = (event) => {
    event.target.value && setName(event.target.value);
  };

  const subcategory = useSelector((state) => state.subCategory.subCategory);

  const category = useSelector((state) => state.allCategory.category);

  const handleChange = (e) => {
    console.log(e.target.value);
    sestId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      notify("لا يوجد اتصال بالانترنت", "warn");
      return;
    }
    if (id === "0") {
      notify("اختر تصنيف رئيسي", "warn");
      return;
    }

    if (name === "") {
      notify("ادخل اسم التصنيف الفرعي", "warn");
      return;
    }

    setLoading(true);
    await dispatch(
      createSubCategory({
        name: name, //we able to write (name) only, because (name <=> name:name)
        category: id,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      sestId("0");
      if (subcategory) {
        console.log(subcategory, "kokokokokok");
      }

      if (
        subcategory === "ErrorAxiosError: Request failed with status code 400"
      ) {
        notify("تمت الاضافة مسبقا", "warn");
        return;
      } else {
        notify("تمت الاضافة بنجاح", "success");
      }
    }
    dispatch(getAllCategory());
  }, [loading]);

  return [
    id,
    name,
    loading,
    category,
    subcategory,
    handleChange,
    handleSubmit,
    onNameChange,
  ];
};

export default AddSubcategoryHook;
