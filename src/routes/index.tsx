import { Navigate, Route, Routes } from "react-router-dom";
import { useUser } from "../providers/User";

export const AppRoutes = () => {
  const { currentUser } = useUser();
  if (!currentUser) return <p>YOU ARE NOT LOGGED IN</p>;
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/succession" />} />
      <Route path="/:workspace">
        <Route path=":channel" />
      </Route>
    </Routes>
  );
};
