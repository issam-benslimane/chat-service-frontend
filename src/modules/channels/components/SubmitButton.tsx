import { HTMLAttributes } from "react";
import { QueryStatus } from "react-query";

type SubmitButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  status: QueryStatus;
};

export const SubmitButton = ({ status, children }: SubmitButtonProps) => {
  if (status === "loading") {
    return;
  }
  return <button>{children}</button>;
};
