import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import { Link,useHistory} from "react-router-dom";
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
import axios from "axios";
// import "./navbarWidth.css"

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  // boxShadow: theme.shadows[3]
}));



const DashboardNavbar = (props) => {
  const history=useHistory()
  const { onSidebarOpen, ...other } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showDot,setShowDot] = useState(true);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setShowDot(false)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const onSidebarOpen = (e) => {
  //   e.preventDefault();
  //   setOpenSidebar(true);
  // };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // for tutor Exam
  // const options = [
  //   "None",
  //   "Atria",
  //   "Callisto",
  //   "Dione",
  //   "Ganymede",
  //   "Hangouts Call",
  //   "Luna",
  //   "Oberon",
  //   "Phobos",
  //   "Pyxis",
  //   "Sedna",
  //   "Titania",
  //   "Triton",
  //   "Umbriel",
  // ];
  // const ITEM_HEIGHT = 48;
  // const [anchorE2, setAnchorE2] = React.useState(null);
  // const openExam = Boolean(anchorE2);
  // const handleClickExam = (event) => {
  //   setAnchorE2(event.currentTarget);
  // };
  // const handleCloseExam = () => {
  //   setAnchorE2(null);
  // };

  const sendDashbord = () => {
    let tutor1=JSON.parse(localStorage.getItem('tutor'));
    let tutor_ls=JSON.parse(localStorage.getItem('tutor')).saveTutor;

    let temp_tutorSaveObj={
      ...tutor_ls,
      tutStatus:"db"
    }
    console.log({tutor_ls})
    let temp_tutorObj={
      ...tutor1,
      saveTutor: temp_tutorSaveObj
    }
    let tutor_stringified=JSON.stringify(temp_tutorObj)
    localStorage.setItem('tutor',tutor_stringified)

    history.replace("/tutor_dashboard");
    window.location.reload();
  }

  const visitedNoti = async () => {
    try {
      let payload = {
        tutor_id: props.tutorId,
      }
      await axios.post('https://device6chatapi.el.r.appspot.com/api/tutor/vistedNotification', payload);
      props.setReadNoti(!props.readNoti);
      handleClose();
    }
    catch (err) {
      console.log(err)
    }
  }



  const clickHandlerLog = () => {
    localStorage.removeItem("tutor");
    window.location.reload();
  };

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
        class={classes1.navbarWidth}
        style={{
          width:
            JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutStatus !==
              "db" && "100%",
          left:
            JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutStatus !==
              "db" && "0px",
        }}
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

          {JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutStatus ==
            "db" && <HeaderSidebar />}

          {/* <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip> */}

      {(JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutStatus ==
            "exr" ) && (
            <>
              <Box sx={{ flexGrow: 1 }} />
             
              <Chip
                label={`Hi, ${props?.name?.split(" ")[0]}`}
                variant="outlined"
                style={{ marginRight: "5px" }}
              />
              <TutorExamPopup />
            </>
          )}


          {(JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutStatus ==
            "db" ||
            JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutStatus ==
              "ex") && (
            <>
              <Box sx={{ flexGrow: 1 }} />
              {(props?.saveTutor?.Bank.acc_no!==undefined && props?.saveTutor?.Bank.acc_no!==null) && <Chip
                label={`Dashboard`}
                variant="outlined"
                onClick={sendDashbord}
                style={{ marginRight: "5px" }}
              />}
              <Chip
                label={`Hi, ${props?.name?.split(" ")[0]}`}
                variant="outlined"
                style={{ marginRight: "5px" }}
              />
              <TutorExamPopup />
            </>
          )}
          {/* <Tooltip title="Test Given">
            <IconButton sx={{ ml: 1 }}
             aria-label="more"
             id="long-button"
             aria-controls={openExam ? "long-menu1" : undefined}
             aria-expanded={openExam ? "true" : undefined}
             aria-haspopup="true"
             onClick={handleClickExam}
            >
              <span class="fas fa-book-reader"  />
            </IconButton>
          </Tooltip> */}

          
          {/* <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip> */}
          <Tooltip title="">
            <IconButton sx={{ ml: 1 }} >
             
              <Badge color="primary" >
                <BellIcon fontSize="small" aria-describedby={id} onClick={handleClick} />
                 {/* notification  */}
                <Popover
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
                    {props?.noti > 0 ? <div style={{color: '#337ddd', cursor: 'pointer'}} onClick={visitedNoti}>{`${props?.noti} new session available`}</div> : <div style={{cursor: 'default'}}>{`No new session available`}</div>}
                  </Typography>
                </Popover>

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
              </Badge>
             {showDot && props?.noti > 0 && <Badge badgeContent={4} color="primary" variant="dot" style={{paddingBottom:"15px"}}/>}
            </IconButton>
          </Tooltip>
          {(JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutStatus ==
          "db" || JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutStatus ==
          "exr") ? (
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
          ) : (
            // <i class="fa-solid fa-power-off"></i>
            <div onClick={clickHandlerLog}>
              <Link to="/" style={{ color: "black" }}>
                <MenuItem>
                  {/* <ListItemIcon> */}
                 <Button> 
                   <Logout fontSize="small" style={{ color: "#3f9afd" }} /> 
                  <span style={{marginLeft:"3px"}}> Logout</span>
                   </Button>
                  {/* </ListItemIcon> */}
                  {/* Logout  */}
                  {/* <span class="fa-solid fa-power-off"></span> */}
                </MenuItem>
              </Link>
            </div>
          )}
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

// DashboardNavbar.propTypes = {
//   onSidebarOpen: PropTypes.func
// };

export default DashboardNavbar;
