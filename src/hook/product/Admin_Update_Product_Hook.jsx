import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getSpecifiCategory,
} from "./../../redux/actions/CategoryAction";
import { getAllBrand } from "./../../redux/actions/BrandAction";
import AllBrand from "./../../pages/Brand/AllBrandPage";
import { GetOneCategory } from "../../redux/actions/SubCategoryAction";
import {
  createProduct,
  GetProductDetails,
  updateProduct,
} from "./../../redux/actions/ProductsAction";
import notify from "../../hook/UseNotification";
import { useParams } from "react-router-dom";
const updateProductHook = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.allproducts.productDetails);

  //subcat is the subcategory that is following of the selected category
  const subcat = useSelector((state) => state.subCategoryx.subCategoryx);

  const category = useSelector((state) => state.allCategory.category);

  const brand = useSelector((state) => state.allBrand.brand);

  const categoryname = useSelector(
    (state) => state.allCategory.specificCategory.data
  );

  // useState
  const [ProdName, setProdName] = useState("");
  const [imageaForSend, setImageForSend] = useState([]);
  const [images, setImages] = useState([]);
  const [colors, setColors] = useState([]);
  const [ShowColor, setShowColor] = useState(false);
  const [ProdDescription, setProdDescription] = useState("");
  const [PriceBefor, setPriceBefor] = useState(1000000);
  const [PriceAfter, setPriceAfter] = useState(0);
  const [Qty, setQty] = useState(0);
  const [CatId, setCatId] = useState("");
  const [BrandId, setBrandId] = useState("");
  const [SubCatId, setSubCatId] = useState([]);
  const [SelectedSubId, setSelectedSubId] = useState([]);
  const [options, setOptions] = useState([]);
  const [click, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [previouscategory, setpreviousCategory] = useState("");
  const clearStates = () => {
    setImages([]);
    setImageForSend([]);
    setBrandId(0);
    setCatId("");
    setClicked(false);
    setColors([]);
    setPriceAfter(0);
    setPriceBefor(10000);
    setProdDescription("");
    setProdName("");
    setSelectedSubId();
    setQty(0);
  };

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrand());
    dispatch(GetProductDetails(id));

    return () => {
      clearStates();
    };
  }, [id]);

  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], "222", metadata);
  };

  const [x, setx] = useState("");
  {
  }

  useEffect(() => {
    if (!!data) {
      // fetch(data.images)
      //   .then((res) => res.blob())
      //   .then((blob) => {
      //     const file = new File([blob], "jj.jpeg", blob);
      //     setImageForSend([file]);
      //   });

      for (const e of data.images) {
        fetch(e)
          .then((res) => res.blob())

          .then((blob) => {
            const file = new File([blob], "image", { type: blob.type });

            setImageForSend([...imageaForSend, file]);
          });
      }

      for (const e of category.data) {
        if (e._id && data.category && e._id === data.category) {
          setx(e.name);
          break;
        }
      }

      setProdName(data.title);
      setImages(data.images);
      setProdDescription(data.description);
      setPriceAfter(data.price);
      setColors(data.availableColors);
      setCatId(data.category);
      setQty(data.quantity);

      setBrandId(data.brand);
    }

    return () => {
      console.log("Clear fun");

      clearStates();
    };
  }, [!!data, id, data?._id]);

  useEffect(() => {
    if (CatId != 0) {
      !!subcat ? setOptions(subcat.data) : [];
    }
  }, [CatId]);

  //to show hide color picker
  const handleTheColorListClicked = () => {
    setShowColor(!ShowColor);
  };

  const onchangeProdname = (e) => {
    setProdName(e.target.value);
  };

  const onchangeDescription = (e) => {
    setProdDescription(e.target.value);
  };

  const onchangepricebefor = (e) => {
    setPriceBefor(e.target.value);
  };

  const onchangePriceAfter = (e) => {
    setPriceAfter(e.target.value);
  };

  const onchangeQty = (e) => {
    setQty(e.target.value);
  };

  const onchangecategory = (e) => {
    setCatId(e.target.value);
  };

  const onchangebrand = (e) => {
    setBrandId(e.target.value);
  };

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
    } else {
      notify("تم التعديل", "success");
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
    formData.append("imageCover", imageaForSend[imageaForSend.length - 1]);
    formData.append("description", ProdDescription);
    formData.append("quantity", Qty);
    formData.append("price", PriceAfter);
    formData.append("brand", BrandId);
    formData.append("category", CatId);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    setLoading(true);

    await dispatch(updateProduct(formData, id));

    setLoading(false);
  };

  // useEffect(() => {
  //   if (loading === false) {
  //     setImages([]), setBrandId(0);
  //     setCatId("");
  //     setClicked(false);
  //     setColors([]);
  //     setPriceAfter(0);
  //     setPriceBefor(0);
  //     setProdDescription("");
  //     setProdName("");
  //     setSelectedSubId([]);
  //     setQty(0);

  //     //   if (product.status === 201) {
  //     //     notify("تمت الاضافة بنجاح", "success");
  //     //   } else {
  //     //     notify("هناك مشكة في الادخال", "warn");
  //     //   }
  //   }
  // }, [loading]);

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
    data,
    x,
  ];
};

export default updateProductHook;
