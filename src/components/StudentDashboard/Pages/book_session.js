import React, { useState } from "react";

import FormElem from "../Components/book_session/FormElem";
import Header from "../Components/dashboard-navbar";
import Sidebar from "../Components/sidebar";

import classes from "./book_session.module.css";

const Dashboard = (props) => {
  const [isSelected, setIsSelected] = useState("Dashboard");
  const [itsClicked, setItsClicked] = useState("session");

  return (
    <div>
      <Sidebar setIsSelected={setIsSelected} itsClicked={itsClicked} />
      <Header profilePic={props.profilePic} name = {props.values.username}/>

      <div style={{marginTop:"6rem"}} className={classes['pcoded-main-container']}>
        <div className={classes['pcoded-wrapper']}>
          <div className={classes['pcoded-content']}>
            <div className={classes['pcoded-inner-content']}>
              <FormElem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
