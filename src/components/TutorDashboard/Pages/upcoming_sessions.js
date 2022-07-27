import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { products } from "../__mocks__/products";
import { ProductListToolbar } from "../Components/upcoming_session/product-list-toolbar";
import { ProductCard } from "../Components/upcoming_session/product-card";
import Sidebar from "../Components/sidebar";
import Header from "../Components/dashboard-navbar";
import UsePagination from "../Components/pagination";
import classes1 from "./screenWidth.module.css";

const UpcomingSessions = (props) => {
  const [itsClicked, setItsClicked] = useState("upcomingSessions");
  const [upcomingAr, setUpcomingAr] = useState(props.upcomingSessionUser);

  let [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const count = Math.ceil(
    (upcomingAr !== undefined && upcomingAr.length !== 0
      ? upcomingAr.length
      : props.upcomingSessionUser.length) / PER_PAGE
  );
  const _DATA = UsePagination(
    upcomingAr !== undefined && upcomingAr.length !== 0
      ? upcomingAr
      : props.upcomingSessionUser,
    PER_PAGE
  );

  // useEffect(()=>{

  //   _DATA = UsePagination((upcomingAr!==undefined && upcomingAr.length!==0) ? upcomingAr:props.upcomingSessionUser, PER_PAGE);

  // },[upcomingAr])
  console.log({ count });

  const handlePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

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

      <div>
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
          <Container maxWidth={false}>
            <ProductListToolbar
              upcomingSessionUser={props.upcomingSessionUser}
              setUpcomingAr={setUpcomingAr}
            />
            <Box sx={{ pt: 3 }}>
              <Grid container spacing={3}>
                {/* {(upcomingAr!==undefined && upcomingAr.length!==0) ? upcomingAr */}
                {_DATA.currentData() !== undefined &&
                _DATA.currentData().length !== 0 ? (
                  _DATA?.currentData().length !== 0 ? (
                    _DATA?.currentData()?.map((product) => (
                      <Grid item key={product?.sessionId} lg={4} md={6} xs={12}>
                        <ProductCard product={product} />
                      </Grid>
                    ))
                  ) : (
                    <Grid
                      item
                      style={{
                        marginLeft: "42%",
                        fontStyle: "italic",
                        fontSize: "1rem",
                      }}
                      key={"1"}
                      lg={4}
                      md={6}
                      xs={12}
                    >
                      <span>No Upcomming Sessions!</span>
                      {/* <ProductCard  product={product} /> */}
                    </Grid>
                  )
                ) : props.upcomingSessionUser.length !== 0 ? (
                  props?.upcomingSessionUser?.map((product) => (
                    <Grid item key={product.sessionId} lg={4} md={6} xs={12}>
                      <ProductCard product={product} />
                    </Grid>
                  ))
                ) : (
                  <Grid
                    item
                    style={{
                      marginLeft: "42%",
                      fontStyle: "italic",
                      fontSize: "1rem",
                    }}
                    key={"1"}
                    lg={4}
                    md={6}
                    xs={12}
                  >
                    <span>No Upcomming Sessions!</span>
                    {/* <ProductCard  product={product} /> */}
                  </Grid>
                )}
              </Grid>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                pt: 3,
              }}
            >
              <Pagination
                color="primary"
                count={count}
                page={page}
                onChange={handlePage}
                size="small"
              />
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
};

// Products.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

export default UpcomingSessions;
