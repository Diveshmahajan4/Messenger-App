import { Conversation, Message, User } from "@prisma/client";

export type FullMessageType = Message & {
  senderId: User;
  seen: User[];
};

export type FullConversationType = Conversation & {
  users: User[];
  messages: FullMessageType[];
};