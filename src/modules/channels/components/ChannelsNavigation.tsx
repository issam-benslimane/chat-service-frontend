import { Link, useParams } from "react-router-dom";
import { useBaseUrl } from "../../../providers/Url";
import { useChannels } from "../hooks";
import { Channel } from "../types";
import { FaHashtag } from "react-icons/fa";

export const ChannelsNavigation = () => {
  const { workspaceId } = useParams() as { workspaceId: string };
  const { channels } = useChannels(workspaceId);

  return (
    <div className="text-white/70">
      <p>Channels</p>
      <ul>
        {channels.map((channel) => (
          <ChannelItem key={channel.id} {...channel} />
        ))}
      </ul>
    </div>
  );
};

const ChannelItem = ({ id, name }: Channel) => {
  const baseUrl = useBaseUrl();
  return (
    <li key={id}>
      <Link
        to={`${baseUrl}/${id}`}
        className="flex items-center gap-2 rounded-md px-4 py-1 hover:bg-white/20"
      >
        <FaHashtag size={15} /> {name}
      </Link>
    </li>
  );
};
