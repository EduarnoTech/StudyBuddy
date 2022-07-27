import React,{useEffect,useState} from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Account from './account'
import History  from './customers'
import BookSession from'./book_session';
import Dashboard from "./index";
import axios from 'axios'
import { decode as atob, encode as btoa } from "base-64";
import Settings from "./settings";
import UpcomingSessions from "./upcoming_sessions";
import DashboardService from "../../../services/dashboard-service";
import AuthService from "../../../services/auth-service";

const Dashboard_main = () => {
  const [privateSec, setPrivateSec] = useState([]);
  const [sessionUser,setSessionUser]=useState([])
  const [upcomingSessionUser,setUpcomingSessionUser]=useState([])
  const [allSessions,setAllSessions]=useState([])
  const [upcomingLiveSession,setUpcomingLiveSession]=useState();
  const [upcomingAssignment,setUpcomingAssignment]=useState();
  const [totalSessions,setTotalSessions]=useState();

  const history = useHistory();


    const [values, setValues] = useState({
        username: '',
        email: '',
        university: '',
        branch: '',
        semester: '',
        facebookUsername:'',
        profilePic:'',
        countryCode:'',
        watsNumber:'',
        email:'',
        country:'',
        city:'',
        dateOfBirth:'',
        timezone:'',
        client_id:''
      });

      const [sessionValues,setSessionValues]=useState({
        type:'',
        subject:'',
        deadline:'',
        client_time:'',
        work_status:'',

      });


      // useEffect(() => {
      //   DashboardService.getAllPrivatePosts().then(
      //     (response) => {
      //       setPrivateSec(response.data);
      //     },
      //     (error) => {
      //       console.log("Private page", error.response);
      //       // Invalid token
      //       if (error.response && error.response.status === 403) {
      //         // AuthService.logout();
      //         // history.push("/SignIn");
      //         // window.location.reload();
      //       }
      //     }
      //   );
      // }, []);

      console.log(privateSec)

      // fetch profile
    const fetchProfile=async()=>{
        // const fetchProfile= {email:window.localStorage.getItem('email')})
        DashboardService.fetchProfile().then(
          (response) => {
            // setPrivateSec(response.data);
            if (response.data && response.data.length!=0) {


              let binaryProfilePic=response?.data?.profile?.profilePic?.data;
              let picObject=btoa(new Uint8Array(binaryProfilePic).reduce(function (data, byte) {
                return data + String.fromCharCode(byte);
            }, ''))
    
    
            console.log({profilePicTest1:picObject})
            let profilePicProper=`data:image/jpeg;base64,${picObject}`;
            let countryCodeVal1=response?.data?.profile?.countryCode?.slice(2,-1);
            let watsNo=response?.data.profile?.wa_id?.replace(countryCodeVal1,"");
            console.log({testCountryCode:countryCodeVal1,watsNo})
    
              setValues({
                
              username: response.data.profile.name,
              email: response.data.profile.emailId,
              university: response.data.profile.university,
              branch: response.data.profile.branch,
              semester: response.data.profile.semester,
              facebookUsername:response.data.profile.socialmedia,
              profilePic:profilePicProper,
              countryCode:response?.data?.profile?.countryCode,
              watsNumber:watsNo,
              country:response.data.profile.country,
              city:response.data.profile.city,
              dateOfBirth:response.data.profile.dateOfBirth,
              client_id:response.data.profile.uid,
              points: response.data.profile.points
            })
    
             
      
              console.log({profile199:response.data})
              console.log("profile pic fetched")
              
            }
            else{
              alert('Not getting profile details. Please again refresh this page')
            }   
          },
          (error) => {
            console.log("Private page", error.response);
            alert('User data not found!')
            // Invalid token
            if (error.response && error.response.status === 400) {
              AuthService.logout();
              history.push("/SignIn");
              window.location.reload();
            }
          }
        );
            
       
      }

      useEffect(()=>{
        fetchProfile()
      },[])

      //fetch session
      const fetchUserSession=async()=>{

        DashboardService.fetchUserSession().then(
              (response) => {
                if (response.data.allSessions && response.data.allSessions.length!=0) {
                  let sessionAr=response?.data?.sessionData;
                  let upcomingSessionUser=response?.data?.upcomingSessionData;
                  let allsession1=response?.data?.allSessions;
        
                  // sessionAr.sort((a, b) => new Date(a.client_time) - new Date(b.client_time));
                  // allsession1.sort((a, b) => new Date(b.client_time) - new Date(a.client_time));
                  console.log({testSessionAr:sessionAr})
                  setSessionUser(sessionAr)
                  setUpcomingSessionUser(upcomingSessionUser)
                  setAllSessions(allsession1)
          
                  console.log({sessionAr:sessionAr})
                  console.log("session user fetched")
                  
                  let liveCount=0;
                  let assignCount=0;
                  upcomingSessionUser.map((el)=>{
                    
                    if(el.type==="Live Session"){
                      liveCount+=1;
                    }
                    else{
                      assignCount+=1;
                    }
                  })
        
                  setTotalSessions(allsession1?.length)
        
                  setUpcomingLiveSession(liveCount)
                  setUpcomingAssignment(assignCount)
                  
                }
                else{
                  console.log('not getting session user . please again refresh this page')
                }   
              },
              (error) => {
                console.log("Private page", error.response);
                // Invalid token
                if (error.response && error.response.status === 403) {
                  // AuthService.logout();
                  // history.push("/SignIn");
                  // window.location.reload();
                }
              }
            );
        
            
       
      }

      useEffect(()=>{
        if(values.client_id!==null && values.client_id!=='')
        fetchUserSession()
      },[values.client_id])


  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route exact path="/dashboard">
            <Dashboard values={values} setValues={setValues} allSessions={allSessions} upcomingAssignment={upcomingAssignment} upcomingLiveSession={upcomingLiveSession} totalSessions={totalSessions}/>
          </Route>
          <Route exact path="/dashboard/account">
            <Account values={values} setValues={setValues}/>
          </Route>
          <Route exact path="/dashboard/upcomingSessions">
            <UpcomingSessions values={values} profilePic={values.profilePic} upcomingSessionUser={upcomingSessionUser} />
          </Route>
          <Route exact path="/dashboard/bookSessions">
            <BookSession values={values} profilePic={values.profilePic} />
          </Route>
          <Route exact path="/dashboard/history">
            <History values={values} profilePic={values.profilePic} sessionUser={sessionUser}/>
          </Route>
          <Route exact path="/dashboard/settings">
            <Settings values={values} profilePic={values.profilePic} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard_main;
