import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState({
    age1: "",
    age2: "",
  });

  const handleChange = (label, event) => {
    switch (label) {
      case "age1":
        setAge({ ...age, age1: event.target.value });
        console.log(event.target.value);
        break;
      case "age2":
        setAge({ ...age, age2: event.target.value });
        break;
    }
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age.age1}
          label='Age'
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Box>
      <Box sx={{ minWidth: 190 }}>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age.age2}
          label='Age'
          onChange={handleChange}
        >
          <MenuItem value={120}>Ten</MenuItem>
          <MenuItem value={220}>Twenty</MenuItem>
          <MenuItem value={320}>Thirty</MenuItem>
        </Select>
      </Box>
    </>
  );
}
