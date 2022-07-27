import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./sidebar.module.css"

const Sidebar = (props) => {
 
  const clickHandlerLog = () => {
    localStorage.removeItem("user");
    window.location.reload();
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
                  props.itsClicked === "dashboard"
                    ? classes["nav-item"] && classes.active
                    : classes["nav-item"]
                }
              >
               
                <Link to="/dashboard" className={classes["nav-link"]}>
                  <span className={classes["pcoded-micon"]}>
                    <i class="feather icon-home"></i>
                  </span>
                  <span style={{ fontSize: "17px" }} class={classes["pcoded-mtext"]}>
                    Dashboard
                  </span>
                </Link>
              </li>

              <li
                data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                style={{width:"229%"}}
                class={
                  props.itsClicked === "history"
                    ? classes["nav-item"] && classes.active
                    : classes["nav-item "]
                }
              >
                {/* <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" > */}
                <Link to="/dashboard/history" className={classes["nav-link "]}   >
                <span className={classes["pcoded-micon"]}>
                    <i className="fa fa-history"></i>
                  </span>
                  <span style={{ fontSize: "17px" }} className={classes["pcoded-mtext"]}>
                    History
                  </span>
                </Link>
              </li>

              <li
                data-username="Table bootstrap datatable footable"
                
                style={{width:"229%"}}
                
                className={
                  props.itsClicked === "upcomingSessions"
                  ?classes["nav-item"] && classes.active
                  : classes["nav-item"]
                }
              >
                <Link to="/dashboard/upcomingSessions" className={classes["nav-link "]} >
                <span className={classes["pcoded-micon"]}>
                    <i class="fas fa-chalkboard-teacher"></i>
                  </span>
                  <span style={{ fontSize: "17px" }} className={classes["pcoded-mtext"]}>
                    Upcoming Sessions
                  </span>
                </Link>
              </li>

              {/* <li
                data-username="form elements advance componant validation masking wizard picker select"
                class={
                  props.itsClicked === "session"
                    ? "nav-item active"
                    : "nav-item "
                }
              >
                <Link to="/dashboard/bookSessions" class="nav-link ">
                  <span class="pcoded-micon">
                    <i class="feather icon-file-text"></i>
                  </span>
                  <span style={{ fontSize: "17px" }} class="pcoded-mtext">
                    Book Sessions
                  </span>
                </Link>
              </li> */}
              <li
                data-username="Table bootstrap datatable footable"
                style={{width:"229%"}}
                className={
                  props.itsClicked === "profile"
                    ? classes["nav-item"] && classes.active
                    : classes["nav-item "]
                }
              >
                <Link to="/dashboard/account" className={classes["nav-link "]}>
                <span className={classes["pcoded-micon"]}>
                    <i class="fas fa-user-edit"></i>
                  </span>
                  <span style={{ fontSize: "17px" }} className={classes["pcoded-mtext"]}>
                    Profile
                  </span>
                </Link>
              </li>

              {/* settings  */}
              <li
                data-username="Table bootstrap datatable footable"
                style={{width:"229%"}}
                className={
                  props.itsClicked === "settings"
                  ? classes["nav-item"] && classes.active
                  : classes["nav-item "]
                }
              >
                <Link to="/dashboard/settings" className={classes["nav-link "]}>
                <span className={classes["pcoded-micon"]}>
                    <i class="fa fa-cog"></i>
                  </span>
                  <span style={{ fontSize: "17px" }} className={classes["pcoded-mtext"]}>
                    Settings
                  </span>
                </Link>
              </li>

              {/* <li data-username="Sample Page" className="nav-item"><a href="sample-page.html" className="nav-link"><span className="pcoded-micon"><i className="feather icon-sidebar"></i></span><span className="pcoded-mtext">Sample page</span></a></li> */}
              <li data-username="Disabled Menu"  style={{paddingLeft:"20px",paddingTop:"12px", width:"229%", marginTop: "calc(100vh - 390px)"}} className={classes["nav-link disabled"]}>
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
