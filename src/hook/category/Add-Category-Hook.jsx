import React, { useEffect, useState } from "react";
import avatar from "../../images/avatar.png";
import { useDispatch } from "react-redux";
import { createCategory } from "../../redux/actions/CategoryAction";
import notify from "../../hook/UseNotification";

const AddCategoryHook = () => {
  const [img, setImg] = useState(avatar);

  const [name, setName] = useState("");

  const [Loading, setLoading] = useState(true);

  const [ispress, setIspress] = useState(false);

  //state for send image path to back-end
  const [imagepath, Setimagepath] = useState(null);

  const onNameChange = (event) => {
    event.target.value && setName(event.target.value);
  };

  //when user change image
  const onPhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      Setimagepath(event.target.files[0]);
    }
  };

  //for delete image after upload
  const deleteImage = () => {
    setImg(avatar);
  };

  const dispatch = useDispatch();

  const handlesubmit = async (event) => {
    event.preventDefault();
    if (name === "" || img === avatar) {
      notify("اكمل البيانات ", "warn");
      return;
    }

    //new FormData: already class to store the image and another data (but its designed for image uploaded)
    const formdata = new FormData();

    formdata.append("name", name);

    formdata.append("image", imagepath);

    setLoading(true);

    setIspress(true);

    await dispatch(createCategory(formdata));

    notify("تمت الاضافة بنجاح", "success");

    setLoading(false);
  };

  useEffect(() => {
    if (Loading === false) {
      setImg(avatar);
      setName("");
      Setimagepath(null);
      setLoading(true);
      setTimeout(() => setIspress(false), 1000);
    }
  }, [Loading]);

  return [
    img,
    name,
    Loading,
    ispress,
    onPhotoChange,
    deleteImage,
    handlesubmit,
    onNameChange,
  ];
};

export default AddCategoryHook;
