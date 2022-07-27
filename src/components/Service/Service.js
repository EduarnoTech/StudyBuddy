import React from 'react';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';

const Service = ({serviceRef, featureRef}) => {
    return(
        <React.Fragment>
            <section className="seo_service_area sec_pad">
                <div className="container" ref={serviceRef}>
                    {/* <SeoTitle Title='How does it work?' TitleP='The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!'/> */}
                    <h1 style={{marginBottom: '60px', textAlign: 'center'}}>Here for every moment</h1>
                    <div className="row seo_service_info">
                        <Fade bottom duration={500}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icons8-online-class-100.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Online Tutoring</h4>
                                    </a>
                                    <p>Our genius online tutors will help you in breaking down concepts and help you with your homework instantly. Get a study boost now !</p>
                                    {/* <a href=".#"><i className="arrow_right"></i></a> */}
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={700} >
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icons8-notebook-100.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Homework Help</h4>
                                    </a>
                                    <p>Stuck with homework? PhD experts have a distinctive mode of expression assisting students to solve assignments flawlessly.</p>
                                    {/* <a href=".#"><i className="arrow_right"></i></a> */}
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={1000}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icons8-live-streaming-100.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Live session</h4>
                                    </a>
                                    <p>We provide the best tutors for you to interact with in real time to get instant solutions for your problems. Pickup your phone now !</p>
                                    {/* <a href=".#"><i className="arrow_right"></i></a> */}
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={1000}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icons8-experiments-100.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Lab Work</h4>
                                    </a>
                                    <p>PSpice, Orcad, AutoCAD,Solidworks, and many more simulation softwares, our Lab experts can handle them all.</p>
                                    {/* <a href=".#"><i className="arrow_right"></i></a> */}
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={1000}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icons8-project-100.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Project Help</h4>
                                    </a>
                                    <p>Get the most professional project assistance from our PhD experts who can guide and walk you through your project online.</p>
                                    {/* <a href=".#"><i className="arrow_right"></i></a> */}
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={1000}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/writing-100.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Writing Help</h4>
                                    </a>
                                    <p>Our Native essay tutors help you meet university standards in terms of writing and structuring of academic essays.</p>
                                    {/* <a href=".#"><i className="arrow_right"></i></a> */}
                                </div>
                            </div>
                        </Fade>
                        {/* <div className="col-lg-12 text-center mt_40">
                            <a href=".#" className="seo_btn seo_btn_one btn_hover">All Features</a>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad" ref={featureRef}>
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="seo_features_img">
                                <div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img src={require('../../img/seo/testin1.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    {/* <h2>Get tips & tricks on how to skyrocket your sales.</h2>
                                    <p>Faff about only a quid blower I don't want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p> */}
                                    <div className="media seo_features_item">
                                        <div style={{fontSize: '30px', color: '#ff164e'}} className="icon ti-support-ico">
                                            {/* <img src={require('../../img/seo/icon4.png')} alt=""/> */}
                                        </div>
                                        <div className="media-body">
                                            <h3>24/7 Support</h3>
                                            <p>Tutorlancer is focused on ensuring to meet the needs of the students around the globe for their assignments.</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div style={{fontSize: '30px', color: '#9123ff'}} className="icon two ti-clock-time"></div>
                                        <div className="media-body">
                                            <h3>On time Delivery</h3>
                                            <p>We make sure your assignments reach you on time because we know if it's not with you on-time, it will be a waste.</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div style={{fontSize: '30px', color: '#2ebf6d'}} className="icon three ti-dollar"></div>
                                        <div className="media-body">
                                            <h3>Competitive Pricing</h3>
                                            <p>Our prices are reasonable and pocket-friendly because we understand you better.</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="seo_features_img seo_features_img_two">
                                <div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img src={require('../../img/seo/testin2.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                        <Fade bottom cascade>
                                <div className="seo_features_content">
                                    {/* <h2>Get tips & tricks on how to skyrocket your sales.</h2>
                                    <p>Faff about only a quid blower I don't want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p> */}
                                    <div className="media seo_features_item">
                                        <div style={{fontSize: '30px', color: '#ff164e'}} className="icon">
                                            {/* <img src={require('../../img/seo/icon4.png')} alt=""/> */}
                                            <PlagiarismOutlinedIcon style={{fontSize: '35px', marginLeft: '3px'}} />
                                        </div>
                                        <div className="media-body">
                                            <h3>Plagiarism free</h3>
                                            <p>Get plagiarism free work where each and every assignment is written from scratch to ensure that no content is plagiarized.</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div style={{fontSize: '20px', color: '#9123ff'}} className="icon two">
                                        <img src="https://img.icons8.com/ios/33/000000/refund-2.png" alt="" />
                                        </div>
                                        <div className="media-body">
                                            <h3>Refundable</h3>
                                            <p>Your payment is secured by paypal and razorpay, upto 100% money back guarantee.</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div style={{fontSize: '30px', color: '#2ebf6d'}} className="icon three ti-revision"></div>
                                        <div className="media-body">
                                            <h3>Unlimited Revision</h3>
                                            <p>You get 100% customized work as per your requirements, we are always willing to accommodate.</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Service;
