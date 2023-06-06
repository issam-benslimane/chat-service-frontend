import { useQuery } from "react-query";
import { QueryParams, Message } from "../types";
import { MessagesApi } from "../utils";

export const useGetMessages = (params?: QueryParams) => {
  const api = new MessagesApi();
  const context = useQuery<Message[], Error>(["messages", params], () =>
    api.readMany(params)
  );

  return context;
};
