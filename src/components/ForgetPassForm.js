import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthService from '../services/auth-service';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const ForgetPassForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isloading, setIsloading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  // const emailHandler = (event) => {
  //     // event.preventDefault()
  //     setEnteredEmail(event.target.value);
  //   };

  //   const passwordHandler = (event) => {
  //       setEnteredPassword(event.target.value);
  //   };

  //   const submitHandler= async (event)=>{
  //     event.preventDefault();

  //     let postData={

  //         email1:enteredEmail,
  //         password:enteredPassword
  //     }

  //   //   console.log(postData);

  //     try {
  //       await axios.post("https://device2api.el.r.appspot.com/client/signIn",
  //         postData

  //       )
  //         .then((res)=>{console.log(res.data.success)
  //           if(res.data.success){
  //             //   props.setIsSignIn(true)
  //               localStorage.setItem('email',postData.email1)
  //           }
  //           else{
  //               alert("Invalid SignIn Details")
  //           }
  //       }
  //       )
  //         .catch((err) => console.log(err));

  //       // console.log(isLogin)
  //       console.log("working");
  //     } catch (err) {
  //       console.log("not working");
  //     }
  //   }

  const handleSendLink = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
        const payload = {
            email: email
        }
      await axios.post(`https://device6chatapi.el.r.appspot.com/api/auth/forgot-password-mail`, payload).then(
        () => {
          setSuccess(true);
          setIsloading(false);
        },
        (error) => {
          setIsloading(false);
          alert(error.response.data.msg);
        }
      );
    } catch (err) {
      setIsloading(false);
      alert("Something went wrong! Please try again later.");
      console.log(err);
    }
  };

  return (
    <section
      className='sign_in_area bg_color sec_pad'
      style={{ padding: '93px 0px' }}
    >
      <div className='container'>
        <div className='sign_info'>
          <div style={{ justifyContent: 'flex-end' }} className='row'>
            <div className='col-lg-6'>
              <img
                className='login-img'
                // style={{ width: '509px' }}
                src={require('../img/home-chat/login.png')}
                alt=''
              />
            </div>
            <div className='col-lg-6' style={{marginTop: '50px'}}>
              <div className='login_info'>
                <h2 className='f_p f_600 f_size_24 t_color3 mb_40'>Reset Password</h2>
                {!success ? <form
                  action='#'
                  className='login-form sign-in-form'
                  onSubmit={handleSendLink}
                >
                  <div className='form-group text_box'>
                    <label className='f_p text_c f_400'>Your Email</label>
                    <input
                      type='text'
                      placeholder='example@gmail.com'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='d-flex justify-content-between align-items-center'>
                    {isloading ?
                    <button type='submit' className='btn_three' style={{display: 'flex'}}>
                      <CircularProgress style={{width: '22px', height: '22px', marginRight: '10px'}} color='inherit' /> Reset Password
                    </button>
                    :
                    <button type='submit' className='btn_three'>
                     Reset Password
                    </button>}
                  </div>
                  <div style={{ marginTop: '25px' }}>
                    Don't have an account?{' '}
                    <Link
                      style={{ fontWeight: '500', cursor: 'pointer' }}
                      to='/SignUp'
                    >
                      Sign Up
                    </Link>
                  </div>
                </form> :
                <div style={{fontWeight: '500'}}>
                    We have sent a password reset link to your registered email id. Recover your password by clicking on the link in your email and get back to our services.
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ForgetPassForm;