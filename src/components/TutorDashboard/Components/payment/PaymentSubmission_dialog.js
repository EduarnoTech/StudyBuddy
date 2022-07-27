import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";

export default function AlertDialog({showPaymentSub_dia,paymentDetails,setValues,values,setShowPaymentSub_dia}) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(()=>{
      if(showPaymentSub_dia===true){
    setOpen(showPaymentSub_dia);
      }
  },[])
  const submitDetails = async() => {
    let formdataPayment = new FormData();
    formdataPayment.append("accountNo", paymentDetails.accountNo);
      formdataPayment.append("accountName", paymentDetails.accountName);
      formdataPayment.append("ifsc", paymentDetails.ifsc);
      formdataPayment.append("upi_id", paymentDetails.upi_id);
      formdataPayment.append("passbook", paymentDetails.passbook);
      formdataPayment.append("pan", paymentDetails.pan);
      formdataPayment.append("panPic", paymentDetails.panPic);
      // const watsNumber = props.values.watsNumber;
      const whatsFunc = await axios.post(
        // "https://device6chatapi.el.r.appspot.com/api/conversations/contactValidation",
        `https://device6chatapi.el.r.appspot.com/api/tutorweb/setTutorPaymentDetailsWeb/${
          JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutor_id
        }`,
        formdataPayment
      );

     setValues({
        ...values,
        paymentDetails_status:"new"
      })
      setOpen(false);
      setShowPaymentSub_dia(false)

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
      
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation for account details change"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are you sure to update these account details.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitDetails} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
