
import React,{useEffect, useState} from 'react';
import moment from 'moment'
import axios from 'axios'
import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography,Button} from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
import Modal from '../modal'

export const ProductCard = ({ product, ...rest }) => {
const [properClientTime,setProperClientTime]=useState()
const [properDuration,setProperDuration]=useState()
const [solutionFolderLink,setSolutionFolderLink] =useState()
// const [openModal,setOpenModal]=useState(false)


useEffect(()=>{
  console.log({timetest:product?.client_time})
  let clientTime1= moment(product?.deadline)?.format('lll');
  let hr=product?.duration?.slice(0,2);
  
  let min=product?.duration?.slice(3);
  
  if(+hr===0){
    if(+min ===0){
      setProperDuration("NA")
    }
    else{
      console.log({minTest:+min+"m"})
      setProperDuration(min+"m")
    }
  }
  else{
    if(+min ===0){
      setProperDuration(hr+"h")
    }
    else{
      setProperDuration(hr+"h"+min+"m")
    }

  }
  setProperClientTime(clientTime1)

},[])

useEffect(()=>{

  const childSolnFolder=async()=>{
  const tutorInfo=JSON.parse(localStorage.getItem('tutor')).saveTutor;

  const createChildSolnFolder=await axios.post(`https://device2api.el.r.appspot.com/api/sessions/childSolutionFolderCreate`,{
    emailId:tutorInfo.email,
    tutorId:tutorInfo.tutor_id,
    clientId:product.client_id,
    sessionId:product.sessionId,
    // sessionStatus:tutor_show?.data?.work_status,
    assignmentStatus:"assigned"
  })
  setSolutionFolderLink(createChildSolnFolder?.data?.solnFolder)
}
  childSolnFolder()

},[])




return(
  <>
  {/* <Modal keepMounted /> */}
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>

    <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
         
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 ,fontSize:"15px"}}
            variant="h6"
          >
          Session Id: <span style={{color:"black",fontSize:"15px",fontWeight:"700" }}>{product.sessionId}</span>
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
        
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 ,fontSize:"15px"}}
            variant="h5"
            
          >
           Status: <span style={{color: product.work_status ==='completed' ? "green" : product.work_status==='cancelled' ? '#d32f2f' :"orange",fontSize:"15px",fontWeight:"700" }}>{product.work_status}</span>
            
          </Typography>
        </Grid>
      </Grid>
   
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >

    <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
        style={{color:"rgb(80, 72, 229)" ,fontSize:"35px"}}
      >
        {product.type}
      </Typography>
      
     

     
        {/* <Avatar
          alt="Product"
          src={product.media}
          variant="square"
        /> */}
      </Box>

      {product.type==="Live Session" && <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
        style={{fontSize: "20px", marginTop:"-45px",paddingBottom: "24px"}}
      >
        (for {properDuration})
      </Typography>}
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
        style={{color:"black" ,fontSize:"30px"}}
      >
       {product.subject}
      </Typography>
      
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
       <span style={{color:"rgba(0, 0, 0, 0.6)"}}> {product.type==='Assignment' ? `Deadline: ` : `Due date & time: ` }</span>
       <span>{properClientTime}</span>
      </Typography>
      {/* <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {product.subject}
      </Typography> */}
      {/* <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {product.client_comments}
      </Typography> */}
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          {/* <ClockIcon color="action" /> */}
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
           <span style={{fontSize: '20px',fontWeight: '600' ,color:"rgb(80, 72, 229)"}}>Amount</span>{" "}<span style={{fontSize: '25px',fontWeight: '600' ,color:"black"}}>{product?.client_amount ? ((product.client_amount)/100)+" "+product.currency : '---'}</span>
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          {/* <DownloadIcon color="action" /> */}
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
            
          >
            <Modal keepMounted product={product} solutionFolderLink={solutionFolderLink} />
            {/* <span style={{fontSize: '20px',fontWeight: '600' ,color:"rgb(80, 72, 229)"}}>Amount</span>{" "}<span style={{fontSize: '25px',fontWeight: '600' ,color:"black"}}>{"$"+product.client_amount}</span> */}
            
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
  </>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
}};
