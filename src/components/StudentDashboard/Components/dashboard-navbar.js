import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Popover,
  Button,
  Typography,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";

import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Bell as BellIcon } from "../icons/bell";
import { UserCircle as UserCircleIcon } from "../icons/user-circle";
import { Users as UsersIcon } from "../icons/users";
import HeaderSidebar from "./headerSidebar"
import classes1 from '../Pages/screenWidth.module.css'
import Chip from '@mui/material/Chip';
// import "./navbarWidth.css"

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  // boxShadow: theme.shadows[3]
}));

const DashboardNavbar = (props) => {
  // const { onSidebarOpen, ...other } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openSidebar,setOpenSidebar]=useState(false)
 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSidebarOpen=(e)=>{
    e.preventDefault()
      setOpenSidebar(true)
  }



  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <DashboardNavbarRoot
        // sx={{

        //   ['@media (min-width:991.5)']: {
        //   left: {
        //     lg: "265px",
        //   },
        //   width: {
        //     lg: "calc(100% - 265px)",
        //   }}
        // }}
        // class="css-1cmoch9-MuiPaper-root-MuiAppBar-root"
        class={classes1.navbarWidth }
        // class={classes1.navbarWidth  } 
        
        // {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          {/* <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
           
          </IconButton> */}


          <HeaderSidebar />



          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              {/* <SearchIcon fontSize="small" /> */}
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Chip label={`Hi, ${props?.name.split(" ")[0]}`} variant="outlined" style={{marginRight: "5px"}} />
          {/* <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip> */}
          {/* <Tooltip title="">
            <IconButton sx={{ ml: 1 }} disabled> */}
              {/* <Badge badgeContent={4} color="primary" variant="dot"> */}
              {/* <Badge color="primary" >
                <BellIcon fontSize="small" aria-describedby={id}  onClick={handleClick} />
                {/* notification  */}
                {/* <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Typography sx={{ p: 2 }}>
                    assignment got completed
                  </Typography>
                </Popover> */}

                {/* aria-describedby={id} */}
                {/* <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <BellIcon fontSize="small" {...bindTrigger(popupState)}/>
                       <Button variant="contained" {...bindTrigger(popupState)}>
                      
                       </Button>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        <Typography sx={{ p: 2 }}>
                          The content of the Popover.
                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState> */}
              {/* </Badge> */}
            {/* </IconButton>
          </Tooltip> */}
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1,
            }}
            // src="/static/images/avatars/avatar_1.png"
            src={props.profilePic}
          >
            <UserCircleIcon fontSize="small" />
          </Avatar>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

// DashboardNavbar.propTypes = {
//   onSidebarOpen: PropTypes.func
// };

export default DashboardNavbar;
