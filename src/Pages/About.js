import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Sservice from '../components/Service/Sservice/Sservice';
import AgencyAbout from '../components/About/AgencyAbout';
import Partner from '../components/Partner';
import FooterTwo from '../components/Footer/FooterTwo';
import ServiceData from '../components/Service/ServiceData';
import FooterData from '../components/Footer/FooterData';

const About = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="About Us" Pdescription="Tutorlancer is an online platform that connects online tutors with students across the globe who seeks academic help. We help students across the globe who are stuck with their subjects, by connecting them with tutors. We aim to strategically connect students and tutors online."/>
            {/* <Sservice/>
            <AgencyAbout ServiceData={ServiceData}/> */}
            {/* <Partner pClass="partner_logo_area_five bg_color"/> */}
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default About;