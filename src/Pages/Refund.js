import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb1 from '../components/Breadcrumb1';
import Sservice from '../components/Service/Sservice/Sservice';
import AgencyAbout from '../components/About/AgencyAbout';
import Partner from '../components/Partner';
import FooterTwo from '../components/Footer/FooterTwo';
import ServiceData from '../components/Service/ServiceData';
import FooterData from '../components/Footer/FooterData';
import RefundSection from '../components/RefundSection';

const Refund = () => {
  return (
    <div className='body_wrapper'>
      <CustomNavbar
        slogo='sticky_logo'
        mClass='menu_four'
        nClass='w_menu ml-auto mr-auto'
      />
      <Breadcrumb1
        breadcrumbClass='breadcrumb_area'
        imgName='breadcrumb/banner_bg.png'
        Ptitle='Refund Policy'
      />
      <RefundSection />
      {/* <Sservice/>
            <AgencyAbout ServiceData={ServiceData}/> */}
      {/* <Partner pClass="partner_logo_area_five bg_color"/> */}
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default Refund;
