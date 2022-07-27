import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./sidebar.module.css"

const Sidebar = (props) => {
 
  const clickHandlerLog = () => {
    localStorage.removeItem("admin")
    props.setOpenAdmin(false)
    
   
    // window.location.reload();
  };

  return (
    <div>
      <div className={classes["loader-bg"]}>
        <div className={classes["loader-track"]}>
          <div className={classes["loader-fill"]}></div>
        </div>
      </div>
      <nav className={classes["pcoded-navbar"]}  style={{backgroundColor:"#121828"}}>
        <div className={classes["navbar-wrapper"]}>
          <div className={classes["navbar-brand"] && classes["header-logo"]}  style={{backgroundColor:"#121828"}}>
            <Link to="/dashboard" className={classes["b-brand"]}>
              <div class="b-bg">
                <i class="feather icon-trending-up"></i>
              </div>
              <span className={classes["b-title"]}>
                <img style={{width: '20px'}} src={require("../../../img/logo1.png")} alt="logo"/> &nbsp;
                tutorlancer
              </span>
            </Link>
            <a className={classes["mobile-menu"]} id="mobile-collapse" href="javascript:">
              <span></span>
            </a>
          </div>
          <div className={classes["navbar-content"] && classes["scroll-div"]}>
            <ul className={classes["pcoded-inner-navbar"]}>
              {/* <li className="nav-item pcoded-menu-caption">
                        <label>Navigation</label>
                    </li> */}

              <li
                data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                style={{width:"229%"}}
                className={
                  props.itsClicked === "tutor's Approval"
                    ? classes["nav-item"] && classes.active
                    : classes["nav-item"]
                }
              >
               
                <Link to="/tutor_dashboard" className={classes["nav-link"]}>
                  <span className={classes["pcoded-micon"]}>
                    <i class="fa fa-check"></i>
                  </span>
                  <span style={{ fontSize: "17px" }} class={classes["pcoded-mtext"]}>
                    Tutors Approval 
                  </span>
                </Link>
              </li>

              <li
                data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                style={{width:"229%"}}
                className={
                  props.itsClicked === "dashboard"
                    ? classes["nav-item"] && classes.active
                    : classes["nav-item"]
                }
              >
               
                {/* <Link to="/tutor_dashboard" className={classes["nav-link"]}>
                  <span className={classes["pcoded-micon"]}>
                    <i class="feather icon-home"></i>
                  </span>
                  <span style={{ fontSize: "17px" }} class={classes["pcoded-mtext"]}>
                    Previous Approval
                  </span>
                </Link> */}
              </li>

              

              {/* <li data-username="Sample Page" className="nav-item"><a href="sample-page.html" className="nav-link"><span className="pcoded-micon"><i className="feather icon-sidebar"></i></span><span className="pcoded-mtext">Sample page</span></a></li> */}
              <li data-username="Disabled Menu"  style={{paddingLeft:"20px",paddingTop:"12px", width:"229%"}} className={classes["nav-link disabled"]}>
                <div onClick={clickHandlerLog}>
                  <Link to="/" className={classes["nav-link "]} >
                  <span className={classes["pcoded-micon"]}>
                      <i class="feather icon-power" style={{fontSize:"20px",marginRight:"7px"}}></i>
                    </span>{" "}
                    <span style={{ fontSize: "17px" }} className={classes["pcoded-mtext"]}>
                     {"   "} Log Out
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
