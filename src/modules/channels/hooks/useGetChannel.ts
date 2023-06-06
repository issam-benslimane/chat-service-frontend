import { useQuery } from "react-query";
import { Channel } from "../types";
import { ChannelsApi } from "../utils";

export const useGetChannel = (workspaceId: string, channelId: string) => {
  const api = new ChannelsApi(workspaceId);
  const context = useQuery<Channel, Error>(
    [workspaceId, "channels", channelId],
    () => api.readOne(channelId)
  );

  return context;
};
