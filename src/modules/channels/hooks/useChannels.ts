import { useEffect, useState } from "react";
import { Channel } from "../types";
import axios from "../../common/utils/api";

export const useChannels = (workspaceId: string) => {
  const [channels, setChannels] = useState<Channel[]>([]);

  const getChannels = () => {
    let ignore = false;
    axios.get(`workspaces/${workspaceId}/channels`).then((resp) => {
      if (ignore) return;
      setChannels(resp.data);
    });

    return () => {
      ignore = true;
    };
  };

  useEffect(() => {
    return getChannels();
  }, [workspaceId]);

  return { channels };
};
