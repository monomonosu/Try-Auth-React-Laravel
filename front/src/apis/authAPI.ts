// import axios from "axios";
import axios from "../utils/axiosClient";
import type { User } from "../types/User";

// ログイン情報取得
export const getUser = async () => {
  const { data } = await axios.get<User>("http://localhost/api/user");
  return data;
};

// ログイン
export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data } = await axios.post<User>("http://localhost/api/login", {
    email,
    password,
  });
  return data;
};

// ログアウト
export const logout = async () => {
  const { data } = await axios.post<User>("http://localhost/api/logout");
  return data;
};
