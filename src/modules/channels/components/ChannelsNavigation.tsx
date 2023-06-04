import { NavLink } from "react-router-dom";
import { useBaseUrl } from "../../../providers/Url";
import { Channel } from "../types";
import { FaHashtag } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import clsx from "clsx";

type ChannelsNavigationProps = {
  channels: Channel[];
};

export const ChannelsNavigation = ({ channels }: ChannelsNavigationProps) => {
  return (
    <div>
      <p>Channels</p>
      <ul>
        {channels.map((channel) => (
          <ChannelLink key={channel.id} {...channel} />
        ))}
      </ul>
    </div>
  );
};

const ChannelLink = ({ id, name, visibility }: Channel) => {
  const baseUrl = useBaseUrl();
  return (
    <li>
      <NavLink
        to={`${baseUrl}/${id}`}
        className={({ isActive }) =>
          clsx(
            "flex items-center gap-2 rounded-md px-4 py-1",
            !isActive && " hover:bg-white/20",
            isActive && "bg-blue-600 text-white"
          )
        }
      >
        {visibility === "private" ? (
          <FiLock size={15} />
        ) : (
          <FaHashtag size={15} />
        )}{" "}
        {name}
      </NavLink>
    </li>
  );
};
