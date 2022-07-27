// import ReactNotification from "react-notifications-component";
// import "react-notifications-component/dist/theme.css";
// import { store } from "react-notifications-component";
// import "animate.css";

import React from "react";
import '../assets/assets/images/user/avatar-1.jpg'

const AddNotify = (props) => {
  return (
    <div>
      {/* <div className="app-container">
        <ReactNotification />
        <Home />
      </div> */}

                      <li class="n-title">
                        <p class="m-b-0">{props.status}</p>
                      </li>
                      <li class="notification">
                        <div class="media">
                          <img
                            class="img-radius"
                            src="../assets/assets/images/user/avatar-1.jpg"
                            // alt="Generic placeholder image"
                          />
                          <div class="media-body">
                            <p>
                              <strong>{props.name}</strong>
                              <span class="n-time text-muted">
                                <i class="icon feather icon-clock m-r-10"></i>{props.time}
                              
                              </span>
                            </p>
                            <p>{props.para}</p>
                          </div>
                        </div>
                      </li>

    </div>
  );
};




export default AddNotify;
