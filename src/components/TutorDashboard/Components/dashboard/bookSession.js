import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import classes from "./bookSession.module.css";
import Box from '@mui/material/Box';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const BookSession = (props) => {
  const [open, setOpen] = useState(false);
  const [sessionData, setSessionData] = useState([]);
  const [linkProcess, setLinkProcess] = useState(false);

  const linkBaseURL = `https://client-response.tutorpoint.in/d6/live-session-form`;

  // const getSessionDet = async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://device6chatapi.el.r.appspot.com/api/sessions/getSessionDetails/${props.clientId}`,
  //         {
  //           headers: '',
  //         }
  //       );
  //       setSessionData(res?.data?.result);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   useEffect(()=>{
  //     getSessionDet()

  //   },[])

  const linkGenerator = async () => {
    // getSessionDet()
    // setBtnDisabled(true);
    setLinkProcess(true)

    const getSessionDet = await axios.get(
      `https://device6chatapi.el.r.appspot.com/api/sessions/getSessionDetails/${props.clientId}`,
      {
        headers: "",
      }
    );
    // setSessionData(res?.data?.result);
    let resultGetSessionDet = getSessionDet?.data?.result;

    const payload = {
      session_id:
        resultGetSessionDet.length > 0
          ? +resultGetSessionDet[resultGetSessionDet.length - 1]?.session_id +
            1 +
            ""
          : props.clientId + "1010",
      client_id: props.clientId,
    };
    try {
      const res = await axios.post(
        "https://device6chatapi.el.r.appspot.com/api/sessions/createSession",
        payload,
        {
          headers: "",
        }
      );

      // generating g-drive link for session form
      const payload2 = {
        sessionId: res?.data?.result.session_id,
        clientId: res?.data?.result.client_id,
      };
      const res2 = await axios.post(
        `https://device6chatapi.el.r.appspot.com/api/sessions/folderBuilder`,
        payload2
      );
     

      const link = `${linkBaseURL}/${res?.data?.result.session_id}/${res?.data?.result.client_id}`;
      //   setFormLink(link);

      if (link) {
        setLinkProcess(false)
        window.open(link, "_blank");
      }
    } catch (err) {
      // setBtnDisabled(false);
      console.log(err);
    }
  };

  return (
    <>
      <div onClick={linkGenerator}  className={classes.clickHere}>
        <span>Book Session Here!</span>{" "}
       {linkProcess && <CircularProgress color="inherit"/>}
      </div>
      <div>
        <div>Or</div>
        <span>
          {" "}
          <a
            className={classes.clickHereWa}
            href="https://wa.me/917070505631?text=Book New Session!"
            target="_blank"
          >
            WhatsApp Now <WhatsAppIcon style={{ fontSize: "35px" }} />
          </a>
        </span>
      </div>
    </>
  );
};

export default BookSession;
