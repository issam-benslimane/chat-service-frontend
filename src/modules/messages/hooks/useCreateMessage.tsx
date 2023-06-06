import { useMutation, useQueryClient } from "react-query";
import { MessagesApi } from "../utils";
import { CreateMessageDto } from "../types";

export const useCreateMessage = (channelId: string) => {
  const queryClient = useQueryClient();
  const api = new MessagesApi();
  const mutation = useMutation(
    (data: CreateMessageDto) => api.post(data, { channelId }),
    {
      onMutate(variables) {
        return;
      },
      onSuccess(result, variables, context) {
        return;
      },
      onError(error, variables, context) {
        return;
      },
      onSettled() {
        queryClient.invalidateQueries(["messages", { channelId }]);
      },
    }
  );
  return mutation;
};
