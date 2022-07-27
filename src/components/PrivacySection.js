import React from 'react';

const PrivacySection =()=>{
    return(
        <section className="faq_area bg_color sec_pad">
            <div className="container">
                <div className="row" style={{justifyContent: 'center', placeContent: 'center'}}>
                    <div className="col-lg-8">
                        <div className="tab-content faq_content" id="myTabContent">
                            <div className="tab-pane fade show active" id="purchas" role="tabpanel" aria-labelledby="purchas-tab">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Overview</h3>
                                <div id="accordion">
                                    <div className="card" style={{border: 'none'}}>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body" style={{padding: "0px 0px 15px"}}>
                                            We understand your concern about privacy and security of personal details. It is our ethical duty to make you aware of our privacy policy. Here is what we do with your personal information:
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card" style={{border: 'none'}}>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body" style={{padding: "0px 20px 15px"}}>
                                            - All information about students and tutors is strictly kept within the company.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card" style={{border: 'none'}}>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body" style={{padding: "0px 20px 15px"}}>
                                            - We do not give out any student or tutor's information to third parties.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20 mt_100" style={{marginTop: "50px"}}>Collection of Information</h3>
                                <div id="accordion">
                                    <div className="card" style={{border: 'none'}}>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body" style={{padding: "0px 0px 15px"}}>
                                            Payments are handled by PayPal, Razorpay. We have collaborated with PayPal and razorpay so that they alone (and not our company) can deal with a student's credit card details.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card" style={{border: 'none'}}>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body" style={{padding: "0px 0px 15px"}}>
                                            We reserve the right to disclose your personal identifiable information as required by law and when we believe that disclosure is necessary to protect our rights and/or to comply with a judicial proceeding, court order or legal process served on our Website.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20 mt_100" style={{marginTop: "50px"}}>Use and sharing of Information</h3>
                                <div id="accordion">
                                    <div className="card" style={{border: 'none'}}>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body" style={{padding: "0px 0px 15px"}}>
                                            thetutorlancer.com reserves the right to modify this privacy statement any time, so please review it frequently. Any changes made to above policy will be posted here and your continued use of the site, services and/or software constitutes your agreement to be bound by such changes.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card" style={{border: 'none'}}>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body" style={{padding: "0px 0px 15px"}}>
                                            We value your privacy and would like to inform you that you would be receiving our emails after you signed up with us to avail our services. We treat your email ids with utmost care and do not share them with anyone else. So you can be rest assured that all emails sent from us are designed to benefit you solely.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PrivacySection;