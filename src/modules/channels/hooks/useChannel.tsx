import { useEffect } from "react";
import { Channel } from "../types";
import axios from "../../common/utils/api";
import { useAsync } from "../../common/hooks";

export const useChannel = (workspaceId: string, channelId: string) => {
  const { state, run } = useAsync<Channel>();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getChannel = async (): Promise<Channel> => {
      const response = await axios.get(
        `workspaces/${workspaceId}/channels/${channelId}`,
        {
          signal,
        }
      );
      return response.data;
    };
    run(getChannel());

    return () => controller.abort();
  }, [workspaceId, run]);

  return state;
};
