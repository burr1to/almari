import { createContext } from "react";

export const UserContext = createContext({
  id: null,
  name: null,
  email: null,
  phone_number: null,
  created_at: null,
});
