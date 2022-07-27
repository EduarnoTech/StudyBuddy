import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../Components/customer/customer-list-results';
import { CustomerListToolbar } from '../Components/customer/customer-list-toolbar';
// import { DashboardLayout } from '../components/dashboard-layout';
import Sidebar from '../Components/sidebar';
// import { customers } from '../__mocks__/customers';
import Header from '../Components/dashboard-navbar';
import classes1 from './screenWidth.module.css';
import './customers.css';

const Customers = (props) => {
  const [itsClicked, setItsClicked] = useState('history');
  const [historyAr, setHistoryAr] = useState(props.sessionUser);
  console.log({ historyAr });
  return (
    <>
      <Sidebar itsClicked={itsClicked} />
      <Header profilePic={props.profilePic} name = {props.values.username} />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8,
          backgroundColor: 'rgb(248 248 248)',
        }}
        style={{ paddingTop: '135px', marginTop: '-4rem' }}
        className={classes1.screenBigSize}
      >
        <Container
          maxWidth={false}
          sx={{ backgroundColor: 'rgb(248 248 248)' }}
        >
          <CustomerListToolbar
            setHistoryAr={setHistoryAr}
            sessionUser={props.sessionUser}
          />
          <Box sx={{ mt: 3 }}>
            <CustomerListResults
              historyAr={historyAr}
              sessionUser={props.sessionUser}
              style={{ overflowX: 'scroll' }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Customers;
