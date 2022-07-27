import React, {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import "../common.css";
import { axiosInstance } from '../../config';



const ChatBanner = () => {
  const [question, setQuestion] = useState('');
  const [deadline, setDeadline] = useState(null);
  const [subject, setSubject] = useState('');
  const [waId, setWaId] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);

  const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

  const emailValidation = (e) => {
    setEmail(e.target.value);
    if(validEmail.test(e.target.value)) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
  }

  const handleStoreResponse = async () => {
    if(!emailErr) {
      try {
        const payload = {
          wa_id: waId,
          email: email,
          deadline: deadline,
          subject: subject,
          querry: question
        }
        const response = await axiosInstance.post('/api/responses/saveResponse', payload,
        {
          headers: ''
        });
        console.log(response.data);
        setQuestion('');
        setDeadline(null);
        setSubject('');
        setWaId('');
        setEmail('');
        alert('Your response has been saved. We will get back to you soon.');
      }
      catch (err) {
        console.log(err);
        alert('Something went wrong. Please try again...!');
      }
    }
  }
  return (
    <section className='chat_banner_area'>
      <img
        className='p_absoulte cloud'
        data-parallax='{"x": 0, "y": 150}'
        src={require('../../img/home-chat/432-ai.png')}
        alt=''
      />
      {/* <img
        className="p_absoulte left wow fadeInLeft"
        data-wow-delay="0.2s"
        src={require('../../img/home-chat/left_leaf.png')} 
        alt=""
      />
      <img
        className="p_absoulte right wow fadeInRight"
        data-wow-delay="0.3s"
        src={require('../../img/home-chat/right_leaf.png')}
        alt=""
      /> */}
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='chat_banner_content'>
              {/* <div className="c_tag wow fadeInUp">
                <img src={require("../../img/home-chat/live_chat.png")} alt="" /> Live chat
              </div> */}
              <h2 className='wow fadeInUp' data-wow-delay='0.2s'>
                Get Instant Help 24x7 Online Tutoring, Live
                Sessions, Assignments
              </h2>
              <div
                className='text-center pr_100 wow fadeInUp'
                data-wow-delay='0.4s'
              >
                {/* <a href="/#" className="chat_btn btn_hover">
                  Live chat for free
                </a> */}
                <div style={{display: 'flex', padding: '1px 10px', height: '75px', border: '1px solid lightgray', borderRadius: '7px'}}>
                <textarea
                  id='w3review'
                  name='w3review'
                  style={{
                    // width: '-webkit-fill-available',
                    border: '0',
                    resize: 'none',
                    width: '100%',
                    height: '100%',
                    background: 'transparent',
                    outline: '0'
                  }}
                  rows='4'
                  cols='50'
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder='Type your question'
                ></textarea>
                {/* <div style={{height: '100%', width: '20%', backgroundColor: 'rgb(235 236 237 / 53%)', borderRadius: '6px', padding: '10px', cursor: 'pointer'}}>
                <UploadFileIcon style={{fontSize: '45px', color: '#5e2ced'}} />
                <p style={{marginTop: '5px', fontSize: '14px'}}>Upload file</p>
                </div> */}
                </div>
                {/* <span>(No credit card requierd)</span> */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginTop: '15px',
                  }}
                >
                  <input
                    style={{
                      width: '-webkit-fill-available',
                      borderRadius: '7px',
                      border: '1px solid #d1d1d1',
                      paddingLeft: '10px',
                      height: '38px',
                      marginBottom: '15px',
                      outline: 'none',
                      background: 'transparent',
                    }}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder='Subject Name'
                  />
                  {/* <input
                    type="date"
                    style={{
                      width: '-webkit-fill-available',
                      borderRadius: '7px',
                      border: '1px solid #d1d1d1',
                      paddingLeft: '15px',
                      height: '45px',
                      outline: 'none',
                      background: 'transparent',
                      paddingRight: '9px'
                    }}
                    placeholder='Deadline (in dd-mm-yy format)'
                  /> */}
                  <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <DatePicker
                      label="Deadline"
                      value={deadline}
                      style={{borderRadius: '10px'}}
                      onChange={(newValue) => {
                        setDeadline(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginTop: '15px',
                  }}
                >
                  <input
                    style={{
                      width: '-webkit-fill-available',
                      borderRadius: '7px',
                      border: '1px solid #d1d1d1',
                      paddingLeft: '10px',
                      height: '38px',
                      marginBottom: '15px',
                      outline: 'none',
                      background: 'transparent',
                    }}
                    value={waId}
                    onChange={(e) => setWaId(e.target.value)}
                    placeholder='WhatsApp No (with country code) *optional'
                  />
                  <input
                    type="email"
                    style={{
                      width: '-webkit-fill-available',
                      borderRadius: '7px',
                      border: '1px solid #d1d1d1',
                      paddingLeft: '10px',
                      height: '38px',
                      outline: 'none',
                      background: 'transparent',
                    }}
                    value={email}
                    onChange={emailValidation}
                    placeholder='Email ID'
                  />
                  {emailErr && (
                    <label className='error-text'>Please enter a valid email!</label>
                  )}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', marginTop: '20px'}}>
                <Button className='submitBtn' style={{borderRadius: '25px', backgroundColor: 'rgb(105 57 243 / 88%)', fontSize: '17px', padding: "5px 28px"}} size="large" variant="contained" onClick={handleStoreResponse}>Submit</Button>
                </div>
                <div style={{display: 'flex', marginTop: '20px', alignItems: 'center', fontSize: "19px"}}>
                  or
                </div>
                <div style={{display: 'flex', marginTop: '20px'}}>
                <Button variant="contained" className='ctaBtn' style={{background: "linear-gradient(127deg, #03D757, #11A1DC)", borderRadius: '35px', fontSize: '19px'}} size="large" endIcon={<WhatsAppIcon style={{color: '#ffff', fontSize: '25px'}} />} href={'https://wa.me/917070505631'} target='_blank'>
                  WhatsApp Now
                </Button>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='chatNow'>
            Chat with us now
            <img
              src={require('../../img/home-chat/arrow.png')}
              style={{width: '60px'}}
              alt=''
            />
          </div> */}
          <div className='col-lg-4 offset-lg-2'>
            {/* <div className="chat_img">
              <img
                className="p_absoulte p_one"
                src={require('../../img/home-chat/panguin_img_one.png')}
                alt=""
              />
              <img
                className="p_absoulte p_two"
                src={require('../../img/home-chat/panguin_img_two.png')}
                alt=""
              />
              <img
                className="p_absoulte p_three"
                src={require('../../img/home-chat/panguin_img_three.png')}
                alt=""
              />
              <div className="round one"></div>
              <div className="round two"></div>
              <div className="round three"></div>
              <img
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                src={require('../../img/home-chat/Messages.png')}
                alt="chat-img"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBanner;
