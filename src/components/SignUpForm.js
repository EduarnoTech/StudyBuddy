import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthService from '../services/auth-service';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [password, setPassword] = useState('');
  const [passErr, setPassErr] = useState(false);
  const [cpassErr, setCpassErr] = useState(false);
  const [cpassword, setCpassword] = useState('');
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const history = useHistory();

  const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
  const validPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,12})");

  const emailValidation = (e) => {
    setEmail(e.target.value);
    if(validEmail.test(e.target.value)) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
  }

  const passValidation = (e) => {
    setPassword(e.target.value);
    if(validPass.test(e.target.value)) {
      setPassErr(false);
    } else {
      setPassErr(true);
    }
  }

  const confirmPassValidation = (e) => {
    setCpassword(e.target.value);
    if(password === e.target.value) {
      setCpassErr(false);
    } else {
      setCpassErr(true);
    }
  }

  //   const snackBarPos = {
  //     vertical: 'top',
  //     horizontal: 'center'
  //   }
  //   const { vertical, horizontal } = snackBarPos;

  //   const handleClose = (event, reason) => {
  //     if (reason === 'clickaway') {
  //       return;
  //     }
  //     setOpenSnackBar(false);
  //   };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password === cpassword) {
      setIsloading(true);
      try {
        await AuthService.signup(email, password, name).then(
          (response) => {
            // check for token and user already exists with 200
            //   console.log("Sign up successfully", response);
            //   setOpenSnackBar(true);
            alert(' Registered Successfully! Please Log In.');
            history.push('/dashboard');
            //   window.location.reload();
          },
          (error) => {
            console.log(error);
            setIsloading(false);
            alert(error.response.data.errors[0].msg);
          }
        );
      } catch (err) {
        console.log(err);
        setIsloading(false);
        alert(err.response.data.msg);
      }
    } else {
      alert('Password and Confirm Password does not match!');
    }
  };
  return (
    <section className='sign_in_area bg_color sec_pad'>
      <div className='container'>
        <div className='sign_info'>
          <div style={{ justifyContent: 'flex-end' }} className='row'>
            <div className='col-lg-6'>
              <img
                className='login-img'
                src={require('../img/home-chat/login.png')}
                alt=''
              />
            </div>
            <div className='col-lg-6'>
              <div className='login_info'>
                <h2 className='f_p f_600 f_size_24 t_color3 mb_40'>Sign Up</h2>
                <form
                  action='#'
                  className='login-form sign-in-form'
                  onSubmit={handleSignup}
                >
                  <div className='form-group text_box'>
                    <label className='f_p text_c f_400'>Full Name</label>
                    <input
                      type='text'
                      placeholder='Full Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='form-group text_box'>
                    <label className='f_p text_c f_400'>Email Address</label>
                    <input
                      type='text'
                      placeholder='example@gmail.com'
                      value={email}
                      onChange={emailValidation}
                    />
                    {emailErr && (
                    <label style={{fontSize: '12px', color: 'red'}}>Please enter a valid email!</label>
                  )}
                  </div>
                  <div className='form-group text_box'>
                    <label className='f_p text_c f_400'>Password</label>
                    <input
                      type='password'
                      placeholder='******'
                      value={password}
                      onChange={passValidation}
                    />
                    {passErr && (
                    <label style={{fontSize: '12px', color: 'red', lineHeight: '1.8'}}>
                      Invalid password! <br /> * Must be atleast 6 characters! <br /> * Must contain atleast 1 Lower Case letter! <br /> * Must contain atleast 1 Upper Case letter! <br /> * Must contain atleast 1 Special Character!
                    </label>
                  )}
                  </div>
                  <div className='form-group text_box'>
                    <label className='f_p text_c f_400'>Confirm Password</label>
                    <input
                      type='password'
                      placeholder='******'
                      value={cpassword}
                      onChange={confirmPassValidation}
                    />
                    {cpassErr && (
                      <label style={{fontSize: '12px', color: 'red'}}>Password and Confirm Password does not match!</label>
                    )}
                  </div>
                  <div className='extra mb_20'>
                    <div className='checkbox remember'>
                      <label>
                        By clicking Sign Up, you agree to our{' '}
                        <a href='/termsConditions' target='_blank'>
                          Terms, Conditions
                        </a>{' '}
                        and{' '}
                        <a href='/privacyPolicy' target='_blank'>
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center'>
                    {isloading ? <button type='submit' className='btn_three' style={{display: 'flex'}}>
                        <CircularProgress style={{width: '22px', height: '22px', marginRight: '10px'}} color='inherit' /> Sign Up
                    </button>
                    :
                    <button type='submit' className='btn_three'>
                     Sign Up
                    </button>}
                    {/* <div className="social_text d-flex ">
                                            <div className="lead-text">Or Sign up Using</div>
                                            <ul className="list-unstyled social_tag mb-0">
                                                <li><a href="/#"><i className="ti-facebook"></i></a></li>
                                                <li><a href="/#"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="/#"><i className="ti-google"></i></a></li>
                                            </ul>
                                        </div> */}
                  </div>
                  <div style={{ marginTop: '25px' }}>
                    Already have an account?{' '}
                    <Link
                      style={{ fontWeight: '500', cursor: 'pointer' }}
                      to='/SignIn'
                    >
                      Sign In
                    </Link>
                  </div>
                </form>
                {/* <Snackbar open={openSnackBar} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                                        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                                            Registered Successfully! Please Log In.
                                        </Alert>
                                    </Snackbar> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUpForm;
