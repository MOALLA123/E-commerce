import React from "react";
import { Link } from "react-router-dom";

const SubTitle = ({ title, btntitle, pathText }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      {title ? <div className="sub-title">{title}</div> : null}
      {btntitle ? (
        <Link
          to={`${pathText}`}
          className="shopping-now"
          style={{ textDecoration: "none" }}
        >
          {btntitle}
        </Link>
      ) : null}
    </div>
  );
};

export default SubTitle;
