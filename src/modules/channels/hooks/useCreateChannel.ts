import { useMutation, useQueryClient } from "react-query";
import { ChannelsApi } from "../utils";
import { CreateChannelDto } from "../types";
import { sleep } from "../../common/utils/sleep";

export const useCreateChannel = (workspaceId: string) => {
  const queryClient = useQueryClient();
  const api = new ChannelsApi(workspaceId);
  const mutation = useMutation(
    (data: CreateChannelDto) => sleep(2000).then(() => api.post(data)),
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
        queryClient.invalidateQueries([workspaceId, "channels"]);
      },
    }
  );
  return mutation;
};
