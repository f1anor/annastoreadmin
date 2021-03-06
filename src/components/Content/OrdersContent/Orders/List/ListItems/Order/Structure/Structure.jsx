import ImgPreview from "Common/ImgPreviev/ImgPreview";
import React from "react";
import css from "./Structure.module.css";

const Structure = ({ products = [], isDisabled }) => {
  const imgs = products.map((product) => product.imgs[0]).reverse();
  return (
    <div className={css.wrapper}>
      {imgs.map((img) => (
        <ImgPreview key={img._id} img={img.small} disabled={isDisabled} />
      ))}
    </div>
  );
};
export default Structure;
