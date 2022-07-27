import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import Link from '@mui/material/Link';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { createSessionUrl } from '../../serviceUrls/Message-Services';


const FormCreation = ({ clientId, clientWaId, clientName, agent }) => {
  const [open, setOpen] = useState(false);
  const [sessionData, setSessionData] = useState([]);
  const [formLink, setFormLink] = useState();
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [clientAmt, setClientAmt] = useState();
  const [currency, setCurrency] = useState('USD')
  const [values, setValues] = useState({
    numberformat: '1320',
  });
  let deviceNo = localStorage.getItem('device');
  const linkBaseURL = `https://client-response.tutorpoint.in/d${deviceNo}/live-session-form`;

  const handleClickOpen = () => {
    getSessionDet();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormLink('');
    setBtnDisabled(false);
  };

  const handleChangeAmt = (event) => {
    console.log(event.target.value)
    setClientAmt(event.target.value);
  };

  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
    console.log(event.target.value)
  };

  //session form link creation
  const getSessionDet = async () => {
    try {
      const res = await axios.get(
        // `${localStorage.getItem('api')}/api/sessions/getSessionDetails/${clientId}`,
        "https://annular-arena-331607.el.r.appspot.com/api/sessions/getSessionDetails/${clientId}",
        {
          headers: '',
        }
      );
      setSessionData(res?.data?.result);
    } catch (err) {
      console.log(err);
    }
  };

  const linkGenerator = async () => {


    const getSessionDet = async () => {
      try {
        const res = await axios.get(
          `${localStorage.getItem('api')}/api/sessions/getSessionDetails/${clientId}`,
          {
            headers: '',
          }
        );
        setSessionData(res?.data?.result);
      } catch (err) {
        console.log(err);
      }
    };
    // setBtnDisabled(true);
    const payload = {
      // session_id: sessionData.length > 0 ? +sessionData[sessionData.length - 1]?.session_id + 1 + '' : clientId + '1010',
      session_id:sessionId,
      client_id: clientId,
      // client_waId: clientWaId,
      // client_name: clientName,
      // session_agent: agent,
      // client_amount: clientAmt,
      // currency: currency
    };
    try {
      const res1 = await axios.post(
        createSessionUrl,
        payload,
        {
          headers: '',
        }
      );
      
      // generating g-drive link for session form
      // const payload2 = {
      //   sessionId: res?.data?.result.session_id,
      //   clientId: res?.data?.result.client_id
      // }
      // const res2 = await axios.post(`${localStorage.getItem('api')}/api/sessions/folderBuilder`, payload2);

      const link = `${linkBaseURL}/${res?.data?.result.session_id}/${res?.data?.result.client_id}?agent=success&key=poc_y6d_ui9`;
      setFormLink(link);
      // const tempBody = {
      //   name: clientName,
      //   from: '',
      //   wa_id: clientWaId,
      //   templateName: "clientsessionform_create_send_917761093194",
      //   templateText: "Hi *{{1}}*, This is Tutorpoint\n\nPlease click on the button below to submit your assignment work or book a live question session with us. \n\nAfter submitting the request, wait for sometime to get the confirmation about the price and deadline from us. We will start only after you have confirmed the price and deadline of session with our agent.\n\nPlease fill the form carefully. For any issues, you can call us by clicking the button below.\n\n",
      //   template: {
      //     namespace: "1ff427bd_e20d_4582_a530_e28f311cc595",
      //     language: "en",
      //   },
      //   param1: "Session Request " + res?.data?.result.session_id,
      //   param2: clientName,
      //   param3: `d${deviceNo}/live-session-form/${res?.data?.result.session_id}/${res?.data?.result.client_id}`,
      //   button: '',
      //   timestamp: '',
      //   operatorName: '',
      //   isOwner: true,
      //   status: '',
      //   ticketId: '',
      //   eventType: 'template',
      // };
      // const sendTemplate = await axios.post(`${localStorage.getItem('api')}/api/messages/clientTemplate`, tempBody, {
      //   headers: '',
      // }
      // );
      setBtnDisabled(true);
    } catch (err) {
      setBtnDisabled(false);
      console.log(err);
    }
  };

  return (
    <div>
      {/* <DynamicFormIcon
        fontSize='medium'
        className='templateMsg'
        onClick={handleClickOpen}
      /> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Form Link</DialogTitle>
        <DialogContent style={{ marginBottom: '20px', marginTop: '20px' }}>
          <label style={{ fontSize: '13px' }}>Session ID</label>
          <TextField
            // autoFocus
            margin='dense'
            id='name'
            // label="Session ID"
            // placeholder="Session ID"
            type='text'
            value={sessionData.length > 0 ? +sessionData[sessionData.length - 1]?.session_id + 1 + '' : clientId + '1010'}
            fullWidth
            variant='standard'
            style={{ marginBottom: '30px' }}
          />
          <label style={{ fontSize: '13px' }}>Client ID</label>
          <TextField
            // autoFocus
            margin='dense'
            id='name'
            // label="Session ID"
            // placeholder="Session ID"
            type='text'
            value={clientId}
            style={{ marginBottom: '27px' }}
            fullWidth
            variant='standard'
          />
          {/* <label style={{ fontSize: '13px' }}>Client Amount</label>
          <FormControl fullWidth style={{display: 'flex', flexDirection: 'row'}}>
        <NativeSelect
          defaultValue='USD'
          inputProps={{
            name: 'amount',
            id: 'uncontrolled-native',
          }}
          style={{ width: '20%', padding: '6px 5px', marginTop: '8px', fontSize: '14px'}}
          onChange={handleChangeCurrency}
        >
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
          <option value='BHD'>BHD</option>
          <option value='INR'>INR</option>
          <option value='CAD'>CAD</option>
          <option value='AUD'>AUD</option>
          <option value='GBP'>GBP</option>
          <option value='AED'>AED</option>
        </NativeSelect>
          <TextField
            margin='dense'
            id='amount'
            // label="Session ID"
            // placeholder="Session ID"
            // name='numberformat'
            value={clientAmt}
            // value={values.numberformat}
            style={{ marginTop: '18px', marginBottom: '0px', marginLeft: '5px' }}
            onChange={handleChangeAmt}
            fullWidth
            variant='standard'
          />
      </FormControl> */}
          {formLink ? (
            <>
              <p style={{ fontSize: '13px', marginBottom: '8px' }}>Form Link</p>
              <Link
                underline='always'
                style={{ cursor: 'pointer' }}
                onClick={() => window.open(formLink, '_blank')}
              >
                {formLink?.slice(0, 41).concat(' ...')}
              </Link>
            </>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {btnDisabled ? <Button disabled>Create</Button> : <Button onClick={linkGenerator}>Create</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default FormCreation;
