import React,{useEffect,useState} from "react";
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const TotalCustomers = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            ASSIGNMENTS  (PENDING)
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.upcomingAssignment?props.upcomingAssignment:"0"}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <AssignmentIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        {/* <ArrowUpwardIcon color="success" /> */}
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          {/* 16% */}
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          {/* Since last month */}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
