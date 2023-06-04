import { useParams } from "react-router-dom";
import { Chat } from "../components/Chat";
import { Sidebar } from "../components/Sidebar";
import { useGetChannels } from "../hooks";
import { Channel } from "..";

export const ChannelChat = () => {
  const { workspaceId } = useParams() as { workspaceId: string };
  const { data: channels, isError, isLoading } = useGetChannels(workspaceId);

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>something went wrong!</p>;

  return (
    <div className="grid h-screen grid-cols-[250px_1fr]">
      <Sidebar channels={channels as Channel[]} />
      <Chat />
    </div>
  );
};
