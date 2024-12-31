/* eslint-disable react/prop-types */
import { Box, Typography ,Stack} from "@mui/material"
import { Link } from "../styled/StyledComponents"
import React, { memo } from "react";


const ChatItem = ({
    avatar=[],
    name,
   _id,
    groupChat=false,
    sameSender,
    isOnline,
    newMessageAlert,
    index=0,
    HandleDeleteChatOpen
}) => {
  return (
    <>
     <Link to={`chat/${_id}`}
     onContextMenu={(e)=>HandleDeleteChatOpen(e,_id,groupChat)}
     >
     <div
     style={{
        display:"flex",
        gap:"1rem",
        alignItems:"center",
        padding:"1rem",
        backgroundColor:sameSender?"black":"unset",
        color:sameSender?"white":"unset",
        position:"relative"
     }}
     >
        
<Stack>
    <Typography>
        {name}
    </Typography>
    {
        newMessageAlert&&(
            <Typography >{newMessageAlert.count}New Message</Typography>
        )
    }
</Stack>  
{
    isOnline &&(
        <Box 
        sx={{
            width:"10px",
            height:"10px",
            borderRadius:"50%",
            backgroundColor:"green",
            position:"absolute",
            top:"50%",
            right:"1rem",
            transform:"transalteY(-50%)"
        }}
        >

        </Box>
    )
}
</div>
     </Link>
    </>
  )
}

// eslint-disable-next-line no-undef
export default memo(ChatItem)
