import React, { useState, useEffect } from "react";
import Navi from "./Navi";
import Header from "./Header";
import AddHistory from "./AddHistory";
import axios from "axios";
import ChangeButtons from "./ChangeButtons";
import Card from "@mui/material/Card";

// import "./Profile.css";

const History = () => {
  const [hist1, setHist] = useState();
  const [liveHist1, setLiveHist] = useState();
  const [isClick, setIsClick] = useState(false);
  var hist;
  var liveHist;
  const DUMMY_History = [
    {
      id: "m1",
      date: "09-09-2022",
      session: "live",
      subject: "mathematics",
      charges: "$22.99",
      payment: "$21",
    },
    {
      id: "m2",
      date: "10-09-2022",
      session: "live",
      subject: "mathematics",
      charges: "$22.99",
      payment: "$21",
    },
    {
      id: "m3",
      date: "11-09-2022",
      session: "assignment",
      subject: "mathematics",
      charges: "$22.99",
      payment: "$21",
    },
    {
      id: "m4",
      date: "19-09-2022",
      session: "live",
      subject: "mathematics",
      charges: "$22.99",
      payment: "$21",
    },
  ];

  const historyHandler = async () => {
    // const date1=item.date.toDateString();
    await axios
      .post("https://device2api.el.r.appspot.com/client/history", {
        email: localStorage.getItem("email"),
      })
      .then((res1) => {
        console.log(res1.data);
        hist = res1.data.map((item) => (
          <AddHistory
            isClick={isClick}
            key={item._id}
            date={item.date}
            subject={item.subject}
          />
        ));
        setHist(hist);
      })
      .catch((err) => console.log("not able to get sessions"));
  };
  useEffect(() => {
    console.log("useeffect is working");
    historyHandler();
  }, []);

  const liveHistoryHandler = async () => {
    await axios
      .post("https://device2api.el.r.appspot.com/client/liveHistory", {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        console.log(res.data);
        liveHist = res.data.map((item) => (
          <AddHistory
            isClick={isClick}
            key={item._id}
            date={item.date}
            sessionDate={item.dates}
            subject={item.subject}
          />
        ));
        setLiveHist(liveHist);
      })
      .catch((err) => console.log("not able to get sessions"));
  };
  useEffect(() => {
    console.log("useeffect is working");
    liveHistoryHandler();
  }, []);

  return (
    <div>
      <Navi />
      <Header />

      <div class="h_price_inner">
        <div>
          <ChangeButtons isClick={isClick} setIsClick={setIsClick} />
          {!isClick && (
            <div class="tab-content h_price_tab" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {/* <p>

              </p> */}
                <div class="h_price_body">
                  <div class="price_head">
                    <div class="p_head">
                      <h5>Date</h5>
                    </div>

               <div class="p_head">
              <h5>Session Type</h5>
            </div>

               <div class="p_head">
              <h5>Subject</h5>
            </div>
            <div class="p_head">
              <h5>Status</h5>
            </div>
            <div class="p_head">
              <h5>Charges </h5>
            </div>
            <div class="p_head">
              <h5>Payment</h5>
            </div>
            <div class="p_head c_width">
            <div className="h_price_item c_width">
            </div>
            </div>

            </div>

            <main class="MuiContainer-root MuiContainer-maxWidthMd css-1ogza8y">
              <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-5 css-r6ceg9">
                <div class=" row MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 css-1057s6h">
            <div class="row">{hist1}</div>
              </div>
              </div>
             </main>
                </div>
              </div>
             </div>
          )}

          {isClick && (
            <div class="tab-content h_price_tab" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {/* <p>
            
            </p> */}
                <div class="h_price_body">
                  <div class="price_head">
                    <div class="p_head">
                      <h5>Date</h5>
                    </div> 
                    <div class="p_head">
                  <h5>Session Type</h5>
                </div>
                    <div class="p_head">
                      <h5>Subject</h5>
                    </div>
                    <div class="p_head">
                      <h5>Session Date</h5>
                    </div>
                    <div class="p_head">
                      <h5>Status</h5>
                    </div>
                    <div class="p_head">
                      <h5>Charges </h5>
                    </div>
                    <div class="p_head">
                      <h5>Payment</h5>
                    </div>
                    <div className="p_head c_width">
                      <div className="h_price_item c_width"></div>
                    </div>
                  </div>
                  {liveHist1}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
