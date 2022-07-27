import React , {Component} from 'react';
import AboutWidget from './FooterWidget/AboutWidget';
import SolutionWidget from './FooterWidget/SolutionWidget';
import TeamWidget from './FooterWidget/TeamWidget';
import Reveal from 'react-reveal/Reveal'
class FooterTwo extends Component {
    render(){
        var {fClass, onClickService} = this.props;
        let FooterData = this.props.FooterData;
        return(
            <footer className={`footer_area footer_area_four f_bg ${fClass}`}>
                <div className="footer_top">
                    <div className="container">
                        <div style={{justifyContent: 'space-between'}} className="row">
                            {
                                FooterData.CompanyWidget.map(widget=>{
                                    return(
                                        <Reveal effect="fadeInUp" key={widget.id}>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                                <a href="index.html" className="f-logo" style={{fontSize: '20px'}}>
                                                    {/* <img style={{width: '140px', marginLeft: '4px'}} src={require('../../img/tutorlancer.png')} alt=""/> */}
                                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                                    <img style={{width: '35px'}} src={require("../../img/logo1.png")} alt="logo"/>
                                                    <div style={{fontFamily: '"Poppins", sans-serif', fontSize: '22px', color: '#5E2CED'}}>&nbsp;tutorlancer</div>
                                                    </div>
                                                    </a>
                                                    <div className="widget-wrap">
                                                        <p className="f_400 f_p f_size_15 mb-0 l_height34"><span>Email:</span> <a href="mailto:support@thetutorlancer.com" className="f_400">support@thetutorlancer.com</a></p>
                                                        <p className="f_400 f_p f_size_15 mb-0 l_height34"><span>Phone:</span> <a href="tel:916289409441" className="f_400">+91 6289409441</a></p>
                                                        <p className="f_400 f_p f_size_15 mb-0 l_height34"><span>Address:</span> C/O-S.K.Mishra, C.M.R.S. Gate, Bartand, Dhanbad, DHANBAD, Dhanbad, Jharkhand, India (826001)</p>
                                                    </div>
                                                    {/* <form action="#" className="f_subscribe mailchimp" method="post">
                                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"/>
                                                        <button className="btn btn-submit" type="submit"><i className="ti-arrow-right"></i></button>
                                                    </form> */}
                                                </div>
                                            </div>
                                        </Reveal>
                                    )
                                })
                            }
                            <AboutWidget ftitle="About Us"  FooterData={FooterData}/>
                            <SolutionWidget ftitle="Workflow Solutions" FooterData={FooterData} onClickService={onClickService}/>
                            {/* <TeamWidget ftitle="Team Solutions" FooterData={FooterData}/> */}
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                <p className="mb-0 f_400" style={{fontSize: '14px'}}>{FooterData.copywrite}</p>
                            </div>
                            <div className="col-lg-4 col-md-3 col-sm-6">
                                {/* <div className="f_social_icon_two text-center">
                                    {
                                        FooterData.socialIcon.map(item =>{
                                            return(
                                                <a href="/" key={item.id}><i className={item.icon}></i></a>
                                            )
                                        })
                                    }
                                </div> */}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <ul className="list-unstyled f_menu text-right">
                                    <li><a href="/termsConditions">Terms & conditions</a></li>
                                    <li><a href="/privacyPolicy">Privacy Policy</a><span style={{marginLeft: '10px'}}><a href="/refundPolicy">| &nbsp; Refunds</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default FooterTwo;