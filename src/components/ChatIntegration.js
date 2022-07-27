import { fontFamily } from '@mui/system';
import React from 'react';
import "./chatIntegration.css"
const ChatIntegration =()=>{
    return(
        // <section className="security_integration_area chat_integration_area">
        //     <div className="container">
        //         <div className="border-bottom"></div>
        //         <div className="chat_title text-center">
        //             <h2 className="wow fadeInUp"><span>Integrations.</span> Discover even more possibilities.</h2>
        //             <p>Explore 50+ integrations that make your day-to-day workflow more efficient and familiar. Our extensive developer tools might also strike your fancy.</p>
        //         </div>
        //     </div>
        //     <div className="container-fluid">
        //         <div className="row">
        //             <div className="col-lg-2 col-md-4 col-sm-6">
        //                 <a href="/#" className="s_integration_item">
        //                     <img src={require("../img/new-home/kissmetrics.png")} alt=""/>
        //                     <h5>KISSmetrics</h5>
        //                 </a>
        //             </div>
        //             <div className="col-lg-2 col-md-4 col-sm-6">
        //                 <a href="/#" className="s_integration_item">
        //                     <img src={require("../img/new-home/metorik.png")} alt=""/>
        //                     <h5>Metorik</h5>
        //                 </a>
        //             </div>
        //             <div className="col-lg-2 col-md-4 col-sm-6">
        //                 <a href="/#" className="s_integration_item">
        //                     <img src={require("../img/new-home/nicereply-1.png")} alt=""/>
        //                     <h5>Nicereply</h5>
        //                 </a>
        //             </div>
        //             <div className="col-lg-2 col-md-4 col-sm-6">
        //                 <a href="/#" className="s_integration_item">
        //                     <img src={require("../img/new-home/update.png")} alt=""/>
        //                     <h5>Software Updater</h5>
        //                 </a>
        //             </div>
        //             {/* <div className="col-lg-2 col-md-4 col-sm-6">
        //                 <a href="/#" className="s_integration_item">
        //                     <img src={require("../img/new-home/campfire.png")} alt=""/>
        //                     <h5>Campfire</h5>
        //                 </a>
        //             </div>
        //             <div className="col-lg-2 col-md-4 col-sm-6">
        //                 <a href="/#" className="s_integration_item">
        //                     <img src={require("../img/new-home/webhooks.png")} alt=""/>
        //                     <h5>Webhooks</h5>
        //                 </a>
        //             </div> */}
        //         </div>
        //     </div>
        // </section>
        <section id="" className="work-process-new ptb-100" >
            <div class="container">
               <div class="row justify-content-center" >
                  <div class="col-md-9 col-lg-8">
                     <div  class="section-heading text-center" >
                        <h2><span style={{color: 'black!important'}}>Online sessions with the best tutors</span></h2>
                        <p style={{color: 'black!important'}}>Our tutors are experts from various domains, they have all experience to handle your queries with ease. Get the best solutions on your personal phone now.</p>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-12">
                     <div class="work-process-wrap">
                        <div class="single-work-process text-center mt-lg-5 mt-md-5 mt-sm-5 mt-5" >
                           <div className="work-process-icon-wrap color-1-bg rounded">
                              <i class="ti-email icon-md color-1"></i>
                              <span class="process-step white-bg color-primary shadow-sm">1</span>
                           </div>
                           <span class="work-process-divider"></span>
                           <div class="work-process-content mt-4">
                              <h5>Connect with us via email/Whatsapp</h5>
                           </div>
                        </div>
                        <div class="single-work-process text-center mt-lg-5 mt-md-5 mt-sm-5 mt-5">
                           <div class="work-process-icon-wrap color-2-bg rounded">
                              <i class="ti-layout-list-thumb icon-md color-2"></i>
                              <span class="process-step white-bg color-primary shadow-sm">2</span>
                           </div>
                           <span class="work-process-divider"></span>
                           <div class="work-process-content mt-4">
                              <h5>Book a session for the topic of your choice</h5>
                           </div>
                        </div>
                        <div class="single-work-process text-center mt-lg-5 mt-md-5 mt-sm-5 mt-5">
                           <div class="work-process-icon-wrap color-3-bg rounded">
                              <i class="ti-star icon-md color-3"></i>
                              <span class="process-step white-bg color-primary shadow-sm">3</span>
                           </div>
                           <span class="work-process-divider"></span>
                           <div class="work-process-content mt-4">
                              <h5>Learn from the best Indian Tutors we provide</h5>
                           </div>
                        </div>
                        <div class="single-work-process text-center mt-lg-5 mt-md-5 mt-sm-5 mt-5">
                           <div class="work-process-icon-wrap color-4-bg rounded">
                              <i class="ti-cup icon-md color-4"></i>
                              <span class="process-step white-bg color-primary shadow-sm">4</span>
                           </div>
                           {/* <span class="work-process-divider"></span> */}
                           <div class="work-process-content mt-4">
                              <h5> Turn your grades into Mega grades  </h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
export default ChatIntegration;