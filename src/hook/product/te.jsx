// hooks
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
// global state
import { useStore } from "../../../hooks";
// utilities
import notify from "../../../utils/notifcation";

const colors = [
  { name: "أحمر", hex: "#F30B0B" },
  { name: "برتقالي", hex: "#ba4f07" },
  { name: "اصفر", hex: "#ba9707" },
  { name: "اخضر", hex: "#44ba07" },
  { name: "سماوي", hex: "#07ba8e" },
  { name: "ازرق", hex: "#0753ba" },
  { name: "بنفسجي", hex: "#5807ba" },
  { name: "وردي", hex: "#de33a9" },
  { name: "اسود", hex: "#222" },
  { name: "ابيض", hex: "#fefefe" },
];

// ? Convert image url to file ..

async function getFileFromUrl(url, name, defaultType = "image/jpeg") {
  const response = await fetch(url);
  const data = await response.blob();
  return new File([data], name, {
    type: data.type || defaultType,
  });
}

export default function AdminEditProductPageHook() {
  const { productId } = useParams(); // to get product id from url params

  //? Global Store
  const {
    getSpecificProduct,
    editSpecificProduct,

    subCategories,
    loading,
    allCategories: { data: categories },
    allBrands: { data: brands },
    getAllCategories,
    getAllBrands,
    getAllSubCategoriesOnCategory,
  } = useStore();

  //? Use States
  const [product, setProduct] = useState(""); //> To store product details
  const [imageCover, setImageCover] = useState(); //> Image Cover State
  const [productImages, setProductImages] = useState([]); //> Product Images State
  const [mainCategory, setMainCategory] = useState(""); //> Main Category State
  const [budges, setBudges] = useState(); //> Selected Subcategories State
  const [selectedBrand, setSelectedBrand] = useState(""); //> Selected Subcategories State
  const [availColors, setAvailColors] = useState([]); //> Available Colors State

  //? Use Ref
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const quantityRef = useRef("");
  const priceRef = useRef("");
  const soldPriceRef = useRef("");

  //? useEffect to get pruduct details & store it in product state ..
  useEffect(() => {
    const asyncFunc = async () => {
      const res = await getSpecificProduct(productId); // get product details

      setProduct(res); // store product details

      await getAllCategories(); // get all categories
      await getAllBrands(); // get all brands
    };

    asyncFunc(); // get data asynchronously

    return () => setProduct(""); // DESTRUCTOR: clear all data
  }, []);
  //? useEffect to set values
  useEffect(() => {
    const convertUrlImageToFile = async (arrayOfUrls = []) => {
      const IS_URL_REGEX = /^http:\/\//; // to check if items is url

      const res = arrayOfUrls.map(async (url, index) => {
        if (IS_URL_REGEX.test(url)) {
          const file = await getFileFromUrl(url, `image-${index}.png`);

          return file;
        } else return url;
      });

      return Promise.all(res);
    }; // recive array of urls and return array of files

    setMainCategory(product["category"]); // set product category

    setImageCover(product["imageCover"]); // set product image cover
    convertUrlImageToFile(product["images"]).then((out) =>
      setProductImages(out)
    ); // convert urls images to files

    nameRef.current.value = product["title"]; // set product title
    descriptionRef.current.value = product["description"]; // set product description
    quantityRef.current.value = product["quantity"]; // set product quantity
    priceRef.current.value = product["price"]; // set product price

    setSelectedBrand(product["brand"]); // set product brand
    setAvailColors(product["availableColors"]); // set product available colors

    setBudges(product["subcategory"]); // set product subcategory
  }, [Boolean(product)]); // effect runs when the product data is ready

  //? useEffect to get subcategories on category
  useEffect(() => {
    const getSubCat = async () => {
      const res = await getAllSubCategoriesOnCategory(mainCategory);
    };

    Boolean(product) && getSubCat(); // if product has been loaded .. then fetch
  }, [mainCategory]);

  // ? Product Image Cover
  const selectImageCover = (e) => {
    if (e.target.files[0] === undefined) return;
    setImageCover(e.target.files[0]);
  };
  const deleteImageCover = () => setImageCover(""); //* Delete image cover

  // ? Product Images
  const selectMultipleImages = (e) => {
    if (e.target.files[0] === undefined) return;
    if (
      e.target.files.length > 4 ||
      e.target.files.length + productImages.length > 4
    ) {
      notify("error", "لا يمكن اضافة أكتر من 4 صور");
      return;
    }
    setProductImages((prevImages) => [...prevImages, ...e.target.files]);
  };

  const deleteProductImage = (image) =>
    setProductImages([...productImages.filter((images) => images !== image)]);

  //? Category & Sub Category & Brand
  const addSubCategory = (e) => setBudges(e.value); //> Add Subcategory id Subcategories State

  const selectMainCategory = (e) => setMainCategory(e.value);

  const selectNewBrand = (e) => setSelectedBrand(e.value);

  //? Available Colors
  const addColor = (hex) => setAvailColors((prev) => [...prev, hex]); //> Add Color
  const deleteColor = (hex) =>
    setAvailColors([...availColors.filter((clr) => clr !== hex)]); //> Delete Color

  //? Handle Submit Function
  const editProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // //> Add Product Images

    productImages.forEach((img) => formData.append("images", img));

    formData.append("category", mainCategory); //> Main Category
    formData.append("brand", selectedBrand); //> Main Brand

    budges.forEach((sub) => formData.append("subcategory", sub));

    availColors.forEach((clr) => formData.append("availableColors", clr));

    const response = await editSpecificProduct(formData, productId);

    if (response.status === 400) notify("error", "هذا الاسم موجود مسبقا");
    if (response.status === 500) notify("error", "نعتذر يوجد خطأ في المخدم");
    if (response.status === 200) notify("done", "تم التعديل بنجاح");
  };

  return {
    editProduct,
    loading,
    imageCoverLogic: { imageCover, selectImageCover, deleteImageCover },
    productImagesLogic: {
      productImages,
      selectMultipleImages,
      deleteProductImage,
    },
    nameRef,
    descriptionRef,
    quantityRef,
    priceRef,
    soldPriceRef,
    subCategoriesLogic: {
      budges,
      subCategories,
      addSubCategory,
    },
    MainCategoryLogic: {
      categories,
      mainCategory,
      selectMainCategory,
    },
    brandsLogic: {
      brands,
      selectedBrand,
      selectNewBrand,
    },
    colorsLogic: {
      colors,
      addColor,
      deleteColor,
      availColors,
    },
  };
}
