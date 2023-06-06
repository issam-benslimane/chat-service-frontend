import { useCallback, useEffect, useRef } from "react";
import { useGetMessages } from "../hooks";
import { MessagesList } from "./MessagesList";

type MessagesProps = {
  channelId: string;
};

export const Messages = ({ channelId }: MessagesProps) => {
  const {
    data: messages,
    isError,
    isLoading,
    isIdle,
  } = useGetMessages({ channelId });

  const ref = useCallback((node: HTMLDivElement) => {
    node?.scrollTo(0, node.scrollHeight);
  }, []);

  if (isIdle) return null;
  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>something went wrong!</p>;

  return (
    <div ref={ref} className="overflow-scroll p-5">
      <MessagesList messages={messages} />
    </div>
  );
};
