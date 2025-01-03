import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
const SearchDialog = () => {
  const search = useInputValidation("");
  let isLoadingSendFriendRequest=false
  const addFriendHandler=()=>{
    console.log("id")
  }
  const sampleUsers = [

    {
      name: "zeeshan",
      _id: 1,
      avatar: "avatar.png",
    },
    {
      name: "Ali",
      _id: 2,
      avatar: "avatar.png",
    },
    {
      name: "Aqeel",
      _id: 3,
      avatar: "avatar.png",
    },
  ];
  const [users,SetUsers]=useState(sampleUsers)
  return (
    <>
      <Dialog open>
        <Stack padding={"2rem"} direction={"column"} width={"25rem"}>
          <DialogTitle textAlign={"center"}>Find People</DialogTitle>
          <TextField
            label=""
            value={search.value}
            onChange={search.changeHandler}
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <List>
            {users.map((user, index) => (
              <UserItem
                key={index}
                user={user}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingSendFriendRequest}
              />
            ))}
          </List>
        </Stack>
      </Dialog>
    </>
  );
};

export default SearchDialog;
