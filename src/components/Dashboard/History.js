import React, { useState, useEffect } from "react";
import Navi from "./Navi";
import Header from "./Header";
import AddHistory from "./AddHistory";
import axios from "axios";
import ChangeButtons from "./ChangeButtons";


const History = () => {
  const [isClick, setIsClick] = useState(false);
  const [hist1, setHist] = useState();
  const [liveHist1, setLiveHist] = useState();
 
  const [itsClicked, setItsClicked] = useState("history");
  var hist;
  var liveHist;
  // const DUMMY_History = [
  //   {
  //     id: "m1",
  //     date: "09-09-2022",
  //     session: "live",
  //     subject: "mathematics",
  //     charges: "$22.99",
  //     payment: "$21",
  //   },
  //   {
  //     id: "m2",
  //     date: "10-09-2022",
  //     session: "live",
  //     subject: "mathematics",
  //     charges: "$22.99",
  //     payment: "$21",
  //   },
  //   {
  //     id: "m3",
  //     date: "11-09-2022",
  //     session: "assignment",
  //     subject: "mathematics",
  //     charges: "$22.99",
  //     payment: "$21",
  //   },
  //   {
  //     id: "m4",
  //     date: "19-09-2022",
  //     session: "live",
  //     subject: "mathematics",
  //     charges: "$22.99",
  //     payment: "$21",
  //   },
  // ];

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
            isClick={false}
            key={item._id}
            date={item.date}
            deadline={item.deadline}
            subject={item.subject}
          />
        ));
        
        setHist(hist);
      })
      .catch((err) => console.log("not able to get sessions"));
  };
  useEffect(() => {
    console.log("useeffect is working");
    // setIsClick(false)
    historyHandler();
  }, []);

  const liveHistoryHandler = async () => {
    await axios
      .post("https://device2api.el.r.appspot.com/client/liveHistory", {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        console.log(res.data);
        liveHist=res.data;
        liveHist = res.data.map((item) => (
          <AddHistory

            isClick={true}
            key={item._id}
            date={item.date}
            deadline={item.deadline}
            sessionDate={item.dates}
            subject={item.subject}
          />
        ));
        // setIsClick(true)
        setLiveHist(liveHist);
        
      })
      .catch((err) => console.log("not able to get sessions"));
  };
  useEffect(() => {
    console.log("useeffect is working");
    // setIsClick(true)
    liveHistoryHandler();
  }, []);

  return (
    <div>
      <Navi itsClicked={itsClicked}/>
      <Header />

      <div class="h_price_inner">
        <div>
          <ChangeButtons isClick={isClick} setIsClick={setIsClick} />
          {!isClick && (
            <div class="row">{hist1}</div>
          )}

          {isClick && (
           
              
                <div class="row">{liveHist1}</div>

              
            
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
