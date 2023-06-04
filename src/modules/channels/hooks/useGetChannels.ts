import { useQuery } from "react-query";
import { Channel } from "../types";
import { ChannelsApi } from "../utils";

export const useGetChannels = (workspaceId: string) => {
  const api = new ChannelsApi(workspaceId);
  const context = useQuery<Channel[], Error>([workspaceId, "channels"], () =>
    api.readMany()
  );

  return context;
};
