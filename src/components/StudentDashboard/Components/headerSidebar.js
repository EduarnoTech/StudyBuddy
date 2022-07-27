import * as React from 'react';
import {Link} from "react-router-dom"
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import classes1 from '../Pages/screenWidth.module.css'

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickHandlerLog = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <React.Fragment>
         <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }} class={classes1.headerSidebarVisibility}>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
        <Tooltip title="Account settings" >
          <IconButton
          
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
            <MenuIcon style={{fontSize: "28px"}} />
          </IconButton>
        </Tooltip>
      </Box>
      
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            // overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

<Link to="/dashboard" style={{color:"black"}}> <MenuItem>
<ListItemIcon>
         <i class="feather icon-home" style={{fontWeight:"bolder"}} />
          </ListItemIcon>
        Dashboard
        </MenuItem></Link>

        <Link to="/dashboard/history" style={{color:"black"}}>
        <MenuItem>
        <ListItemIcon>
        <i className="fa fa-history"></i>
          </ListItemIcon>
         History
        </MenuItem>
        </Link>

        <Link to="/dashboard/upcomingSessions" style={{color:"black"}}> 
        <MenuItem>
        <ListItemIcon>
        <i class="fas fa-chalkboard-teacher"></i>
          </ListItemIcon>
       Upcomming Sessions
        </MenuItem>
        </Link>


        <Divider />
        <Link to="/dashboard/account" style={{color:"black"}}>
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        </Link>

        <Link to="/dashboard/settings" style={{color:"black"}}>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
           Settings
        </MenuItem>
        </Link> 

        <div onClick={clickHandlerLog}>
        <Link to="/" style={{color:"black"}}>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
           Logout 
        </MenuItem>
        </Link>
        </div>
      </Menu>
    </React.Fragment>
  );
}
