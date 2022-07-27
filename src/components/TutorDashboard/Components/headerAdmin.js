import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
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
import Logout from "@mui/icons-material/Logout";
import TutorExamPopup from "./tutorExam_popup";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Bell as BellIcon } from "../icons/bell";
import { UserCircle as UserCircleIcon } from "../icons/user-circle";
import { Users as UsersIcon } from "../icons/users";
import HeaderSidebar from "./headerSidebar";
import classes1 from "../Pages/screenWidth.module.css";
import Chip from "@mui/material/Chip";
import Menu from "@mui/material/Menu";

import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import "./navbarWidth.css"

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  // boxShadow: theme.shadows[3]
}));

const DashboardNavbar = (props) => {


  const clickHandlerLog = () => {
    localStorage.removeItem("tutor");
    window.location.reload();
  };

  return (
    <>
      <DashboardNavbarRoot
       
        class={classes1.navbarWidth}
        style={{
          width:
            JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutStatus !==
              "db" && "100%",
          left:
            JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutStatus !==
              "db" && "0px",
        }}
       
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
         

          {/* {JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutStatus ==
            "db" && <HeaderSidebar />} */}
          
            <>
              <Box sx={{ flexGrow: 1 }} />
              <Chip
                label={`Hi, Admin`}
                variant="outlined"
                style={{ marginRight: "5px" }}
              />
              {/* <TutorExamPopup /> */}
            </>
          
            <Avatar
              sx={{
                height: 40,
                width: 40,
                ml: 1,
              }}
              // src="/static/images/avatars/avatar_1.png"
              src={props?.profilePic}
            >
              <UserCircleIcon fontSize="small" />
            </Avatar>
          
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};



export default DashboardNavbar;
