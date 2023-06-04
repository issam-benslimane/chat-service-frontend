import { Navigate, Route, Routes } from "react-router-dom";
import { useUser } from "../providers/User";
import { WorkspaceRoutes } from "../modules/workspaces";

export const AppRoutes = () => {
  const { currentUser } = useUser();
  if (!currentUser) return <p>YOU ARE NOT LOGGED IN</p>;
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/T2DT1165YH" />} />
      <Route path="/:workspaceId/*" element={<WorkspaceRoutes />} />
    </Routes>
  );
};
