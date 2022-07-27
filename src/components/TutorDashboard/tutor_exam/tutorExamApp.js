import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*------ Pages-----*/
import Header from "../Components/dashboard-navbar";
import TutorExam from "../Pages/tutor_exam/TutorExam";
import TutorExamEntrance from "../Pages/tutor_exam/TutorExamEntrance";
import TutorExamEnd from "../Pages/tutor_exam/TutorExamEnd";
import { Puff } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  const [subList, setSubList] = useState([]);
  const [selectedSub, setSelectedSub] = useState([]);
  const [currentBase64, setCurrentBase64] = useState([]);
  const [keyArSend, setKeyArSend] = useState([]);
  const [subject, setSubject] = useState();
  const [resultStatus, setResultStatus] = useState();
  const [result, setResult] = useState();
  const [examId, setExamId] = useState();
  const [tutorId, setTutorId] = useState(JSON.parse( localStorage.getItem("tutor")).saveTutor.tutor_id);
  const [timeOfTest, setTimeOfTest] = useState();
  // const [temp_tutExam,setTemp_tutExam]=useState()
  const [loading, setLoading] = useState(true);
  var subjectList = [
    "Soil Mechanics",
    "Mass Transfer",
    "Business Math",
    "Physical chemistry",
  ];

  // let tutorId="EDUT808"

  useEffect(() => {
    const findForm2 = async () => {
      const find_examId = await axios.post(
        // "https://device6chatapi.el.r.appspot.com/api/tutor/find_examId",
        "https://device6chatapi.el.r.appspot.com/api/tutorweb/find_examId",
        { tutorId:  JSON.parse( localStorage.getItem("tutor")).saveTutor.tutor_id }
      );

      console.log({ debug_tutorId: find_examId });
      if ( find_examId?.data?.success === true) {
        let exmId = find_examId?.data?.examId?.split("_")[1];
        let newId = +exmId + 1;
        // console.log({newId})
        let newId2 = tutorId + "_" + newId;
        // console.log({newId2})
        let get_subject_updated=[];
      //  find_examId?.data?.tutor_exam?.map((el)=>{
      //   exam_given.push(el.subject)
      //  })
        const get_subjects = await axios.get(
          "https://device6chatapi.el.r.appspot.com/api/tutor/get_subjects"
        );
        if(get_subjects){
          // console.log({get_subjects:get_subjects?.data?.subVal[0][0]})
          // console.log({tutor_exam:find_examId?.data?.tutor_exam})
          get_subject_updated=get_subjects?.data?.subVal;
          let temp_getSub=find_examId?.data?.tutor_exam?.map((el)=>{ 
             get_subject_updated=get_subject_updated?.filter(el2=>el2[0]!==el.subject)
          });
        // console.log({get_subject_updated})
        setSubList(get_subject_updated);
        setExamId(newId2);
        setLoading(false);
        }
      } else {
        console.log("entering here in new tut id");
        let exmId = tutorId + "_1";
        const get_subjects = await axios.get(
          "https://device6chatapi.el.r.appspot.com/api/tutor/get_subjects"
        );
        console.log({get_subjects})
        if(get_subjects){
          console.log({get_subjects:get_subjects?.data?.subVal})
          
        setSubList(get_subjects?.data?.subVal);
        setExamId(exmId);
        setLoading(false);
        }
        // console.log({tutId})
      }
    };
    findForm2();
  }, []);

  const SelectedSub = (e) => {
    setSelectedSub([e]);
  };

  const CurrentBase64_func = (val) => {
    console.log({ valbase64: val });
    setCurrentBase64(val);
  };

  const key_func = (value) => {
    setKeyArSend(value);
  };
  const setResult_func = (value) => {
    setResult(value);
  };

  const setResultStatus_func = (value) => {
    console.log({valueStatus:value})
    setResultStatus(value);
  };

  const setSubject_func = (value) => {
    setSubject(value);
    console.log({ subject });
  };
  
  const setLocalSt=(temp_tutorObj)=>{
    let tutor_stringified = JSON.stringify(temp_tutorObj);
    localStorage.setItem("tutor", tutor_stringified);
  }

  // useEffect(()=>{

  //   setLocalSt(temp_tutExam)
  //  },[temp_tutExam])
  return (
    <Fragment>
      <Header name={JSON.parse(localStorage?.getItem("tutor"))?.saveTutor?.name} saveTutor={JSON.parse(localStorage?.getItem("tutor"))?.saveTutor}/>
      <Router>
        <Switch>
          <Route exact path="/tutor_exam">
            {loading && (
              <div style={{ marginLeft: "45%", marginTop: "20%" }}>
                <Puff
                  heigth="100"
                  width="100"
                  color="#01b1b1"
                  ariaLabel="loading"
                />
              </div>
            )}
            {!loading && (
              <TutorExamEntrance
                subList={subList}
                SelectedSub={SelectedSub}
                CurrentBase64_func={CurrentBase64_func}
                key_func={key_func}
                setTimeOfTest={setTimeOfTest}
                setLocalSt={setLocalSt}
              />
            )}
          </Route>
          <Route path="/tutor_exam/sheet">
            <TutorExam
              subjectList={selectedSub}
              currentBase64={currentBase64}
              keyArSend={keyArSend}
              setResult_func={setResult_func}
              setResultStatus_func={setResultStatus_func}
              timeOfTest={timeOfTest}
              setSubject_func={setSubject_func}
              examId={examId}
              tutorId={tutorId}
              setLocalSt={setLocalSt}
            />
          </Route>
          <Route path="/tutor_exam/submitted">
            <TutorExamEnd
              subject={selectedSub}
              result={result}
              resultStatus={resultStatus}
              examId={examId}
            />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
