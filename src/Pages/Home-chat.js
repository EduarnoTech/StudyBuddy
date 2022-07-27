import React, { useRef } from "react";
import CustomNavbar from "../components/CustomNavbar";
import ChatBanner from "../components/Banner/ChatBanner";
import CoreFeatures from "../components/Features/CoreFeatures";
import ChatFeatures from "../components/Features/ChatFeatures";
import ChatIntegration from "../components/ChatIntegration";
import ChatClients from "../components/chatClients";
import FooterErp from "../components/Footer/FooterErp";
import FooterData from "../components/Footer/FooterData";
import Service from "../components/Service/Service";
import MarketingTestimonial from "../components/Testimonial/MarketingTestimonial";
import BannerData from '../components/Banner/BannerData';
import FooterTwo from "../components/Footer/FooterTwo";
import EventPrice from "../components/EventPrice";

const Homechat = () => {
  const serviceRef = useRef(null);
  const featureRef = useRef(null);
  const pricingRef = useRef(null);
  const reviewRef = useRef(null);
  const onClickService = () => {
    serviceRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const onClickFeatures = () => {
    featureRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const onClickPricing = () => {
    pricingRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const onClickReview = () => {
    reviewRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="body_wrapper">
      <CustomNavbar
        nClass="m-auto"
        hbtnClass="new_btn"
        onClickService={onClickService}
        onClickFeatures={onClickFeatures}
        onClickPricing={onClickPricing}
        onClickReview={onClickReview}
      />
      <ChatBanner />
      <Service serviceRef = {serviceRef} featureRef={featureRef} />
      {/* <ChatFeatures rowClass='flex-row-reverse' pClass="pr_70" col1="col-lg-6 offset-lg-1" col2="col-lg-5" icon="chat_icon.png" img1="dot.png" img2="chat_02.png" img3="chat_01.png" titleSmall="Move deals" titlebig="through your funnel – fast"
      p="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience." url="#"/> */}
      <ChatFeatures rowClass='flex-row-reverse' pClass="pr_60" col1="col-lg-6 offset-lg-1" col2="col-lg-5" imgClass="imgClass1" class3="img-contr" icon="dashboard.png" img1="liveChat.gif" img2="support_dashboard.jpg" img3="skyp_2.png" titleSmall="Instant & Dedicated" titlebig="WhatsApp Support"
      p="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience." adv={true} url="#" />
      <ChatFeatures  pClass="pl_70" col1="col-lg-6" col2="col-lg-5 offset-lg-1" icon="video_icon.png" imgClass="imgClass2" img1="googleMeet.png" img2="skyp_1.png" img3="online.png" titlebig="Video Calling Support"
      p="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience." url="#"/>
      <ChatIntegration />
      <EventPrice pricingRef={pricingRef} />
      <MarketingTestimonial BannerData={BannerData} reviewRef={reviewRef} />
      {/* <FooterErp fClass="event_footer_area" FooterData={FooterData} /> */}
      <FooterTwo FooterData={FooterData} onClickService={onClickService}/>
    </div>
  );
};
export default Homechat;
