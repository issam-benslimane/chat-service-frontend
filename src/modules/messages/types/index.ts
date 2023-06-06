import { User } from "../../users";

export type Message = {
  id: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  channelId: string;
  username: string;
  user: User;
};

export type CreateMessageDto = Pick<Message, "body">;

export type QueryParams = {
  channelId?: string;
  username?: string;
};
