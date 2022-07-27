import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import AccountProfile from "../Components/account/account-profile";
import AccountProfileDetails from "../Components/account/account-profile-details";
import Navi from "../../Dashboard/Navi";

// import Header from "../Components/dashboard-navbar"
import axios from "axios";
import { decode as atob, encode as btoa } from "base-64";
// import Header from "../../Dashboard/Header";
import Header from "../Components/dashboard-navbar";
import Sidebar from "../Components/sidebar";
import classes1 from "./screenWidth.module.css";
// import { DashboardLayout } from '../Components/dashboard-layout';

const Account = (props) => {
  const [itsClicked, setItsClicked] = useState("profile");
  const [isSubmit, setIsSubmit] = useState(false);
  const [countryCode, setCountryCode] = useState(props?.values?.countryCode?.slice(2,-1));

  const API_URL = "https://device6chatapi.el.r.appspot.com/api/sessions";
  const API_URL_CONV =
    "https://device6chatapi.el.r.appspot.com/api/conversations";

  let user = JSON.parse(localStorage.getItem("user"));

  let postData = {
    clientId: JSON.parse(window.localStorage.getItem("user")).saveUser.uid,
    name: props.values.username,
    email: props.values.email,
    university: props.values.university,
    branch: props.values.branch,
    semester: props.values.semester,
    facebookUsername: props.values.facebookUsername,
    countryCode:props.values.countryCode,
    watsNumber: countryCode+props.values.watsNumber,
    country: props.values.country,
    city: props.values.city,
    dateOfBirth: props.values.dateOfBirth,
    timezone: props.values.timezone,
  };

  let postData1 = {
    clientId: JSON.parse(window.localStorage.getItem("user")).saveUser.uid,
    name: props.values.username,
    watsNumber: countryCode+props.values.watsNumber,
    tags: "Tutorlancer",
    agent: "Admin",
  };

  const updateAccountFunc = async (postData) => {
    if (user && user.accessToken && !user.refreshToken) {
      // return { Authorization: 'Bearer ' + user.accessToken };
      // return { "x-auth-token": user.accessToken };
      return axios.post(`${API_URL}/private/updateAccount`, postData, {
        headers: { "x-auth-token": user.accessToken },
      });
    } else if (user && user.refreshToken) {
      let payload = {
        token: user.refreshToken,
      };

      try {
        const res = await axios.post(
          `https://device6chatapi.el.r.appspot.com/api/auth/refresh`,
          payload
        );
        if (res.data.accessToken) {
          user.accessToken = res.data.accessToken;
          user.refreshToken = res.data.refreshToken;
          localStorage.setItem("user", JSON.stringify(user));
        }
      } catch (err) {
        console.log(err);
      }
      // return { Authorization: 'Bearer ' + user.accessToken };
      return axios.post(`${API_URL}/private/updateAccount`, postData, {
        headers: { "x-auth-token": user.accessToken },
      });
    } else {
      return axios.post(`${API_URL}/private/updateAccount`, postData, {
        headers: {},
      });
    }
  };
  const updateAccountConversationFunc = async (postData1) => {
    if (user && user.accessToken && !user.refreshToken) {
      // return { Authorization: 'Bearer ' + user.accessToken };
      // return { "x-auth-token": user.accessToken };
      return axios.post(
        `${API_URL_CONV}/private/updateAccount`,
        postData1,
        { headers: { "x-auth-token": user.accessToken } }
      );
    } else if (user && user.refreshToken) {
      let payload = {
        token: user.refreshToken,
      };

      try {
        const res = await axios.post(
          `https://device6chatapi.el.r.appspot.com/api/auth/refresh`,
          payload
        );
        if (res.data.accessToken) {
          user.accessToken = res.data.accessToken;
          user.refreshToken = res.data.refreshToken;
          localStorage.setItem("user", JSON.stringify(user));
        }
      } catch (err) {
        console.log(err);
      }
      // return { Authorization: 'Bearer ' + user.accessToken };
      return axios.post(
        `${API_URL_CONV}/private/updateAccount`,
        postData1,
        { headers: { "x-auth-token": user.accessToken } }
      );
    } else {
      return axios.post(
        `${API_URL_CONV}/private/updateAccount`,
        postData1,
        { headers: {} }
      );
    }
  };

  const updateAccount = async () => {
    updateAccountFunc(postData).then(
      (response) => {
        if (response.data && response.data.length != 0) {
          updateAccountConversationFunc(postData1).then((response1) => {
            if (response1.data && response1.data.length != 0) {
              alert("Your profile has been updated successfully!");
              // window.location.reload();
            } else {
              alert('Something went wrong. Please try again later...!');
            }
          });
        } else {
          alert('Something went wrong. Please try again later...!');
        }
      },
      (error) => {
        console.log("Private page", error.response);
      }
    );
  };

  

  useEffect(() => {
    if (isSubmit === true) {
      updateAccount();
      setIsSubmit(false)
      // updateAccountConv()
    }
  }, [isSubmit]);

  // const fetchProfile=async()=>{
  //   const fetchProfile= await axios.post("https://device2api.el.r.appspot.com/client/fetchProfile", {email:window.localStorage.getItem('email')})

  //   if (fetchProfile.data && fetchProfile.data.length!=0) {

  //     let binaryProfilePic=fetchProfile?.data?.profile?.profilePic?.data;
  //     let picObject=btoa(new Uint8Array(binaryProfilePic).reduce(function (data, byte) {
  //       return data + String.fromCharCode(byte);
  //   }, ''))

  //   console.log({profilePicTest1:picObject})
  //   let profilePicProper=`data:image/jpeg;base64,${picObject}`;

  //     setValues({

  //     username: fetchProfile.data.profile.username,
  //     email: fetchProfile.data.profile.email,
  //     university: fetchProfile.data.profile.university,
  //     branch: fetchProfile.data.profile.branch,
  //     semester: fetchProfile.data.profile.semester,
  //     facebookUsername:fetchProfile.data.profile.socialmedia,
  //     profilePic:profilePicProper,
  //     watsNumber:fetchProfile.data.profile.watsNumber,
  //     email:fetchProfile.data.profile.email,
  //     country:fetchProfile.data.profile.country,
  //     city:fetchProfile.data.profile.city,
  //     dateOfBirth:fetchProfile.data.profile.dateOfBirth
  //   })

  //     console.log({profile199:fetchProfile.data})
  //     console.log("profile pic fetched")

  //   }
  //   else{
  //     alert('not getting profile details . please again refresh this page')
  //   }
  // }

  // useEffect(()=>{
  //   fetchProfile()
  // },[])

  return (
    <>
    
    <Sidebar itsClicked={itsClicked}/>
    <Header  profilePic={props.values.profilePic} name = {props.values.username}/>

   
    <div style={{height:"50rem" ,backgroundColor:"#F9FAFC",display:"flex",justifyContent:"center"}}>
       <div style={{paddingRight:"0px", paddingTop:"50px"}} className={classes1.screenBigProfile}>
     <Box
       component="main"
       sx={{
         flexGrow: 1,
         py: 8
       }}
       style={{paddingLeft:"0px",paddingRight:"0px" }}
     >
       <Container maxWidth="lg" style={{minWidth:"100%"}}>
         <Typography
           sx={{ mb: 3 }}
           variant="h4"
           style={{color:"#121828", fontSize: '2.5rem'}}
         >
           Account
         </Typography>
         <Grid
           container
           spacing={3}
         >
           <Grid
             item
             lg={4}
             md={6}
             xs={12}
           >
             <AccountProfile values={props.values} setValues={props.setValues} />
           </Grid>
           <Grid
             item
             lg={8}
             md={6}
             xs={12}
           >
             <AccountProfileDetails values={props.values} setValues={props.setValues} setIsSubmit={setIsSubmit} setCountryCode={setCountryCode}/>
           </Grid>
         </Grid>
       </Container>
     </Box>
     </div>
   </div>
     
   </>
  );
};

export default Account;
