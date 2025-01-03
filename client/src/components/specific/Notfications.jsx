import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { sampleNotifications } from "../constants/sampleData";

const Notfications = () => {
  const friendRequestHandler = ({ _id, accept }) => {
    console.log("_Id");
  };

  return (
    <>
      <Dialog open>
        <Stack padding={{ xs: "2rem", sm: "1rem" }}>
          <DialogTitle>Notifications</DialogTitle>
          {sampleNotifications.length > 0 ? (
            sampleNotifications.map((notification) => (
              <NotficationItem
                key={notification._id}
                _id={notification._id}
                sender={notification.sender}
                handler={friendRequestHandler}
              />
            ))
          ) : (
            <Typography>0 Notifications </Typography>
          )}
        </Stack>
      </Dialog>
    </>
  );
};
// eslint-disable-next-line react/display-name, react/prop-types
const NotficationItem = memo(({ sender, _id, handler }) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { name, avatar } = sender;
  return (
    <>
      <ListItem>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"1rem"}
          width={"100%"}
        >
          <Avatar />
          <Typography
            variant="body1"
            sx={{
              flexGrow: 1,
              display: "webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
            }}
          >
            {`${name} send you a friend request`}
          </Typography>
        </Stack>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
        >
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </ListItem>
    </>
  );
});
export default Notfications;
