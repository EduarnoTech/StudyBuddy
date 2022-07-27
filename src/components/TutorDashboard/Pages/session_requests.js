import React, { useState } from "react";
import {Container, Typography, Grid } from "@mui/material";
import Chip from '@mui/material/Chip';
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
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../Components/severity-pill';

const SessionRequests = (props) => {
  // const [itsClicked, setItsClicked] = useState("dashboard");
  const [showedInterest,setShowedInterest] =useState(false)
  const [assignedTutor,setAssignedTutor] =useState(false)
  console.log({ paymentDetailsTest: props.paymentDetails_status });

  const handleChipClick =(sessionId,tutor_id) =>{
    let deviceNo = sessionId.slice(0,1)
     console.log("clicked in the interested button")
    window.open(`https://tutor-response.tutorpoint.in/d${deviceNo}/tutorForm/${sessionId}/${tutor_id}`,"_blank")
    setShowedInterest(true)
  }

  const handleChipClickForAssigned = (sessionId,tutor_id) =>{
    let deviceNo = sessionId.slice(0,1)
    window.open(`https://tutor-response.tutorpoint.in/d${deviceNo}/tutorForm/${sessionId}/${tutor_id}?accept_task=success`,"_blank")
    // setAssignedTutor(true)
  }

  return (
    <>
      <Sidebar itsClicked="session_requests" />
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
            <p style={{ color: "red", textAlign: "center", fontWeight: "600" }}>
              {" "}
              Please enter your bank details
            </p>
          )}
          {props.paymentDetails_status == "new" && (
            <p style={{ color: "red", textAlign: "center", fontWeight: "600" }}>
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
          <Container  >
            <Grid container spacing={3} style={{placeContent:"center"}}>
              <Grid item lg={8} md={12} xl={9} xs={12}>
                <Card>
                  <CardHeader title="Session Requests" />
                  <PerfectScrollbar>
                    <Box sx={{ minWidth: 800 }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Session Id</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Subject</TableCell>
                            <TableCell sortDirection="desc">
                              <Tooltip enterDelay={300} title="Sort">
                                <TableSortLabel active direction="desc">
                                  Date
                                </TableSortLabel>
                              </Tooltip>
                            </TableCell>
                            <TableCell>Status</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {props?.notifiedSession?.length !== 0 ? (
                            props?.notifiedSession?.map((order) => (
                              <>
                                <TableRow hover key={order.sessionId}>
                                  <TableCell>{order.sessionId}</TableCell>
                                  <TableCell>{order.type}</TableCell>
                                  <TableCell>{order.subject}</TableCell>
                                  <TableCell>
                                    {/* {format(changedDate, 'dd/MM/yyyy')} */}
                                    {moment(order?.deadline).format("ll")}
                                  </TableCell>
                                  <TableCell>
                                    
                                    {/* <SeverityPill
                                      color={
                                        (order.work_status === "Completed" &&
                                          "success") ||
                                        (order.work_status === "Cancelled" &&
                                          "error") ||
                                        "warning"
                                      }
                                    >
                                      {order.work_status}
                                    </SeverityPill> */}
                                  {!order.showedInterest ?  <Chip label="Show Interest" variant="outlined" onClick={()=>handleChipClick(order.sessionId,order.tutor_id)}/>
                                   
                                  :
                                  order.acceptRequest ?
                                  <Chip label="Accept Session" variant="outlined" onClick={()=>handleChipClickForAssigned(order.sessionId,order.tutor_id)} style={{color:"green"}}/>
                                  :
                                  <Chip label="Shown Interest" variant="outlined" disabled/>
                                  }
                                  
                                  </TableCell>
                                </TableRow>
                              </>
                            ))
                          ) : (
                            <TableRow
                            // style={{alignSelf:"center"}}
                            // hover
                            // key="1"
                            >
                              <TableCell></TableCell>
                              <TableCell></TableCell>

                              <TableCell
                                style={{
                                  fontWeight: "500",
                                  fontSize: "1rem",
                                  fontStyle: "italic",
                                  textAlign: "center",
                                }}
                              >
                                <span>No Session Found !</span>
                              </TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </Box>
                  </PerfectScrollbar>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      p: 2,
                    }}
                  >
                    {/* <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button> */}
                  </Box>
                </Card>
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

export default SessionRequests;
