import { createContext, useContext } from "react";

const BaseUrlContext = createContext("/");

type Props = {
  children: React.ReactNode;
  path?: string;
};

export const BaseUrlProvider = ({ children, path }: Props) => {
  const base = useContext(BaseUrlContext);
  return (
    <BaseUrlContext.Provider value={path ? mergePaths(base, path) : base}>
      {children}
    </BaseUrlContext.Provider>
  );
};

export const useBaseUrl = () => useContext(BaseUrlContext);

function mergePaths(pathA: string, pathB: string) {
  return [pathA.replace(/\/$/g, ""), pathB.replace(/^\/|\/$/g, "")].join("/");
}
