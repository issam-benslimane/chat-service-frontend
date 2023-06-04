export type Visibility = "public" | "private";

export type Channel = {
  id: string;
  name: string;
  description: string;
  visibility: Visibility;
  workspaceId: string;
};

export type CreateChannelDto = {
  name: string;
  visibility: Visibility;
};
