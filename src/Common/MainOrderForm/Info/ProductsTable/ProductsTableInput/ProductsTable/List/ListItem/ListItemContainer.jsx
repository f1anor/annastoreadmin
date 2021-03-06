import React from "react";
import { connect, useDispatch } from "react-redux";
import { arraySplice, change } from "redux-form";
import { setImg } from "actions/orders-actions";
import ListItem from "./ListItem";

const ListItemContainer = ({ form, value, product, ...props }) => {
  const dispatch = useDispatch();

  const img = (product.imgs[0] && product.imgs[0].small) || null;

  const handleInc = () => {
    const index = value.findIndex((item) => item.id === product.id);
    dispatch(
      arraySplice(form, "products", index, 1, {
        ...product,
        amount: product.amount + 1,
      })
    );
  };

  const handleDec = () => {
    if (product.amount <= 1) return;
    const index = value.findIndex((item) => item.id === product.id);
    dispatch(
      arraySplice(form, "products", index, 1, {
        ...product,
        amount: product.amount - 1,
      })
    );
  };

  const handleRemove = () => {
    dispatch(
      change(form, "products", [
        ...value.filter((item) => item.id !== product.id),
      ])
    );
  };

  return (
    <ListItem
      product={product}
      img={img}
      handleInc={handleInc}
      handleDec={handleDec}
      handleRemove={handleRemove}
      {...props}
    />
  );
};

export default connect(null, { setImg })(ListItemContainer);
