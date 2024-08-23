import { toast } from "react-toastify";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
//to make notification to any component
const notify = (msg, type) => {
  switch (type) {
    case "error":
      return toast.error(msg);
    case "warn":
      return toast.warn(msg);
    case "success":
      return toast.success(msg);
    default:
      return;
  }
};

export default notify;
