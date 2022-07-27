import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "../Components/customer/customer-list-results";
import { CustomerListToolbar } from "../Components/customer/customer-list-toolbar";
// import { DashboardLayout } from '../components/dashboard-layout';
import Sidebar from "../Components/sidebar";
// import { customers } from '../__mocks__/customers';
import Header from "../Components/dashboard-navbar";
import classes1 from "./screenWidth.module.css";
import "./customers.css";

const Customers = (props) => {
  const [itsClicked, setItsClicked] = useState("history");
  const [historyAr, setHistoryAr] = useState(props.sessionUser);
  console.log({ historyAr });
  return (
    <>
      <Sidebar itsClicked={itsClicked} />
      <Header
        profilePic={props.profilePic}
        name={props.values.name}
        noti={props?.values?.newNotification}
        tutorId = {props?.values?.tutor_id}
        readNoti={props?.readNoti}
        setReadNoti={props?.setReadNoti}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          backgroundColor: "rgb(248 248 248)",
        }}
        style={{ paddingTop: "135px", marginTop: "-4rem" }}
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
        <Container
          maxWidth={false}
          sx={{ backgroundColor: "rgb(248 248 248)" }}
        >
          <CustomerListToolbar
            setHistoryAr={setHistoryAr}
            sessionUser={props.sessionUser}
          />
          <Box sx={{ mt: 3 }}>
            <CustomerListResults
              historyAr={historyAr}
              sessionUser={props.sessionUser}
              style={{ overflowX: "scroll" }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Customers;
