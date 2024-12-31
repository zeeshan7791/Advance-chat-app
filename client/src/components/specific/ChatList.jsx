/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  // eslint-disable-next-line react/prop-types
  w = "100",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) =>{
    return (
      <Stack width={w} direction={"column"}>
        {chats?.map((data,index) => {
          const { avatar, name, _id, groupChat, members } = data;
  
          // Find the alert for the current chat
          const newMessageAlert = newMessagesAlert.find(
            (alert) => alert.chatId === _id
          );
  const isOnline=members?.some((member)=>onlineUsers.includes(_id))
          return (
            <ChatItem
              key={_id} // Provide a unique key for each chat item
             index={index}
              _id={_id} 
              avatar={avatar}
              name={name}
              groupChat={groupChat}
              members={members}
              isOnline={isOnline}
              newMessageAlert={newMessageAlert}
              handleDeleteChatOpem={handleDeleteChat}
              sameSender={chatId===_id}
             // Pass the chat ID to the delete handler
            />
          );
        })}
      </Stack>
    );
  };
export default ChatList;
