import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";


export default function AlertDialog({showAccSub_dia,setShowAccSub_dia}) {
  const [open, setOpen] = React.useState(false);

  const history = useHistory()
  
  React.useEffect(()=>{
      if(showAccSub_dia===true){
    setOpen(showAccSub_dia);
      }
  },[])
  const submitDetails = async() => {
    let tutor1 = JSON.parse(localStorage.getItem("tutor"));
    let tutor_ls = JSON.parse(localStorage.getItem("tutor")).saveTutor;
    
    let temp_tutorSaveObj = {
      ...tutor_ls,
      tutStatus: "ex"
    };
    console.log({ tutor_ls });
    let temp_tutorObj = {
      ...tutor1,
      saveTutor: temp_tutorSaveObj
    };

    let tutor_stringified = JSON.stringify(temp_tutorObj);
    localStorage.setItem("tutor", tutor_stringified);

      history.replace("/tutor_exam")

      setOpen(false);
      setShowAccSub_dia(false)
      window.location.reload()
  };

  const handleClose = () => {
    setOpen(false);
    setShowAccSub_dia(false)
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
          {"Entrance to exam portal"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          You need to give exam for adding a new subject.<br/>Click NEXT to open exam portal 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitDetails} autoFocus>
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
