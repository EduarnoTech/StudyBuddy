import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Rating from '@mui/material/Rating';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

export default function FormDialog(props) {
  const API_URL = 'https://device6chatapi.el.r.appspot.com/api/sessions';
  let user = JSON.parse(localStorage.getItem("user"));


    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
      };
  const [value, setValue] = React.useState(props?.customer?.rating_client);
  const [hover, setHover] = React.useState(-1);
  const [open, setOpen] = React.useState(false);
  const [reviewVal,setReviewVal]=useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

//   useEffect(()=>{
//     if(props.product.client_comments!==null && props.product.client_comments!='')
//     setCommentsVal(props.product.client_comments)
//   },[props.product.client_comments])


const updateRatingAndReviewsFunc = async () => {
  if (user && user.accessToken && !user.refreshToken) {
    // return { Authorization: 'Bearer ' + user.accessToken };
    // return { "x-auth-token": user.accessToken };
    return axios.post(`${API_URL}/private/updateRatingAndReviews`, {sessionId:props.customer.sessionId,rating_client:value}, {
      headers: { "x-auth-token": user.accessToken },
    });
  } else if (user && user.refreshToken) {
    let payload = {
      token: user.refreshToken,
    };

    try {
      const res = await axios.post(
        `https://device6chatapi.el.r.appspot.com/api/auth/refresh`,
        payload
      );
      if (res.data.accessToken) {
        user.accessToken = res.data.accessToken;
        user.refreshToken = res.data.refreshToken;
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (err) {
      console.log(err);
    }
    // return { Authorization: 'Bearer ' + user.accessToken };
    return axios.post(`${API_URL}/private/updateRatingAndReviews`, {sessionId:props.customer.sessionId,rating_client:value}, {
      headers: { "x-auth-token": user.accessToken },
    });
  } else {
    return axios.post(`${API_URL}/private/updateRatingAndReviews`, {sessionId:props.customer.sessionId,rating_client:value}, {
      headers: {},
    });
  }
};

  const updateRatingAndReviews=async()=>{
    // const sendRatingAndReviews = await axios.post("https://device2api.el.r.appspot.com/client/updateRatingAndReviews", {sessionId:props.customer.sessionId,rating_client:value});
  
    updateRatingAndReviewsFunc().then(

      (response)=>{

    if(response?.data?.success){
      console.log("rating updated")
      setOpen(false)
  }
  else{
    console.log("comment not get updated")
    alert ('Rating not saved.Please try again!!')
    }
  },
  (error)=>{
    console.log("Private page", error.response);
  }
    )
  }

 

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{borderColor:"rgb(80, 72, 229)",color:"rgb(80, 72, 229)"}} >
        Click here
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle style={{alignSelf: "center",color:"black"}}>Rating & Reviews</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please rate this session and give your genuine reviews...!!
          <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
       
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
    {/* <span style={{marginBottom:"5px",color:"black"}}>Given rating -{labels[props?.customer?.rating_client]}</span> */}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Reviews"
            value={reviewVal}
            type=""
            style={{width:"26rem"}}
            onChange={(e)=>setReviewVal(e.target.value)}
            fullWidth
            multiline
            cols={10}
            rows={3}
            maxRows={6}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>Close</Button>
          <Button onClick={updateRatingAndReviews}>Save Changes</Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}