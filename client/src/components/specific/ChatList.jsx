/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [],
  handleDeleteChat,
}) =>
  {
  
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data, index) => {
        const { avatar, name, _id, groupChat, members } = data;

        // Find the alert for the current chat
        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );

        // Check if any member of the chat is online
        const isOnline = members?.some((member) => onlineUsers.includes(member));

        return (
          <ChatItem
            key={_id}
            index={index}
            _id={_id}
            avatar={avatar}
            name={name}
            groupChat={groupChat}
            members={members}
            isOnline={isOnline}
            newMessageAlert={newMessageAlert}
            handleDeleteChat={handleDeleteChat}
            sameSender={chatId === _id}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
