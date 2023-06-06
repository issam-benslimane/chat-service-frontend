import { useQuery } from "react-query";
import { User } from "../types";
import { usersApi } from "../utils";

export const useGetUsers = (params?: Record<string, string>) => {
  const context = useQuery<User[], Error>(["users", params], () =>
    usersApi.readMany(params)
  );

  return context;
};
