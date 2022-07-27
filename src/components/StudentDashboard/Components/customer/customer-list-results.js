import React,{ useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import moment from 'moment'
import RatingAndReview from '../ratingAndReview';
import UsePagination from '../pagination';
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  Tooltip,
  TableBody,
  TableSortLabel,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import '../../../common.css'
// import { getInitials } from '../../utils/get-initials';

export const CustomerListResults = (props) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  
   function currentData( data, itemsPerPage) {
    const begin = (page) * itemsPerPage;
    const end = begin + itemsPerPage;
    // setPageVal( data?.slice(begin, end));
    return data?.slice(begin, end)
  }
  useEffect(()=>{
   currentData((props.historyAr!==undefined && props.historyAr.length!==0) ? props.historyAr:props.sessionUser, limit)

  },[page])


  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    console.log({newPage})
    // const begin = (newPage - 1) * limit;
    // const end = begin + limit;
    setPage(newPage);
    // setPagrAr((props?.historyAr!==undefined && props?.historyAr?.length!==0) ? (props?.historyAr.slice(begin,end)):(props?.sessionUser.slice(begin,end)));
    
  };


  

  return (
    
    <Card >
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow style={{backgroundColor:"#8c8c98"}}>
                <TableCell padding="checkbox">
                  {/* <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  /> */}
                </TableCell>
                <TableCell style={{color:"white",fontWeight:"600"}} style={{color:"white"}}>
                  Session Id
                </TableCell>
                <TableCell style={{color:"white",fontWeight:"600"}} style={{color:"white"}}>
                  Subject
                </TableCell>
                
                <TableCell sortDirection="desc" style={{color:"white",fontWeight:"600"}}>
                {/* <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  > */}
                    Date
                  {/* </TableSortLabel>
                </Tooltip> */}
              </TableCell>
                
                <TableCell style={{color:"white",fontWeight:"600"}}>
                  Type
                </TableCell>
                <TableCell style={{color:"white",fontWeight:"600"}}>
                  Amount
                </TableCell>
               
                <TableCell style={{color:"white",fontWeight:"600"}}>
                  Status
                </TableCell>
                <TableCell style={{color:"white",fontWeight:"600"}}>
                  Rating & Reviews
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                    {( currentData((props.historyAr!==undefined && props.historyAr.length!==0) ? props.historyAr:props.sessionUser, limit)!==undefined && currentData((props.historyAr!==undefined && props.historyAr.length!==0) ? props.historyAr:props.sessionUser, limit).length!==0)  ? currentData((props.historyAr!==undefined && props.historyAr.length!==0) ? props.historyAr:props.sessionUser, limit)?.map((customer) => (
                <TableRow
                  hover
                  key={customer.sessionId}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={customer.work_status==='completed'}
                      // onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      {/* <Avatar
                        src={customer.avatarUrl}
                        sx={{ mr: 2 }}
                      > */}
                        {/* {getInitials(customer.name)} */}
                      {/* </Avatar> */}
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.sessionId}
                      </Typography>
                     
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.subject}
                  </TableCell>
                  <TableCell>
                    {moment(customer.client_time).format('ll')}
                  </TableCell>
                  <TableCell>
                    {/* {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`} */}
                    {customer.type}
                  </TableCell>
                  <TableCell>
                   {customer.currency + " "+ customer.client_amount}
                  </TableCell>
                  
                  <TableCell>
                   {customer.work_status}
                  </TableCell>
                  <TableCell>
                 { customer.work_status==='completed' ? <RatingAndReview customer={customer}/>:<span style={{marginLeft:"50px"}}>--</span>}
                  </TableCell>
                </TableRow>
              ))
              : props?.sessionUser.length!==0 ? props?.sessionUser.map((customer)=>(
                <TableRow
                  hover
                  key={customer.sessionId}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={customer.work_status==='completed'}
                      // onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      {/* <Avatar
                        src={customer.avatarUrl}
                        sx={{ mr: 2 }}
                      > */}
                        {/* {getInitials(customer.name)} */}
                      {/* </Avatar> */}
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.sessionId}
                      </Typography>
                     
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.subject}
                  </TableCell>
                  <TableCell>
                    {moment(customer.client_time).format('ll')}
                  </TableCell>
                  <TableCell>
                    {/* {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`} */}
                    {customer.type}
                  </TableCell>
                  <TableCell>
                   {customer.currency + " "+ customer.client_amount}
                  </TableCell>
                  
                  <TableCell>
                   {customer.work_status}
                  </TableCell>
                  <TableCell>
                 { customer.work_status==='completed' ? <RatingAndReview customer={customer}/>:<span style={{marginLeft:"50px"}}>--</span>}
                  </TableCell>
                </TableRow>

              ))
              :
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell style={{fontStyle:"italic"}}> <span> No History Found!</span></TableCell>
                
                
              </TableRow>
              }
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={Math.ceil(((props.historyAr.length!==0 && props.historyAr!==undefined) ? props?.historyAr.length : props?.sessionUser.length))}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};
