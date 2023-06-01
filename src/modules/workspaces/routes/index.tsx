import { useEffect, useState } from "react";
import { Workspace } from "../types";
import axios from "../../common/utils/api";
import { Navigate, useParams } from "react-router-dom";

export const WorkspaceRoutes = () => {
  const [workspace, setWorkspace] = useState<Workspace>();
  const { workspaceId } = useParams() as { workspaceId: string };

  useEffect(() => {
    axios.get("/workspaces/" + workspaceId).then((resp) => {
      setWorkspace(resp.data);
    });
  }, [workspaceId]);

  if (!workspace) return <p>loading...</p>;
  return <Navigate to={"channels/86WXS9Y345"} />;
};
