import React from "react";
import "./../statics/image.css";

const Image = ({
  src,
  alt,
  height,
  width,
  addStyles,
  onClick,
  style,
  ...rest
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={"main_image " + addStyles}
      style={style}
      height={height}
      width={width}
      {...rest}
      onClick={onClick}
    />
  );
};

export default Image;
