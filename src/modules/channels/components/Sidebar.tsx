import { ChannelModal } from "./ChannelModal";
import { ChannelsNavigation } from "./ChannelsNavigation";
import { Channel, CreateChannelDto } from "../types";

type SidebarProps = {
  channels: Channel[];
};

export const Sidebar = ({ channels }: SidebarProps) => {
  return (
    <div className="bg-fuchsia-950 p-2">
      <div className="text-white/70">
        <ChannelsNavigation channels={channels} />
        <ChannelModal channels={channels} />
      </div>
    </div>
  );
};
