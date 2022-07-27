
import React,{useState} from 'react';
import { Box, Container, Typography } from '@mui/material';
// import { DashboardLayout } from '../components/dashboard-layout';
import Sidebar from '../Components/sidebar';
import Header from '../Components/dashboard-navbar';
import { SettingsNotifications } from '../Components/settings/settings-notifications';
import { SettingsPassword } from '../Components/settings/settings-password';
import classes1 from './screenWidth.module.css'

const Settings = (props) => {
  const [itsClicked, setItsClicked] = useState("settings");
  
  return(
  <>
   <Sidebar itsClicked={itsClicked}/>
     <Header  profilePic={props.profilePic} name = {props.values.username}/>

   <div>
    <Box
    style={{display:"flex",justifyContent:"center" ,marginTop:"4rem"}}
    className={classes1.screenBigSetting}
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        backgroundColor:"rgb(248 248 248)"}}
        
    >
      <Container maxWidth="lg" style={{maxWidth:"900px",paddingBottom:"15rem"}} >
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        
        >
          Settings
        </Typography>
        {/* <SettingsNotifications /> */}
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
      </Container>
    </Box>
    </div>
  </>
)};

// Settings.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

export default Settings;
