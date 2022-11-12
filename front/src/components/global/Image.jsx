import React from "react";
import "./../statics/image.css";

const Image = ({ src, alt, addStyles, onClick, style, ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={"main_image " + addStyles}
      style={style}
      {...rest}
      onClick={onClick}
    />
  );
};

export default Image;
