import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from '@mui/material';
import '../common.css';
import { useParams } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useHistory } from 'react-router-dom';

export const ResetPass = (props) => {
  const [isloading, setIsloading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [passErr, setPassErr] = useState(false);
  const [cpassErr, setCpassErr] = useState(false);
  const params = useParams();
  const history = useHistory();

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );
  const validPass = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,12})'
  );

  useEffect(() => {
    const openWindow = async () => {
      setIsloading(true);
      const payload = {
        uid: params.clientId,
        _id: params.id,
      };
      try {
        const response = await axios.post(
          `https://device6chatapi.el.r.appspot.com/api/sessions/openResetPasswordWindow`,
          payload
        );
        if (response.data.status) {
          setIsloading(false);
        }
      } catch (err) {
        console.log(err);
        setIsloading(false);
        setErrMsg('Invalid Link!');
      }
    };
    openWindow();
  }, []);

  const resetUserPassword = async () => {
    if (password === cpassword) {
      try {
        const data = {
          clientId: params.clientId,
          password: password,
        };
        const res = await axios.post(
          `https://device6chatapi.el.r.appspot.com/api/sessions/resetPassword`,
          data
        );
        console.log(res.data)
        if (res.data.success) {
          alert('Password Changed Successfully! Login with new password.');
          history.push('/SignIn');
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Password Mismatch');
    }
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
    if (validPass.test(e.target.value)) {
      setPassErr(false);
    } else {
      setPassErr(true);
    }
  };

  const handleChangeCpass = (e) => {
    setCpassword(e.target.value);
    if (password === e.target.value) {
      setCpassErr(false);
    } else {
      setCpassErr(true);
    }
  };

  return (
    <>
      {!isloading && !errMsg ? (
        <form className='reset-password'>
          <Card>
            <CardHeader title='Reset Your Password' />
            <Divider />
            <CardContent>
              <TextField
                fullWidth
                label='New Password'
                margin='normal'
                name='password'
                onChange={handleChangePass}
                type='password'
                value={password}
                variant='outlined'
              />
              {passErr && (
                <label
                  style={{ fontSize: '12px', color: 'red', lineHeight: '1.8' }}
                >
                  Invalid password! <br /> * Must be atleast 6 characters!{' '}
                  <br /> * Must contain atleast 1 Lower Case letter! <br /> *
                  Must contain atleast 1 Upper Case letter! <br /> * Must
                  contain atleast 1 Special Character!
                </label>
              )}
              <TextField
                fullWidth
                label='Confirm Password'
                margin='normal'
                name='confirm'
                onChange={handleChangeCpass}
                type='password'
                value={cpassword}
                variant='outlined'
              />
              {cpassErr && (
                <label style={{ fontSize: '12px', color: 'red' }}>
                  Password and Confirm Password does not match!
                </label>
              )}
            </CardContent>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2,
              }}
            >
              <Button
                color='primary'
                variant='contained'
                onClick={resetUserPassword}
                style={{ backgroundColor: 'rgb(80, 72, 229)' }}
              >
                Reset
              </Button>
            </Box>
          </Card>
        </form>
      ) : isloading ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isloading}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        <center>
          <br />
          <h1>{errMsg}</h1>
        </center>
      )}
    </>
  );
};
