import { createContext } from "react";

export const UserContext = createContext({
  owner_id: null,
  email: null,
  profile_image: null,
  name: null,
  phone_number: null,
  is_verified: null,
  created_at: null,
});
