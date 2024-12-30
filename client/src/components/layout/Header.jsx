import React, { lazy, Suspense, useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationIcon
} from "@mui/icons-material";
import {useNavigate} from "react-router-dom"

const SearchDialog=lazy(()=>import("../specific/SearchDialog"))
const NotficationsDailog=lazy(()=>import("../specific/Notfications"))
const NewGroupDailog=lazy(()=>import("../specific/NewGroup"))
const Header = () => {
  const navigate=useNavigate()
  const [isMobile,setIsMobile]=useState(false)
  const [isSearch,setIsSearch]=useState(false)
  const [isNewGroup,setIsNewgroup]=useState(false)
  const [isNotification,setIsNotification]=useState(false)
  const handMobile = () =>{ setIsMobile((prev)=>!prev)};
  const openSearch = () => {setIsSearch((prev)=>!prev)};
  const openNewGroup = () => {
    setIsNewgroup((prev)=>!prev)
  };
  const openNotifications = () => {
    setIsNotification((prev)=>!prev)
  };
  const navigateToGroups = () => navigate("/groups");
  const logoutHandler = () => navigate("/logout");
  return (
    <>
    <Box sx={{ flexGrow: 1, height: "4rem", width: "100%" }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: orange, // Using Material-UI's orange color palette
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Chattu
          </Typography>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <IconButton color="inherit" onClick={handMobile}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box>
            {" "}
            <IconBtn
            title={"Search"}
            icon={<SearchIcon />}
            onClick={openSearch}
            />
             <IconBtn
            title={"New Group"}
            icon={ <AddIcon />}
            onClick={openNewGroup}
            />
              <IconBtn
            title={"Manage Groups"}
            icon={    <GroupIcon />}
            onClick={navigateToGroups}
            />
                <IconBtn
            title={"Notifications"}
            icon={    <NotificationIcon />}
            onClick={openNotifications}
            />
              <IconBtn
            title={"Logout"}
            icon={    <LogoutIcon />}
            onClick={logoutHandler}
            />
          
          
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    {
    isSearch&& (
    <Suspense fallback={<div>loading....</div>}>

    <SearchDialog/>  
    </Suspense>
    )
    }
    {
    isNotification&& (
    <Suspense fallback={<div>loading....</div>}>

    <NotficationsDailog/>  
    </Suspense>
    )
    }
    {
    isNewGroup&& (
    <Suspense fallback={<div>loading....</div>}>

    <NewGroupDailog/>  
    </Suspense>
    )
    }
    </>
  );
};
// eslint-disable-next-line react/prop-types
const IconBtn=({title,icon,onClick})=>{
  return(
    <Tooltip title={title}>
  
    <IconButton color="inherit" size="large" onClick={onClick}>
     {icon}
    </IconButton>
  </Tooltip>
  )

}

export default Header;
