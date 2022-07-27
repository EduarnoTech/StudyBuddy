import React from "react";
const EventPrice = ({pricingRef}) => {
  return (
    <section className="event_price_area sec_pad" ref={pricingRef}>
      <div className="container">
        
        <div className="row align-items-center">
        <div className="col-lg-4 col-sm-6">
        <div className="hosting_title security_title text-center">
          <h1>
            <span>How We Compare Our Pricing.</span></h1> Our prices are designed for students especially, they are competent and global. Choose as per your requirements.
          
        </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="analytices_price_item event_price_item wow fadeInUp">
              <div className="p_head">
                <h5>Personal Tutoring</h5>
                <div className="rate">&#x20b9; 2250</div>
              </div>
              <ul className="list-unstyled p_body">
                <li>
                  Get quality training face to face with personal guidance by
                  megagrades’ experts <i className="ti-check"></i>
                </li>
                <li>
                  One to One <i className="ti-check"></i>
                </li>
                <li>
                  Regular Course (2250 INR/hour) <i className="ti-check"></i>
                </li>
                <li>
                  Special Session (Ex- Crash Course, Project explanation) 4000
                  INR/hour <i className="ti-check"></i>
                </li>
                <li>
                  Google Meet/Team Viewer/Skype/Etc.{" "}
                  <i className="ti-check"></i>
                </li>
              </ul>
              <div className="text-center">
                <a href="https://wa.me/917070505631?text=Personal Tutoring" target='_blank' className="event_btn event_btn_two btn_hover">
                  Purchase now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="analytices_price_item event_price_item active wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="p_head">
                <h5>Group Tutoring</h5>
                {/* <h6 className="tag">
                  <i className="icon_ribbon_alt"></i>Most popular
                </h6> */}
                <div className="rate">&#x20b9; 750</div>
              </div>
              <ul className="list-unstyled p_body">
                <li>
                  Get trained with your friends, build a great team{" "}
                  <i className="ti-check"></i>
                </li>
                <li>
                  One to Many(Max. 50 Students) <i className="ti-check"></i>
                </li>
                <li>
                  Regular Course (750 INR/hour/Student){" "}
                  <i className="ti-check"></i>
                </li>
                <li>
                  Special Session (Ex- Crash Course, Project explanation Etc.)
                  2000 INR/hour/student <i className="ti-check"></i>
                </li>
                <li>
                  Google Meet/Team Viewer/Skype/Etc.{" "}
                  <i className="ti-check"></i>
                </li>
              </ul>
              <div className="text-center">
                <a href="https://wa.me/917070505631?text=Group Tutoring" target='_blank' className="event_btn btn_hover">
                  Purchase now
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-sm-6">
            <div
              className="analytices_price_item event_price_item wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="p_head">
                <h5>VIP Seat</h5>
                <div className="rate">$159.99</div>
              </div>
              <ul className="list-unstyled p_body">
                <li>
                  All Lite features <i className="ti-check"></i>
                </li>
                <li>
                  Unlimited contacts <i className="ti-check"></i>
                </li>
                <li>
                  Remove Sendinblue <i className="ti-close"></i>
                </li>
                <li>
                  logo from emails <i className="ti-close"></i>
                </li>
                <li>
                  Advanced statistics <i className="ti-check"></i>
                </li>
              </ul>
              <div className="text-center">
                <a href="/#" className="event_btn event_btn_two btn_hover">
                  Buy Ticket
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default EventPrice;




// import React from "react";
// const EventPrice = () => {
//   return (
//     <section className="event_price_area sec_pad">
//       <div className="container">
//         <div className="hosting_title security_title text-center">
//           <h2>
//             <span>14-day free trial.</span> No credit card required.
//           </h2>
//         </div>
//         <div className="row align-items-center">
//           <div className="col-lg-4 col-sm-6">
//             <div className="analytices_price_item event_price_item wow fadeInUp">
//               <div className="p_head">
//                 <h5>One day Pass</h5>
//                 <div className="rate">$59.99</div>
//               </div>
//               <ul className="list-unstyled p_body">
//                 <li>
//                   All Lite features <i className="ti-check"></i>
//                 </li>
//                 <li>
//                   Unlimited contacts <i className="ti-check"></i>
//                 </li>
//                 <li>
//                   Remove Sendinblue <i className="ti-close"></i>
//                 </li>
//                 <li>
//                   logo from emails <i className="ti-close"></i>
//                 </li>
//                 <li>
//                   Advanced statistics <i className="ti-check"></i>
//                 </li>
//               </ul>
//               <div className="text-center">
//                 <a href="/#" className="event_btn event_btn_two btn_hover">
//                   Buy Ticket
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-sm-6">
//             <div
//               className="analytices_price_item event_price_item active wow fadeInUp"
//               data-wow-delay="0.2s"
//             >
//               <div className="p_head">
//                 <h5>Starter</h5>
//                 <h6 className="tag">
//                   <i className="icon_ribbon_alt"></i>Most popular
//                 </h6>
//                 <div className="rate">$59.99</div>
//               </div>
//               <ul className="list-unstyled p_body">
//                 <li>
//                   All Lite features <i className="ti-check"></i>
//                 </li>
//                 <li>
//                   Unlimited contacts <i className="ti-check"></i>
//                 </li>
//                 <li>
//                   Remove Sendinblue <i className="ti-close"></i>
//                 </li>
//                 <li>
//                   logo from emails <i className="ti-close"></i>
//                 </li>
//                 <li>
//                   Advanced statistics <i className="ti-check"></i>
//                 </li>
//               </ul>
//               <div className="text-center">
//                 <a href="/#" className="event_btn btn_hover">
//                   Buy Ticket
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-sm-6">
//             <div
//               className="analytices_price_item event_price_item wow fadeInUp"
//               data-wow-delay="0.4s"
//             >
//               <div className="p_head">
//                 <h5>VIP Seat</h5>
//                 <div className="rate">$159.99</div>
//               </div>
//               <ul className="list-unstyled p_body">
//                 <li>
//                   All Lite features <i className="ti-check"></i>
//                 </li>
//                 <li>
//                   Unlimited contacts <i className="ti-check"></i>
//                 </li>
//                 <li>
//                   Remove Sendinblue <i className="ti-close"></i>
//                 </li>
//                 <li>
//                   logo from emails <i className="ti-close"></i>
//                 </li>
//                 <li>
//                   Advanced statistics <i className="ti-check"></i>
//                 </li>
//               </ul>
//               <div className="text-center">
//                 <a href="/#" className="event_btn event_btn_two btn_hover">
//                   Buy Ticket
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default EventPrice;
