import React,{useEffect,useState} from "react";
import moment from 'moment';
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
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
import { SeverityPill } from '../severity-pill';



export const LatestOrders = (props) => {
  // const [changedDate,setChangedDate]=useState()
  // let date1=moment(props.client_time).format('dd/mm/yyyy')
  
  // setChangedDate(date1)
  return(
  <Card >
    <CardHeader title="Latest Sessions" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Session Id
              </TableCell>
              <TableCell>
                Type
              </TableCell>
              <TableCell>
                Subject
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {props?.allSessions?.length!==0 ? props?.allSessions?.slice(0,8)?.map((order) => (
              < >
              <TableRow
                hover
                key={order.sessionId}
                
              >
                <TableCell>
                  {order.sessionId}
                </TableCell>
                <TableCell>
                  {order.type}
                </TableCell>
                <TableCell>
                  {order.subject}
                </TableCell>
                <TableCell>
                  {/* {format(changedDate, 'dd/MM/yyyy')} */}
                  {moment(order?.client_time).format('ll')}
                </TableCell>
                <TableCell>
                  <SeverityPill
                    color={(order.work_status === 'completed' && 'success')
                    || (order.work_status === 'cancelled' && 'error')
                    || 'warning'}
                  >
                    {order.work_status}
                  </SeverityPill>
                </TableCell>
              </TableRow>
              </>
            ))
          : <TableRow
          // style={{alignSelf:"center"}}
          // hover
          // key="1"
          
        >
          <TableCell></TableCell>
          <TableCell></TableCell>
          
         <TableCell style={{fontWeight:"500",fontSize:"1rem" ,fontStyle:"italic",textAlign:"center"}}>
           <span  >No Session Found !</span>
           </TableCell>
          </TableRow>
          }
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
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
)};
