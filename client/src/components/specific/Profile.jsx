import { Avatar, Stack, Typography } from "@mui/material";
import { Face as FaceIcon,AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon } from '@mui/icons-material';
import moment from "moment"
const Profile = () => {
  return (
    <>
      <Stack  direction={"column"} alignItems={"center"}>
<Avatar
sx={{
    width:200,
    height:200,
    objectFit:"contain",
    marginBottom:"1rem",
    border:"5px solid white"
}}
/>
<ProfileCard heading={"Bio"} text={"sadas"} />
<ProfileCard heading={"UserName"} text={"@zeeshan"} Icon={<UserNameIcon/>}/>
<ProfileCard heading={"Name"} text={"Zeeshan Yousaf"} Icon={<FaceIcon/>}/>
<ProfileCard heading={"Joined"} text={moment("Fri Jan 03 2025").fromNow()} Icon={<CalendarIcon/>}/>

      </Stack>
    </>
  )
}
// eslint-disable-next-line react/prop-types
const ProfileCard=({text,Icon,heading})=>{
    return(
        
        <><Stack direction={"row"} alignItems={"center"}  textAlign={"center"} color={"white"}>
        {
            Icon&&Icon
        }
    </Stack>
     <Stack>
      <Typography variant='body1' direction={"row"} alignItems={"center"}  textAlign={"center"} color={"white"}>{heading}</Typography>
      <Typography color={"gray"}direction={"row"} alignItems={"center"}  textAlign={"center"}  variant='caption'>{text}</Typography>

    </Stack>
    </>
)}

export default Profile
