import React, { useState } from "react";
import { Box, Container, Typography, Grid, Card } from "@mui/material";
import { Budget } from "../Components/dashboard/budget";
import { LatestOrders } from "../Components/dashboard/latest-orders";
import { LatestProducts } from "../Components/dashboard/latest-products";
import { Sales } from "../Components/dashboard/sales";
import { TasksProgress } from "../Components/dashboard/tasks-progress";
import { TotalCustomers } from "../Components/dashboard/total-customers";
import { TotalProfit } from "../Components/dashboard/total-profit";
import { TrafficByDevice } from "../Components/dashboard/traffic-by-device";
import Sidebar from "../Components/sidebar";
import Header from "../Components/dashboard-navbar";
import classes from "../Components/bookSessionNew.module.css";
import BookSession from "../Components/dashboard/bookSession";
import classes1 from "./screenWidth.module.css";

const Dashboard = (props) => {
  // const [itsClicked, setItsClicked] = useState("dashboard");
  console.log({ paymentDetailsTest: props.paymentDetails_status });
  return (
    <>
      <Sidebar itsClicked="dashboard" />
      <Header
        profilePic={props?.values?.profilePic}
        name={props?.values?.name}
        noti={props?.values?.newNotification}
        tutorId = {props?.values?.tutor_id}
        readNoti={props?.readNoti}
        setReadNoti={props?.setReadNoti}
      />

      <div>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
            backgroundColor: "rgb(248 248 248)",
          }}
          style={{ marginTop: "30px" }}
          className={classes1.screenBigSize}
        >
          {(props.paymentDetails_status == undefined ||
            props.paymentDetails_status == null) && (
            <p style={{ color: "red",textAlign: "center", fontWeight: "600" }}> Please enter your bank details</p>
          )}
          {props.paymentDetails_status == "new" && (
            <p style={{ color: "red" , textAlign: "center", fontWeight: "600"}}>
              {" "}
              Wait for your bank details to approve{" "}
            </p>
          )}
          {props.paymentDetails_status == "reject" && (
            <p style={{ color: "red", textAlign: "center", fontWeight: "600" }}>
              {" "}
              Bank details are not correct.Please enter correct details!
            </p>
          )}
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Budget rating={props.values.rating} />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <TotalCustomers upcomingAssignment={props.upcomingAssignment} />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <TasksProgress totalSessions={props.totalSessions} />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <TotalProfit sx={{ height: "100%" }} values={props.values} />
              </Grid>
              {/* <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid> */}
              {/* <Grid item lg={4} md={6} xl={3} xs={12}> */}
              {/* <LatestProducts sx={{ height: '100%' }} /> */}
              {/* <Typography >
                <div class={classes.card} style={{display:"flex"}}>
                  <div class={classes.content}>
                    <div class={classes.front}>BOOK A <br/> NEW  SESSION!<div><p style={{color:"black" ,fontSize:"20%"}}> It can either be an assignment or a live session.</p></div></div>
                    <div class={classes.back} style={{paddingTop:"25%" ,fontSize:"30px"}}><BookSession clientId={props.values.client_id}/> </div>
                  </div>
                </div>
                </Typography> */}
              {/* </Grid> */}
              <Grid item lg={8} md={12} xl={9} xs={12}>
                <LatestOrders allSessions={props.allSessions} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </>
  );
};

// Dashboard.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

export default Dashboard;
