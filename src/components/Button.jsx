import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-sky-500",
  textColor = "text-rose",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
