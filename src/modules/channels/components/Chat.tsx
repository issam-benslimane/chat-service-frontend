import { useParams } from "react-router-dom";

export const Chat = () => {
  const { channelId, workspaceId } = useParams() as {
    channelId: string;
    workspaceId: string;
  };

  return (
    <div className="px-5 py-2">
      <div className="flex items-center justify-between">
        <p>{"fuck"}</p>
        <p>users here</p>
      </div>
    </div>
  );
};
