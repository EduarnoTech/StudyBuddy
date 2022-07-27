import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TutorBankInfo from './tutorBankInfo'
import axios from 'axios';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [];

export default function DenseTable({paymentApprovalAr}) {

const updatePaymentDetailsStatusAccept=async(tutorId,accountNo,upi_id,ifsc,pan)=>{
 
    const updatePaymentDet1=await axios.put(`https://device6chatapi.el.r.appspot.com/api/tutorweb/setTutorPaymentDetailsStatus/${tutorId}`,{
      status:"accept"
    });
    if(updatePaymentDet1.data){
     
      let tagsAr=updatePaymentDet1.data.tagsAr;
      
      const updateBankDetails=await axios.put(`https://device2api.el.r.appspot.com/api/tutor/updateTutorPaymentDetails/${tutorId}`,{
       accountNo:accountNo,
        upi_id:upi_id,
        ifsc:ifsc,
        pan:pan,
        tutor_status:"active",
        tags:tagsAr,
        device_type:"tp"
      })

      window.location.reload()
    }

  }
  const updatePaymentDetailsStatusReject= async(tutorId)=>{
    const updatePaymentDet2=await axios.put(`https://device6chatapi.el.r.appspot.com/api/tutorweb/setTutorPaymentDetailsStatus/${tutorId}`,{ 
      status:"reject"
    });
    if(updatePaymentDet2.data){
     
      window.location.reload()
    }

  
}

  const pay1=paymentApprovalAr?.map((el2)=>{
      rows.push(el2)
  })
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Tutor's Name</TableCell>
            <TableCell align="right">Tutor's Id</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"> </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.tutor_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.tutor_id}</TableCell>
              <TableCell align="right"><Button style={{color:"blue"}}>
              <TutorBankInfo key={index} paymentInfo={row}/>
                </Button></TableCell>
              <TableCell align="right"><Button onClick={()=>updatePaymentDetailsStatusAccept(row.tutor_id,row.Bank.acc_no,row.Bank.upi_id,row.Bank.ifsc_code,row.pan)} style={{color:"green"}}>
                Accept
                </Button></TableCell>
              <TableCell align="right"><Button onClick={()=>updatePaymentDetailsStatusReject(row.tutor_id)} style={{color:"red"}}>
                Reject
                </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
