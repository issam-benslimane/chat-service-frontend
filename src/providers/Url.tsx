import { createContext, useContext } from "react";
import { mergeUrlParts } from "../modules/common/utils/url";

const BaseUrlContext = createContext("/");

type Props = {
  children: React.ReactNode;
  path?: string;
};

export const BaseUrlProvider = ({ children, path }: Props) => {
  const base = useContext(BaseUrlContext);
  return (
    <BaseUrlContext.Provider value={mergeUrlParts(base, { path })}>
      {children}
    </BaseUrlContext.Provider>
  );
};

export const useBaseUrl = () => useContext(BaseUrlContext);
