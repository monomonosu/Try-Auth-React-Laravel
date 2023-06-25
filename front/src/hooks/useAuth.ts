import * as api from "../apis/authAPI";
import { queryClient } from "../queryClient";

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
