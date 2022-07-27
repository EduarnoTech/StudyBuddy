import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "../Components/customer/customer-list-results";
import { CustomerListToolbar } from "../Components/customer/customer-list-toolbar";
// import { DashboardLayout } from '../components/dashboard-layout';
import Sidebar from "../Components/sidebarAdmin";
// import { customers } from '../__mocks__/customers';
import Header from "../Components/headerAdmin";
import classes1 from "./screenWidth.module.css";
import "./customers.css";
import Tutor_approval from "../Components/admin/tutor_approval";
import axios from "axios";

const Customers = (props) => {
  const [itsClicked, setItsClicked] = useState("tutor's Approval");
  const [paymentApprovalAr, setPaymentApprovalAr] = useState(props.sessionUser);
  // console.log({ historyAr });

const paymentDetailsCheck=async()=>{
    const paymentDetailsCheckin=await axios.get("https://device6chatapi.el.r.appspot.com/api/tutorweb/getPymentAndPanDetails")
    setPaymentApprovalAr(paymentDetailsCheckin.data.newPaymentDetails)
}

useEffect(()=>{
  paymentDetailsCheck()
},[])

  return (
    <>
      <Sidebar itsClicked={itsClicked} setOpenAdmin={props.setOpenAdmin} />
      <Header profilePic={props?.profilePic} name={props?.values?.name} />
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
        <Container
          maxWidth={false}
          sx={{ backgroundColor: "rgb(248 248 248)" }}
          style={{ width: "47rem" }}
        >
          {/* <CustomerListToolbar
            setHistoryAr={setHistoryAr}
            sessionUser={props.sessionUser}
          />
          <Box sx={{ mt: 3 }}>
            <CustomerListResults
              historyAr={historyAr}
              sessionUser={props.sessionUser}
              style={{ overflowX: 'scroll' }}
            />
          </Box> */}
          <Box sx={{ mt: 3 }}>
            <Tutor_approval paymentApprovalAr={paymentApprovalAr}/>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Customers;
