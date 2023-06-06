import { useParams } from "react-router-dom";
import { useGetChannel } from "../hooks";
import { MembersPreview } from "./MembersPreview";
import { CreateMessage, Messages } from "../../messages";
import { Params } from "../types";
import { FiLock } from "react-icons/fi";
import { FaHashtag } from "react-icons/fa";

export const Chat = () => {
  const { channelId, workspaceId } = useParams() as Params;
  const {
    data: channel,
    isError,
    isLoading,
    isIdle,
  } = useGetChannel(workspaceId, channelId);

  if (isIdle) return null;
  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>something went wrong!</p>;

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <div className="flex items-center justify-between border border-b-slate-200 px-5 py-3">
        <button className="flex items-center gap-2">
          {channel.visibility === "private" ? (
            <FiLock size={15} />
          ) : (
            <FaHashtag size={15} />
          )}{" "}
          {channel.name}
        </button>
        <MembersPreview />
      </div>
      <Messages channelId={channelId} />
      <CreateMessage channelId={channelId} />
    </div>
  );
};
