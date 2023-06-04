import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./User";
import { BaseUrlProvider } from "./Url";
import { QueryClient, QueryClientProvider } from "react-query";

type AppProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <UserProvider>
      <BaseUrlProvider>
        <Router>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Router>
      </BaseUrlProvider>
    </UserProvider>
  );
};
