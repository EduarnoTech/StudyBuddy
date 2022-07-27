import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import TutorSignup from '../components/TutorSignUp';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const SignUp = () => {
  return (
    <div className='body_wrapper' >
      <CustomNavbar nClass='m-auto' hbtnClass='new_btn' tutorSignup={true} />
      <br />
      {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Sign Up" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/> */}
      <TutorSignup />
      {/* <FooterTwo FooterData={FooterData}/> */}
    </div>
  );
};
export default SignUp;
