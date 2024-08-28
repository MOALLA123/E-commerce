import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "./../../redux/actions/CategoryAction";
import { getAllBrand } from "./../../redux/actions/BrandAction";
import AllBrand from "./../../pages/Brand/AllBrandPage";
import { GetOneCategory } from "../../redux/actions/SubCategoryAction";
import { createProduct } from "./../../redux/actions/ProductsAction";
import notify from "../../hook/UseNotification";
const AddProductHook = () => {
  const [imageaForSend, setImageForSend] = useState([]);
  const [catname, setcatname] = useState();
  const [images, setImages] = useState([]);
  //to store all pick color
  const [colors, setColors] = useState([]);
  //to show hide color picker
  const [ShowColor, setShowColor] = useState(false);
  const handleTheColorListClicked = () => {
    setShowColor(!ShowColor);
  };

  const [ProdName, setProdName] = useState("");
  const onchangeProdname = (e) => {
    setProdName(e.target.value);
  };

  const [ProdDescription, setProdDescription] = useState("");
  const onchangeDescription = (e) => {
    setProdDescription(e.target.value);
  };
  const [PriceBefor, setPriceBefor] = useState(0);
  const onchangepricebefor = (e) => {
    setPriceBefor(e.target.value);
  };

  const [PriceAfter, setPriceAfter] = useState(0);
  const onchangePriceAfter = (e) => {
    setPriceAfter(e.target.value);
  };

  const [Qty, setQty] = useState(0);
  const onchangeQty = (e) => {
    setQty(e.target.value);
  };

  const [CatId, setCatId] = useState("");
  const onchangecategory = (e) => {
    setCatId(e.target.value);
  };

  const [BrandId, setBrandId] = useState("");
  const onchangebrand = (e) => {
    setBrandId(e.target.value);
  };

  const [SubCatId, setSubCatId] = useState([]);

  const [SelectedSubId, setSelectedSubId] = useState([]);

  const [options, setOptions] = useState([]);

  const [click, setClicked] = useState(false);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    // const color = getComputedStyle(document.documentElement).getPropertyValue(
    //   "--color-logo"
    // );

    // console.log(color, "xxxxxxxxxxxxxxxxxxxxxxxx");

    dispatch(getAllCategory());

    dispatch(getAllBrand());
  }, []);

  //subcat is the subcategory that is following of the selected category
  const subcat = useSelector((state) => state.subCategoryx.subCategoryx);
  const category = useSelector((state) => state.allCategory.category);
  const brand = useSelector((state) => state.allBrand.brand);
  const product = useSelector((state) => state.allproducts.allproduct);

  //when choose a new color
  const handleChangeComplete = (color) => {
    if (colors.includes(color.hex)) {
      setShowColor(!ShowColor);
      notify("هذا اللون موجود مسبقا", "warn");
      return;
    } else {
      setColors([...colors, color.hex]); //hex mean #555xxx...
    }

    setShowColor(!ShowColor);
  };

  const removecolor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  const removeImage = (img) => {
    const newimage = images.filter((e) => e !== img);
    setImages(newimage);
  };

  //to store category id
  const onselectCategory = async (e) => {
    e.target.value != 0 && (await dispatch(GetOneCategory(e.target.value)));
    setCatId(e.target.value);
  };

  useEffect(() => {
    if (CatId != 0) {
      subcat && setOptions(subcat.data);
    }
  }, [CatId]);

  //to store brand id
  const onselectBrand = (e) => {
    setBrandId(e.target.value);
  };

  const handleImagInput = (e) => {
    if (images.includes(e)) {
      notify(" قمت باضافة هذه الصورة", "warn");
      return;
    } else {
      setImages([...images, URL.createObjectURL(e.target.files[0])]);

      setImageForSend([...imageaForSend, ...e.target.files]);
    }
  };

  const onSelect = (selectedlist) => {
    setSelectedSubId(selectedlist);
  };

  const onRemove = (selectedlist) => {
    setSelectedSubId(selectedlist);
  };

  //to save data
  const handleSubmit = async (e) => {
    setClicked(true);
    e.preventDefault();

    //validation
    if (
      ProdName === "" ||
      ProdDescription === "" ||
      Qty === "" ||
      images.length <= 0 ||
      PriceBefor <= 0 ||
      BrandId === "" ||
      SelectedSubId === "" ||
      CatId === ""
    ) {
      notify("خطأ في الادخال", "warn");
      return;
    }

    // if (PriceAfter >= PriceBefor) {
    //   notify("ادخل سعر مناسب", "warn");
    //   return;
    // }

    const formData = new FormData();

    SelectedSubId.map((sub) => formData.append("subcategory", sub._id));
    colors.map((color) => formData.append("availableColors", color));
    for (const img of imageaForSend) {
      formData.append("images", img);
    }

    formData.append("title", ProdName);
    formData.append("imageCover", imageaForSend[0]);
    formData.append("description", ProdDescription);
    formData.append("quantity", Qty);
    formData.append("price", PriceBefor);
    formData.append("brand", BrandId);
    formData.append("category", CatId);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    setLoading(true);
    await dispatch(createProduct(formData));

    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setImages([]), setBrandId(0);
      setCatId("");
      setClicked(false);
      setColors([]);
      setPriceAfter(0);
      setPriceBefor(0);
      setProdDescription("");
      setProdName("");
      setSelectedSubId([]);
      setQty(0);

      if (product.status === 201) {
        notify("تمت الاضافة بنجاح", "success");
      } else {
        notify("هناك مشكة في الادخال", "warn");
      }
      console.log(product, "ggggggggggggggggggggg");

      setTimeout(() => setLoading(true), 1500);
    }
  }, [loading]);

  return [
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
  ];
};

export default AddProductHook;
