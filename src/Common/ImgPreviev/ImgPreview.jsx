import React from "react";
import css from "./ImgPreview.module.css";

const ImgPreview = ({ img, onClick, className = "", disabled }) => {
  if (!img) {
    return <></>;
  }
  return (
    <button
      disabled={disabled}
      className={[css.wrapper, className].join(" ")}
      onClick={onClick}
    >
      <img src={`${process.env.REACT_APP_SERVER_ASSETS}/${img}`} alt="" />
    </button>
  );
};

export default ImgPreview;
