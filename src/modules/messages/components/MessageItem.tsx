import dayjs from "dayjs";
import { Message } from "../types";

type MessageItemProps = {
  message: Message;
};

export const MessageItem = ({ message }: MessageItemProps) => {
  return (
    <li className="flex items-start gap-2">
      <div className="h-10 w-10 shrink-0">
        <img className="rounded-md" src={message.user.avatarUrl} alt="" />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">{message.user.username}</p>
          <p className="text-xs text-slate-500">
            {dayjs(message.createdAt).format("h: mm A")}
          </p>
        </div>
        <p className="break-all text-sm">{message.body}</p>
      </div>
    </li>
  );
};
