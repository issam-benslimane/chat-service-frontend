import { FormEvent, KeyboardEvent, useRef, useState } from "react";
import { useCreateMessage } from "../hooks";

type CreateMessageProps = {
  channelId: string;
};

export const CreateMessage = ({ channelId }: CreateMessageProps) => {
  const [body, setBody] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const createMessage = useCreateMessage(channelId);

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setBody("");
    await createMessage.mutateAsync({ body });
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleKeyDown = (ev: KeyboardEvent<HTMLTextAreaElement>) => {
    if (ev.key === "Enter") {
      if (!ev.repeat) {
        formRef.current?.requestSubmit();
      }
      ev.preventDefault();
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="p-5 pt-0">
      <textarea
        className="w-full resize-none rounded-md border border-slate-300 px-4 py-2 text-sm"
        placeholder="Type your message here"
        value={body}
        onChange={(ev) => setBody(ev.target.value)}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
};
