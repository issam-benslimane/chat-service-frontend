import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./User";
import { BaseUrlProvider } from "./Url";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <UserProvider>
      <BaseUrlProvider>
        <Router>{children}</Router>
      </BaseUrlProvider>
    </UserProvider>
  );
};
