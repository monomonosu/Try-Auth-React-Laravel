import axios from "axios";
import type { User } from "../types/User";

export const getUser = async () => {
  const { data } = await axios.get<User>("http://localhost/api/user");
  return data;
};
