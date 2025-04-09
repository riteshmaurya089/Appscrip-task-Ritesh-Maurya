import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary: "border border-gray-800 rounded-sm accent-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-800",
};

const sizes = {
  xs: "h-[14px] w-[14px]",
  sm: "h-[18px] w-[18px]",
  md: "h-[22px] w-[22px]",
};

const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "sm",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div
          className={`${className} flex items-center gap-[5px] cursor-pointer`}
        >
          <input
            className={`appearance-none ${sizes[size] || ""} ${variants[variant] || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          {!!label && (
            <label htmlFor={id} className="select-none cursor-pointer">
              {label}
            </label>
          )}
        </div>
        {children}
      </>
    );
  }
);

CheckBox.displayName = "CheckBox";

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["primary"]),
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export { CheckBox };
