import React, { useState } from "react";

import "./../statics/extra.css";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
function Ratings() {
  const [currentValue, setcurrentValue] = useState(0);
  const [hoverValue, sethoverValue] = useState(undefined);

  const handleClick = (value) => {
    setcurrentValue(value);
  };

  const handleMouseOver = (value) => {
    sethoverValue(value);
  };

  const handleMouseLeave = (value) => {
    sethoverValue(undefined);
  };
  const stars = Array(5).fill(0);
  return (
    <div style={styles.container}>
      <h2>Star Rating</h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
export default Ratings;
