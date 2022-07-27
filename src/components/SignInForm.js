import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthService from '../services/auth-service';
import CircularProgress from '@mui/material/CircularProgress';

const SignInFrom = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isloading, setIsloading] = useState(false);

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

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      await AuthService.login(email, password).then(
        () => {
          history.push('/dashboard');
          setIsloading(false);
          window.location.reload();
        },
        (error) => {
          setIsloading(false);
          console.log(error.response.data);
          alert(error.response.data);
        }
      );
    } catch (err) {
      setIsloading(false);
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
            <div className='col-lg-6'>
              <div className='login_info'>
                <h2 className='f_p f_600 f_size_24 t_color3 mb_40'>Sign In</h2>
                <form
                  action='#'
                  className='login-form sign-in-form'
                  onSubmit={handleLogin}
                >
                  <div className='form-group text_box'>
                    <label className='f_p text_c f_400'>Email Address</label>
                    <input
                      type='text'
                      placeholder='example@gmail.com'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='form-group text_box'>
                    <label className='f_p text_c f_400'>Password</label>
                    <input
                      type='password'
                      placeholder='******'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className='d-flex justify-content-between align-items-center' style={{marginRight: '20px'}}>
                    {isloading ?
                    <button type='submit' className='btn_three' style={{display: 'flex'}}>
                      <CircularProgress style={{width: '22px', height: '22px', marginRight: '10px'}} color='inherit' /> Sign In
                    </button>
                    :
                    <button type='submit' className='btn_three'>
                     Sign In
                    </button>}
                    <div className="forgotten-password">
                        <Link to="/forgot-pass">Forgot Password?</Link>
                    </div>
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
                    Don't have an account?{' '}
                    <Link
                      style={{ fontWeight: '500', cursor: 'pointer' }}
                      to='/SignUp'
                    >
                      Sign Up
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignInFrom;
