import "./App.css";
import "./index.css";
import React, { useState, useMemo, useEffect } from "react";

import { UserContext } from "./utils/UserContext";

import Routedpath from "./Routes";

function App() {
  const [data, setData_s] = useState({
    id: null,
    name: null,
    email: null,
    phone_number: null,
    created_at: null,
  });

  useEffect(() => {
    const tempData = JSON.parse(localStorage.getItem("user"));
    setData_s(tempData);
  }, []);

  const setData = (value) => {
    window.localStorage.setItem("user", JSON.stringify(value));
    setData_s(value);
  };

  const getContext = useMemo(() => ({ data }), [data]);

  return (
    <UserContext.Provider value={[getContext, setData]}>
      <Routedpath></Routedpath>
    </UserContext.Provider>
  );
}

export default App;
