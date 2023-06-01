import { useEffect, useState } from "react";
import { Workspace } from "../types";
import axios from "../../common/utils/api";

export const useWorkspace = (workspaceId: string) => {
  const [workspace, setWorkspace] = useState<Workspace>();

  const getWorkspace = () => {
    let ignore = false;
    axios.get("/workspaces/" + workspaceId).then((resp) => {
      if (ignore) return;
      setWorkspace(resp.data);
    });

    return () => {
      ignore = true;
    };
  };

  useEffect(() => {
    return getWorkspace();
  }, [workspaceId]);

  return { workspace };
};
