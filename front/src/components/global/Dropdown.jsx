import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  children,
  val,
  handleChange,
  labelID,
  labelName,
}) {
  const selectStyle = {
    width: "500px",
  };
  return (
    <Select
      style={selectStyle}
      labelId={labelID}
      value={val}
      label={labelName}
      onChange={handleChange}
    >
      {children}
    </Select>
  );
}

BasicSelect.defaultProps = {};
