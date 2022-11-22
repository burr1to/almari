import "./App.css";
import "./index.css";
import React, { useEffect, useState } from "react";

import { UserContext } from "./utils/UserContext";

import Routedpath from "./Routes";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    owner_id: null,
    email: null,
    profile_image: null,
    name: null,
    phone_number: null,
    is_verified: null,
    created_at: null,
  });

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
  };

  return (
    <UserContext.Provider value>
      <Routedpath></Routedpath>
    </UserContext.Provider>
  );
}

export default App;
