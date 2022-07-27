import React from "react";
// import History from './History';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './AddHistory.scss'

const AddHistory = (props) => {
  //    const date1=props.date.toDateString();
  console.log(props.isClick);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const card = (
    <React.Fragment>
      {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}

      <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1uiapoe">
        <div class="MuiCardHeader-root css-1ch9if7">
          <div class="MuiCardHeader-content css-11qjisw">
            <span class="MuiTypography-root MuiTypography-h5 MuiTypography-alignCenter MuiCardHeader-title css-19nh575">
              Free
            </span>
          </div>
        </div>
        <div class="MuiCardContent-root css-1qw96cp">
          <div class="MuiBox-root css-uwdvlb">
            <h2 class="MuiTypography-root MuiTypography-h3 css-1tnu52l"></h2>
            <h6 class="MuiTypography-root MuiTypography-h6 css-gzhmdl">/mo</h6>
          </div>
          <ul>
            <li class="MuiTypography-root MuiTypography-subtitle1 MuiTypography-alignCenter css-3kp6hn">
              10 users included
            </li>
            <li class="MuiTypography-root MuiTypography-subtitle1 MuiTypography-alignCenter css-3kp6hn">
              2 GB of storage
            </li>
            <li class="MuiTypography-root MuiTypography-subtitle1 MuiTypography-alignCenter css-3kp6hn">
              Help center access
            </li>
            <li class="MuiTypography-root MuiTypography-subtitle1 MuiTypography-alignCenter css-3kp6hn">
              Email support
            </li>
          </ul>
        </div>
        <div class="MuiCardActions-root MuiCardActions-spacing css-3zukih">
          <button
            class="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButtonBase-root css-1ayvezf"
            tabindex="0"
            type="button"
          >
            Sign up for free<span class="MuiTouchRipple-root css-w0pj6f"></span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
  return (

    // last one that is being used


    // <Box sx={{ minWidth: 275 }}>
    //   <Card variant="outlined">{card}</Card>
    // </Box>

    // end here



    //  <div class="h_p_list">
    //             <div class="h_price_item memory" data-title="Memory">
    //               <h5>{props.date}</h5>
    //             </div>
    //             {/* <div class="h_price_item" data-title="Vcpus">
    //               <h5>{props.session}</h5>
    //             </div> */}
    //             <div class="h_price_item" data-title="Ssd disk">
    //               <h5>{props.subject}</h5>
    //             </div>
    //             {!props.isClick && <div class="h_price_item" data-title="Ssd disk">
    //               <h5>{props.sessionDate}</h5>
    //             </div>}
    //             <div class="h_price_item" data-title="Transfer">
    //               <h5>{props.status}</h5>
    //             </div>
    //             <div class="h_price_item" data-title="Transfer">
    //               <h5>{props.charges}</h5>
    //             </div>
    //             {/* <div class="h_price_item" data-title="Transfer">
    //               <h5>{props.charges}</h5>
    //             </div> */}
    //             <div class="h_price_item" data-title="Price">
    //               <h5>
    //                 {/* <span>$10/mo</span>$0.025/hr */}{props.payment}
    //               </h5>
    //             </div>
    //             <div className="h_price_item c_width">
    //                                                           <h5><a href="/#" className="h_price_btn">Chat with us</a></h5>
    //                                                       </div>
    //           </div>




    <section class="page-contain">
  <a href="#" class="data-card">
    <h3>{props.date}</h3>
    <h4>{props.subject}</h4>
    <p>Charges:{props.charges}<br/>Payment:{props.payment}</p>
    <span class="link-text">
   Status: {props.status}
   {!props.isClick && <p>Session Date: {props.sessionDate}</p>}
      {/* <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
</svg> */}
    </span>
  </a>
 
</section>


  );
};
export default AddHistory;
