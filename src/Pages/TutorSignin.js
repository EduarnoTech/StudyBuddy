import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import TutorSignin from '../components/TutorSignIn';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const SignIn = () => {
    return(
        <div className="body_wrapper" >
            <CustomNavbar nClass='m-auto' hbtnClass='new_btn' tutorSignup={true} />
            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Sign In" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/> */}
            <TutorSignin/>
            {/* <FooterTwo FooterData={FooterData}/> */}
        </div>
    )
}
export default SignIn;