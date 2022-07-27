import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import AccountProfile from "../Components/account/account-profile";
import PaymentDetails from "../Components/payment/Payment_details";
import PaymentList from "../Components/payment/Payment_list";
import Navi from "../../Dashboard/Navi";

// import Header from "../Components/dashboard-navbar"
import axios from "axios";
import { decode as atob, encode as btoa } from "base-64";
// import Header from "../../Dashboard/Header";
import Header from "../Components/dashboard-navbar";
import Sidebar from "../Components/sidebar";
import classes1 from "./screenWidth.module.css";
// import { DashboardLayout } from '../Components/dashboard-layout';

const Payment = (props) => {
  const [itsClicked, setItsClicked] = useState("payment");
  const [isSubmit, setIsSubmit] = useState(false);
  const [countryCode, setCountryCode] = useState(
    props?.values?.countryCode?.slice(2, -1)
  );

  const API_URL = "https://device6chatapi.el.r.appspot.com/api/sessions";
  const API_URL_CONV =
    "https://device6chatapi.el.r.appspot.com/api/conversations";

  let tutor = JSON.parse(localStorage.getItem("tutor"));

  let postData = {
    tutor_id: JSON.parse(window.localStorage.getItem("tutor")).saveTutor
      .tutor_id,
    name: props?.values?.name,
    email: props?.values?.email,
    dateOfBirth: props?.values?.dateOfBirth,
    dept: props?.values?.dept,
    university: props?.values?.university,
    socialmedia: props?.values?.facebookUsername,
    countryCode: props?.values?.countryCode,
    watsNumber: props?.values?.watsNumber,
    country: props?.values?.country,
    city: props?.values?.city,
    writer: props?.values?.writer,
  };

  let postData1 = {
    tutor_id: JSON.parse(window.localStorage.getItem("tutor")).saveTutor
      .tutor_id,
    name: props?.values?.name,
    email: props?.values?.email,
    dateOfBirth: props?.values?.dateOfBirth,
    dept: props?.values?.dept,
    university: props?.values?.university,
    socialmedia: props?.values?.facebookUsername,
    countryCode: props?.values?.countryCode,
    watsNumber: props?.values?.watsNumber,
    country: props?.values?.country,
    city: props?.values?.city,
    writer: props?.values?.writer,
  };

  const updateTutorAccountFunc = async (postData) => {
    if (tutor && tutor.accessToken && !tutor.refreshToken) {
      // return { Authorization: 'Bearer ' + tutor.accessToken };
      // return { "x-auth-token": tutor.accessToken };
      return axios.post(
        `https://device6chatapi.el.r.appspot.com/api/sessions/private/updateTutorAccount`,
        postData,
        {
          headers: { "x-auth-token": tutor.accessToken },
        }
      );
    } else if (tutor && tutor.refreshToken) {
      let payload = {
        token: tutor.refreshToken,
      };

      try {
        const res = await axios.post(
          `https://device6chatapi.el.r.appspot.com/api/auth/refresh`,
          payload
        );
        if (res.data.accessToken) {
          tutor.accessToken = res.data.accessToken;
          tutor.refreshToken = res.data.refreshToken;
          localStorage.setItem("tutor", JSON.stringify(tutor));
        }
      } catch (err) {
        console.log(err);
      }
      // return { Authorization: 'Bearer ' + tutor.accessToken };
      return axios.post(
        `https://device6chatapi.el.r.appspot.com/api/sessions/private/updateTutorAccount`,
        postData,
        {
          headers: { "x-auth-token": tutor.accessToken },
        }
      );
    } else {
      return axios.post(
        `https://device6chatapi.el.r.appspot.com/api/sessions/private/updateTutorAccount`,
        postData,
        {
          headers: {},
        }
      );
    }
  };

  const updateAccount = async () => {
    // const updateTutorInfo=await axios.post("https://device6chatapi.el.r.appspot.com/api/tutor/updateTutorInfo",{tutor_id:tutor.saveTutor.tutor_id})
    // if(updateTutorInfo.data){
    //   console.log("done")
    // }
    updateTutorAccountFunc(postData).then(
      async (response) => {
        const updateTutorInfo = await axios.post(
          `https://device2api.el.r.appspot.com/api/tutor/updateTutorInfo/${
            JSON.parse(window.localStorage.getItem("tutor")).saveTutor.tutor_id
          }`,
          postData1
        );
        if (updateTutorInfo.data) {
          if (response.data && response.data.length != 0) {
            alert("Your profile has been updated successfully!");
            // window.location.reload();
          } else {
            alert("Something went wrong. Please try again later...!");
          }
        } else {
          alert("Tutors not updated!Please try again");
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
      setIsSubmit(false);
      // updateAccountConv()
    }
  }, [isSubmit]);

  return (
    <>
      <Sidebar itsClicked={itsClicked} />
      <Header
        profilePic={props?.values?.profilePic}
        name={props?.values?.name}
        noti={props?.values?.newNotification}
        tutorId = {props?.values?.tutor_id}
        readNoti={props?.readNoti}
        setReadNoti={props?.setReadNoti}
      />

      <div
        style={{
          height: "50rem",
          backgroundColor: "#F9FAFC",
          // display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{ paddingRight: "0px", paddingTop: "50px" }}
          className={classes1.screenBigProfile}
        >
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 8,
            }}
            style={{ paddingLeft: "0px", paddingRight: "0px" }}
          >
            {(props?.paymentDetails_status == undefined ||
              props?.paymentDetails_status == null) && (
              <p style={{ color: "red", textAlign: "center", fontWeight: "600" }}> Please enter your bank details</p>
            )}
            {props?.paymentDetails_status == "new" && (
              <p style={{ color: "red", textAlign: "center", fontWeight: "600" }}>
                {" "}
                Wait for your bank details to approve{" "}
              </p>
            )}
            {props?.paymentDetails_status == "reject" && (
              <p
                style={{ color: "red", textAlign: "center", fontWeight: "600" }}
              >
                {" "}
                Bank details are not correct.Please enter correct details!
              </p>
            )}

          {(props?.values?.pan == undefined ||
              props?.values?.pan == null || props?.values?.pan.length==0 ) && (
              <p style={{ color: "red", textAlign: "center", fontSize:"14px"}}> Please upload your PAN card. If you fail to provide PAN card details, then we will have to deduct TDS at a rate of 20%.</p>
            )}

            <Container maxWidth="lg" style={{ minWidth: "100%" }}>
              <Typography
                sx={{ mb: 3 }}
                variant="h4"
                style={{ color: "#121828", fontSize: "2.5rem" }}
              >
                Payments
              </Typography>
              <Grid container spacing={3}>
                <Grid item lg={8} md={6} xs={12}>
                  <PaymentDetails
                    values={props?.values}
                    setValues={props?.setValues}
                    setIsSubmit={setIsSubmit}
                    setCountryCode={setCountryCode}
                  />
                </Grid>
              </Grid>
            </Container>
            <PaymentList tutorId={props?.values?.tutor_id}/>
            {/* <Container maxWidth="lg" style={{minWidth:"100%"}}> 
         <Grid
           container
           spacing={3}
         >
           <Grid
             item
             lg={8}
             md={6}
             xs={12}
           >
             <PaymentList />
           </Grid>
         </Grid>
       </Container> */}
          </Box>
        </div>
      </div>
    </>
  );
};

export default Payment;
