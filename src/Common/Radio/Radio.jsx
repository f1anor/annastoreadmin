import React from "react";
import css from "./Radio.module.css";

const Radio = ({
  input,
  label,
  checked,
  value,
  type = "radio",
  className = "",
  ...props
}) => {
  return (
    <div className={[css.wrapper, className].join(" ")}>
      <input
        {...input}
        type={type}
        className={css.input}
        id={label}
        checked={checked}
        value={value}
      />
      <label className={css.label} htmlFor={label} />
      <label htmlFor={label} className={css.titleLabel}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
