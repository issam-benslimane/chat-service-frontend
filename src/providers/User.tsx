import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { User } from "../modules/users";

type UserContextValue = {
  currentUser?: User;
  setCurrentUser: Dispatch<SetStateAction<User>>;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User>({
    username: "Fern61",
    email: "Tanner.Hettinger@gmail.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/47117894",
  });
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const value = useContext(UserContext);
  if (!value) throw new Error("You must use context inside the provider");
  return value;
};
