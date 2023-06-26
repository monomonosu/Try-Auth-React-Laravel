import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "../apis/authAPI";
import { queryClient } from "../queryClient";
import { AxiosError } from "axios";

const authUserQuery = () => ({
  queryKey: ["user"],
  queryFn: api.getUser,
});

export const UseAuthUser = async () => {
  const query = authUserQuery();

  return (
    queryClient.getQueriesData(query.queryKey) ??
    (await queryClient.fetchQuery(query).catch(() => undefined))
  );
};

export const UseLogin = () => {
    const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.login,
    onError: (error: AxiosError) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["auth"]);
      window.location.href = "/";
    },
  });
};

export const UseLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.logout,
    onError: (error: AxiosError) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["auth"]);
      window.location.href = "/login";
    },
  });
};
