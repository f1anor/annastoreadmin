import React from "react";
import { connect, useSelector } from "react-redux";
import {
  getIsProductAddingSuccess,
  getIsProductEditingSuccess,
} from "selectors/products-selectors";
import { getIsOrderEditingSuccess } from "selectors/orders-selectors";
import Content from "./Content";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const ContentContainer = React.memo(({ ...props }) => {
  const isProductAddingSuccess = useSelector((state) =>
    getIsProductAddingSuccess(state)
  );
  const isProductEditingSuccess = useSelector((state) =>
    getIsProductEditingSuccess(state)
  );

  const pathName = useLocation().pathname;

  return (
    <Content
      isProductAddingSuccess={isProductAddingSuccess}
      isProductEditingSuccess={isProductEditingSuccess}
      {...props}
    />
  );
});

const mapStateToProps = (state) => ({
  isAddingSuccess: state.product.isAddingSuccess,
  isEditingSuccess: state.product.isEditingSuccess,
});

export default connect(mapStateToProps, null)(ContentContainer);
