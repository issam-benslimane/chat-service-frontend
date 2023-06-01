import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./User";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <UserProvider>
      <Router>{children}</Router>
    </UserProvider>
  );
};
