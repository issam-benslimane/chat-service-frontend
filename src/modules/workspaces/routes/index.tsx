import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { ChannelsRoutes } from "../../channels";
import { useWorkspace } from "../hooks/useWorkspace";
import { BaseUrlProvider } from "../../../providers/Url";

export const WorkspaceRoutes = () => {
  const { workspaceId } = useParams() as { workspaceId: string };
  const { workspace } = useWorkspace(workspaceId);

  if (!workspace) return <p>loading...</p>;
  return (
    <BaseUrlProvider path={workspaceId}>
      <Routes>
        <Route index element={<Navigate to="86WXS9Y345" />} />
        <Route path=":channelId/*" element={<ChannelsRoutes />} />;
      </Routes>
    </BaseUrlProvider>
  );
};
