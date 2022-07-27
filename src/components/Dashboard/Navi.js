import React,{useState} from 'react';
import {Link} from 'react-router-dom'




const Navi = (props) => {

    // const[itsClicked,setItsClicked]=useState("session")

    // const historyHandler=(e)=>{
    //     // e.preventDefault()
    //     setItsClicked("history")
    // }
    // const sessionHandler=(e)=>{
    //     // e.preventDefault()
    //     setItsClicked("session")
    // }

    // const porfileHandler=(e)=>{
    //     // e.preventDefault()
    //     setItsClicked("profile")

    // }
    const clickHandlerLog=()=>{
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        window.location.reload()
      }
   
    return (
        <div>
            <div class="loader-bg">
        <div class="loader-track">
            <div class="loader-fill"></div>
        </div>
    </div>
            <nav class="pcoded-navbar">
        <div class="navbar-wrapper">
            <div class="navbar-brand header-logo">
               <Link to="/Home" class="b-brand">
                   <div class="b-bg">
                       <i class="feather icon-trending-up"></i>
                   </div>
                   <span class="b-title">tutorlancer</span>
               </Link>
               <a class="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
           </div>
            <div class="navbar-content scroll-div">
                <ul class="nav pcoded-inner-navbar">
                    <li class="nav-item pcoded-menu-caption">
                        <label>Navigation</label>
                    </li>
                    <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" class={(props.itsClicked==="history")?"nav-item active":"nav-item "}>
                    {/* <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" > */}
                       <Link to="/History" class="nav-link " ><span class="pcoded-micon"><i class="feather icon-home"></i></span><span style={{fontSize:'17px'}} class="pcoded-mtext" >History</span></Link>
                    </li>
                    {/* <li class="nav-item pcoded-menu-caption">
                        <label>UI Element</label>
                    </li>
                    <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" class="nav-item pcoded-hasmenu">
                        <a href="javascript:" class="nav-link "><span class="pcoded-micon"><i class="feather icon-box"></i></span><span class="pcoded-mtext">Componant</span></a>
                        <ul class="pcoded-submenu">
                            <li class=""><a href="bc_button.html" class="">Button</a></li>
                            <li class=""><a href="bc_badges.html" class="">Badges</a></li>
                            <li class=""><a href="bc_breadcrumb-pagination.html" class="">Breadcrumb & paggination</a></li>
                            <li class=""><a href="bc_collapse.html" class="">Collapse</a></li>
                            <li class=""><a href="bc_tabs.html" class="">Tabs & pills</a></li>
                            <li class=""><a href="bc_typography.html" class="">Typography</a></li>
                            <li class=""><a href="icon-feather.html" class="">Feather<span class="pcoded-badge label label-danger">NEW</span></a></li>
                        </ul>
                    </li> */}
                    <li class="nav-item pcoded-menu-caption">
                        <label>Functionalities</label>
                    </li>
                    <li data-username="form elements advance componant validation masking wizard picker select" class={(props.itsClicked==="session")?"nav-item active":"nav-item "} >
                     <Link to="/" class="nav-link " ><span class="pcoded-micon"><i class="feather icon-file-text"></i></span><span style={{fontSize:'17px'}} class="pcoded-mtext" >Sessions</span></Link>
                    </li>
                    <li data-username="Table bootstrap datatable footable" class={(props.itsClicked==="profile")?"nav-item active":"nav-item "}>
                   <Link to="/Profile" class="nav-link " ><span class="pcoded-micon"  ><i class="feather icon-server"></i></span><span style={{fontSize:'17px'}} class="pcoded-mtext"  >Profile</span></Link>
                    </li>
                    {/* <li class="nav-item pcoded-menu-caption">
                        <label>Chart & Maps</label>
                    </li>
                    <li data-username="Charts Morris" class="nav-item"><a href="chart-morris.html" class="nav-link "><span class="pcoded-micon"><i class="feather icon-pie-chart"></i></span><span class="pcoded-mtext">Chart</span></a></li>
                    <li data-username="Maps Google" class="nav-item"><a href="map-google.html" class="nav-link "><span class="pcoded-micon"><i class="feather icon-map"></i></span><span class="pcoded-mtext">Maps</span></a></li>
                    <li class="nav-item pcoded-menu-caption">
                        <label>Pages</label>
                    </li> */}
                    {/* <li data-username="Authentication Sign up Sign in reset password Change password Personal information profile settings map form subscribe" class="nav-item pcoded-hasmenu">
                        <a href="javascript:" class="nav-link "><span class="pcoded-micon"><i class="feather icon-lock"></i></span><span class="pcoded-mtext">Authentication</span></a>
                        <ul class="pcoded-submenu">
                            <li class=""><a href="auth-signup.html" class="" target="_blank">Sign up</a></li>
                            <li class=""><a href="auth-signin.html" class="" target="_blank">Sign in</a></li>
                        </ul>
                    </li> */}
                    {/* <li data-username="Sample Page" class="nav-item"><a href="sample-page.html" class="nav-link"><span class="pcoded-micon"><i class="feather icon-sidebar"></i></span><span class="pcoded-mtext">Sample page</span></a></li> */}
                    <li data-username="Disabled Menu" class="nav-item disabled"><div onClick={clickHandlerLog}><Link to="/" class="nav-link"><span  class="pcoded-micon"><i class="feather icon-power"></i></span><span style={{fontSize:'17px'}} class="pcoded-mtext"  >Log Out</span></Link></div></li>
                </ul>
            </div>
        </div>
    </nav>
        </div>
    );
};

export default Navi;