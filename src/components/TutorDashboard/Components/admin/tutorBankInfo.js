import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { decode as atob, encode as btoa } from "base-64";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ paymentInfo }) {
  const [open, setOpen] = React.useState(false);
  const [passAr, setPassAr] = React.useState([]);
  const [panAr, setPanAr] = React.useState([]);

  const handleClickOpen = () => {
    let passbookAr = [];
    let panpicAr = [];
    console.log({dataTest:paymentInfo?.Bank?.passbook?.data})
    passbookAr.push(
      btoa(
        new Uint8Array(paymentInfo?.Bank?.passbook?.data).reduce(function (data,byte) {
          return data + String.fromCharCode(byte);
        },
        "")
      )
    );
    setPassAr(passbookAr);
    panpicAr.push(
      btoa(
        new Uint8Array(paymentInfo?.panPic?.data).reduce(function (data, byte) {
          return data + String.fromCharCode(byte);
        }, "")
      )
    );
    setPanAr(panpicAr)
    console.log({ passbookAr, panpicAr });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log({ testPayment: paymentInfo });

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Info
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Tutor's Info
        </BootstrapDialogTitle>
        <DialogContent dividers>
          
          <Typography gutterBottom>
          <p style={{fontWeight:"700",fontSize:"30px"}}>Bank Account</p>
            Account Name <p style={{fontWeight:"600"}}>{paymentInfo.Bank.acc_name}</p>  Account Number{" "}
            <p style={{fontWeight:"600"}}>{paymentInfo.Bank.acc_no}</p>
            IFSC <p style={{fontWeight:"600"}}>{paymentInfo.Bank.ifsc_code}</p> UPI Id <p style={{fontWeight:"600"}}>{paymentInfo.Bank.upi_id}</p>
          </Typography>
          {/* <Typography gutterBottom> */}
          <div
            style={{
              textAlign: "-webkit-center",
              height: "25rem",
              overflowY: "scroll",
            }}
          >
            {passAr?.map((el1) => (
              <div>
                <img
                  src={`data:image/jpeg;base64,${el1}`}
                  alt=""
                  style={{ width: "30rem" }}
                  
                />
              </div>
            ))}
          </div>
          {/* </Typography> */}
         
          <Typography gutterBottom>
          <p style={{fontWeight:"700",fontSize:"30px"}}>Pan Card</p>
            Pan Card Number <p style={{fontWeight:"600"}}>{paymentInfo.pan}</p>
          </Typography>
          <div
            style={{
              textAlign: "-webkit-center",
              height: "25rem",
              overflowY: "scroll",
            }}
          >
            {panAr?.map((el1) => (
              <div>
                <img
                  src={`data:image/jpeg;base64,${el1}`}
                  alt=""
                  style={{ width: "30rem" }}
                  
                />
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
