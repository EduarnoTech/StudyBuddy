import React,{useState} from "react";
import BreadCrumb from "./BreadCrumb";
import FormElem from "./FormElem";
import Header from "./Header";
import Navi from "./Navi";
import Profile from "./Profile";
import History from "./History";
import './Students.css'


const Dashboard = (props) => {
  // const [isLogOut,setIsLogOut]=useState(false)
  
  // setIsLogOut(props.isSignIn)
  const [isSelected,setIsSelected]=useState("Dashboard")
  const [itsClicked, setItsClicked] = useState("session");
  
  return (
    <div >
              <Navi setIsSelected={setIsSelected} itsClicked={itsClicked}/>
             <Header />
        <div class="pcoded-main-container">
         <div class="pcoded-wrapper">
           <div class="pcoded-content">
             <div class="pcoded-inner-content">
              {/* <BreadCrumb /> */}
               <FormElem />
              {/* {isSelected==="Profile" && <Profile />}
              {isSelected==="Dashboard" && <History />} */}
              
              
              
              {/* <Switch>
          <Route path="/profile">
          <Profile />
          </Route>
          <Route path="/">
            <Users />
          </Route>
          <Route path="/">
            <Hostory />
          </Route>
        </Switch> */}


            </div>
          </div>
        </div>
      </div> 
    </div> 
  );
};

export default Dashboard;
