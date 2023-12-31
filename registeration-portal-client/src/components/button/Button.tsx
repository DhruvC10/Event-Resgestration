import React from "react";

interface Props {
  padding: string;
  margin: string;
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
}

const Button: React.FC<Props> = ({
  padding,
  margin,
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding,
        margin,
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
