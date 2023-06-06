import { Message } from "../types";
import { MessageItem } from "./MessageItem";

type MessagesListProps = {
  messages: Message[];
};

export const MessagesList = ({ messages }: MessagesListProps) => {
  return (
    <ol className="flex flex-col gap-4 ">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </ol>
  );
};
