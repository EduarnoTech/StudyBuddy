import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./TutorExam.css";
import Loader1 from "../../Components/LinearLoder";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const TutorExam = (props) => {
  var num = 1;
  // let subjectList=['Soil Mechanics','Mass Transfer','Business Math','Physical chemistry']
  const [base64, setBase64] = useState([]);
  const [answer, setAnswer] = useState({});
  const [answerObject, setAnswerObject] = useState([]);
  const [inputId, setInputId] = useState();
  const [showTimer, setShowTimer] = useState(false);
  // const [examDone,setExamDone]=useState(false);

  const [timeEnds, setTimeEnds] = useState(false);
  const [isPage, setIsPage] = useState(true);
  const [result, setResult] = useState();
  const [loaderVisible, setLoaderVisible] = useState(false);

  // timer
  const { initialMinute = props.timeOfTest, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  // const [keyArray,setKeyArray]=useState()
  const history = useHistory();

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          setTimeEnds(true);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  // const handleClick=(e)=>{
  //   let val;
  //   let name=e.target.name;
  //   if(e.target.value===answer[e.target.name]){
  //     val=""
  //   }else{
  //     val= e.target.value;
  //   }
  //   console.log({temp_val:val})
  //   let inputObj = {};
  //   // setInputId(name);
  //   inputObj[name] = val;
  //   // setAnswer({ ...answer, ...inputObj });
  //   setAnswer({ ...answer, ...inputObj });
  // }

  const changeHandler = (e) => {
    let val;
    let name = e.target.name;
    console.log({val:e.target.value,answe:answer[name],name:e.target.name})
    if(e.target.value===answer[e.target.name]){
      val=null
    }else{
      val= e.target.value;
    }
    
    
    let key = e.target.key;
    // const regMatch = /^[a-dA-D]*$/.test(val);

    // if (val.length <= 1 && regMatch) {
    // val = val.toUpperCase();
    let Id = e.target.id;
    console.log({ targetName: name });
    console.log({ ID_test: key });
    let inputObj = {};
    // setInputId(name);
    inputObj[name] = val;
    // setAnswer({ ...answer, ...inputObj });
    setAnswer({ ...answer, ...inputObj });
    // setAnswerObject()

    // }
  };
  console.log({ answer });

  const get_questions = async () => {
    console.log({ subjectList: props.subjectList });
    //   const getQues=await Axios.post("https://device2api.el.r.appspot.com/tutor/get_questions",{subjectList:props.subjectList});

    //   if (getQues?.data?.questionArr?.length!==0){
    //     console.log({getQues:getQues.data.questionArr})
    //     let keys=getQues.data.keyArr
    //     setKeyArray(getQues.data.keyArr)
    //     console.log({keys})

    //     let getQuesAr=getQues.data.questionArr;
    //     let base64String=[];
    //     getQuesAr.map((el)=>{

    //      base64String.push(btoa(String.fromCharCode(...new Uint8Array(el.data))));
    //     // const base64String = new Buffer.from(getQues.data.questionArr.data).toString("ascii")

    //   })
    // console.log({base64String});
    setBase64(props.currentBase64);
    // }
    // else{
    //   console.log({getQues:"not Found"})
    // }
  };

  const submitHandler = async () => {
    let answerObj = [];
    setLoaderVisible(true);
    props.keyArSend.map((el3, index) => {
      let oneObject = { Key: "", Answer: "", Subject: "" };
      oneObject.Key = el3[0];
      oneObject.Subject = el3[1];
      oneObject.Answer = answer[index + 1];
      answerObj.push(oneObject);
    });
    console.log({ answerObj });
    // const getSheet = await Axios.post("https://device6chatapi.el.r.appspot.com/api/tutor/get_sheet", {
    const getSheet = await Axios.post(
      "https://device6chatapi.el.r.appspot.com/api/tutorweb/get_sheet",
      {
        answerObj,
        subjectList: props.subjectList,
        tutorId: props.tutorId,
        examId: props.examId,
      }
    );

    if (getSheet.data.success === true) {
      // alert("Congrats!!!You passed the test")
      // setMinutes(0)
      // setSeconds(0)
      let tutor1 = JSON.parse(localStorage.getItem("tutor"));
      let tutor_ls = JSON.parse(localStorage.getItem("tutor")).saveTutor;
      let tutor_exam_temp = JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutor_exam;

      if (getSheet.data.status === "pass") {
        let tutor_exam_obj = {
          exam_id: getSheet?.data?.exam_id,
          subject: getSheet?.data?.subject,
          marks: getSheet?.data?.result,
          passing_marks: getSheet?.data?.passing_marks,
          status: getSheet?.data?.status
        };

        let temp_tutorSaveObj = {
          ...tutor_ls,
          tutStatus: "exl",
          tutor_exam:[...tutor_exam_temp,tutor_exam_obj]
        };
        console.log({ tutor_ls });
        let temp_tutorObj = {
          ...tutor1,
          saveTutor: temp_tutorSaveObj
        };
        // let tutor_stringified = JSON.stringify(temp_tutorObj);
        // localStorage.setItem("tutor", tutor_stringified);
        props.setLocalSt(temp_tutorObj)
        // props.setTemp_tutExam(temp_tutorObj)
        const res = await Axios({
          method: "post",
          // url: "https://annular-arena-331607.el.r.appspot.com/api/tutorWeb/tutor_save",
          url: `https://device6chatapi.el.r.appspot.com/api/tutorweb/setTutorDetailsByForm/${
            JSON.parse(localStorage.getItem("tutor")).saveTutor.tutor_id
          }`,
          data: {
            email: tutor_ls.email,
            name: tutor_ls.name,
            branch: tutor_ls.branch,
            highest_degree: tutor_ls.highest_degree,
            university: tutor_ls.university,
            skills: tutor_ls.skills,
            best_subjects: tutor_ls.best_subjects,
            wa_id: tutor_ls.wa_id,
            software_skills: tutor_ls.software_skills,
            tutStatus: "exl",
            tags: getSheet?.data?.subject
          },
        });
      } else {
        let tutor_exam_obj = {
          exam_id: getSheet?.data?.exam_id,
          subject: getSheet?.data?.subject,
          marks: getSheet?.data?.result,
          passing_marks: getSheet?.data?.passing_marks,
          status: getSheet?.data?.status
        };

        let temp_tutorSaveObj = {
          ...tutor_ls,
          tutStatus: "ex",
          tutor_exam:[...tutor_exam_temp,tutor_exam_obj]
        };
        console.log({ tutor_ls });
        let temp_tutorObj = {
          ...tutor1,
          saveTutor: temp_tutorSaveObj,
        };
        // let tutor_stringified = JSON.stringify(temp_tutorObj);
        // localStorage.setItem("tutor", tutor_stringified);
        // props.setTemp_tutExam(temp_tutorObj)
        props.setLocalSt(temp_tutorObj)
      }
      history.replace("/tutor_exam/submitted");
      setShowTimer(false);
      setLoaderVisible(false);
      props.setResult_func(getSheet.data.result);
      props.setResultStatus_func(getSheet.data.status);
      props.setSubject_func(getSheet.data.subject);
      // setExamDone(true)
      console.log({ marks: getSheet.data.result });
    }
  
    else {
      setMinutes(0);
      setSeconds(0);
      // setExamDone(false)
      setLoaderVisible(false);
      alert("something went wrong!!");
    }
  };

  useEffect(() => {
    // setCount("1")
    if (props.currentBase64.length !== 0) {
      setIsPage(true);
      get_questions();
    } else {
      setIsPage(false);
    }
  }, []);

  useEffect(() => {
    // setCount("1")
    if (minutes === 0 && seconds === 0) {
      submitHandler();
    }
  }, [timeEnds]);
  // console.log({answer:answer})

  return (
    <>
      {loaderVisible && <Loader1 />}

      {isPage && (
        <div style={{ marginTop: "6rem" }}>
          {
            <div id="countdown">
              {minutes === 0 && seconds === 0 ? (
                <div>
                  <div className="minutes">
                    {" "}
                    <div className="c-number">00</div> MINUTES
                  </div>
                  <div className="seconds">
                    {" "}
                    <div className="c-number">00 </div>SECONDS
                  </div>
                </div>
              ) : (
                <div>
                  <div className="minutes">
                    {" "}
                    <div className="c-number">{minutes}</div> MINUTES
                  </div>
                  <div className="seconds">
                    {" "}
                    <div className="c-number">
                      {seconds < 10 ? `0${seconds}` : seconds}{" "}
                    </div>
                    SECONDS
                  </div>
                </div>
              )}
            </div>
          }

          <div
            role="main"
            class="form-all"
            style={{
              marginLeft: "27%",
              marginTop: "30px",
              width: "50%",
              height: "46rem",
              overflowY: "scroll",
            }}
          >
            <ul class="form-section page-section">
              {/* <li id="cid_1" class="form-input-wide" data-type="control_head"><div  id="countdown">
        { (minutes === 0 && seconds === 0)
            ? null
            : <div >
              
              <div className="minutes"> <div className="c-number">{minutes}</div> MINUTES</div> 
           <div className="seconds"> <div className="c-number">{seconds < 10 ?  `0${seconds}` : seconds} </div>SECONDS</div> 
           
           </div>
        }
        </div></li> */}
              <li id="cid_1" class="form-input-wide" data-type="control_head">
                <div class="form-header-group  header-default">
                  <div class="header-text httac htvam">
                    <h2
                      id="header_1"
                      class="form-header"
                      data-component="header"
                      style={{ textAlign: "center" }}
                    >
                      Tutor Registration Test
                    </h2>
                  </div>
                </div>
              </li>

              {base64.map((el1) => (
                <div>
                  <li class="form-line" data-type="control_divider" id="id_34">
                    <div id="cid_34" class="form-input-wide">
                      <div
                        class="divider"
                        aria-label="Divider"
                        data-component="divider"
                        style={{
                          borderBottomWidth: "1px",
                          borderBottomStyle: "solid",
                          borderColor: "#e6e6e6",
                          height: "1px",
                          marginLeft: "0px",
                          marginRight: "0px",
                          marginTop: "5px",
                          marginBottom: "5px",
                        }}
                      ></div>
                    </div>
                  </li>
                  <li class="form-line" data-type="control_textarea" id="id_6">
                    <label
                      class="form-label form-label-top form-label-auto"
                      id="label_6"
                      for="input_6"
                    >
                      {" "}
                      Question {num}
                      {/* {setCount(count+1)} {" "} */}
                    </label>
                    <div id="cid_6" class="form-input-wide">
                      <img
                        src={`data:image/jpeg;base64,${el1}`}
                        alt=""
                        style={{ width: "-webkit-fill-available" }}
                      />
                      {/* <input
                key={num}
                id={`${num}`}
                name="q4_studentId"
                data-type="input-number"
                class=" form-number-input form-textbox"
                data-defaultvalue=""
                style={{ width: "140px" }}
                size="15"
                onChange={(e)=>changeHandler(e)}
                
                value={answer[`${num++}`]}
                placeholder="Option A,B,C or D"
                
                aria-labelledby="label_4"
                step="any"
              /> */}
                      <FormControl>
                        {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                        {/* <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
              >
                <FormControlLabel value="A" control={<Radio />} label="A" />
                <FormControlLabel value="B" control={<Radio />} label="B" />
                <FormControlLabel value="C" control={<Radio />} label="C" />
                <FormControlLabel value="D" control={<Radio />} label="D" />
              </RadioGroup> */}

                        <RadioGroup
                          row
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name={num}
                          onChange={changeHandler}
                          // key={num}
                          // id={`${num}`}
                          value={answer[`${num++}`]}
                          style={{
                            marginLeft: "10px",
                            marginTop: "25px",
                            marginBottom: "-25px",
                          }}
                        >
                          <FormControlLabel
                            value="A"
                            control={<Radio  />}
                            label="A"
                          />
                          <FormControlLabel
                            value="B"
                            control={<Radio  />}
                            label="B"
                          />
                          <FormControlLabel
                            value="C"
                            control={<Radio  />}
                            label="C"
                          />
                          <FormControlLabel
                            value="D"
                            control={<Radio  />}
                            label="D"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </li>
                </div>
              ))}

             
              <li class="form-line" data-type="control_button" id="id_2">
                <div id="cid_2" class="form-input-wide">
                  <div
                    style={{ textAlign: "center", dataAlign: "center" }}
                    class="form-buttons-wrapper form-buttons-center   jsTest-button-wrapperField"
                  >
                    <button
                      id="input_2"
                      type="submit"
                      class="form-submit-button submit-button jf-form-buttons jsTest-submitField"
                      onClick={submitHandler}
                      data-component="button"
                      data-content=""
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </li>
              <li style={{ display: "none" }}>
                Should be Empty:
                <input type="text" name="website" value="" />
              </li>
            </ul>
          </div>
        </div>
      )}

      {!isPage && (
        <div style={{ textAlign: "center", marginTop: "10%" }}>
          <h1 style={{ color: "black" }}>404</h1>
          <h1 style={{ color: "black" }}>Not Found</h1>
          <br />
          <h3 style={{ color: "black" }}>Invalid Grant!!</h3>
        </div>
      )}

      {/* {examDone && <div
     role="main"
     class="form-all"
     style={{ marginLeft: "27%", marginTop: "70px", width: "50%" }}
   >
     <ul class="form-section page-section">
       <li id="cid_1" class="form-input-wide" data-type="control_head">
         <div class="form-header-group  header-default">
           <div class="header-text httac htvam">
             <h2
               id="header_1"
               class="form-header"
               data-component="header"
               style={{ textAlign: "center" }}
             >
               Tutor Registration Test
             </h2>
           </div>
         </div>
       </li>
       <li >
         <div id="cid_13" class="form-input-wide">
           <div id="text_13" class="form-html" data-component="text" >
           <div style={{textAlign:"center" ,justifyContent: "center" }}>
             <strong style={{color:"darkorange"}}>You have successfully submitted</strong>
             <div style={{marginTop:"10%" ,marginBottom:"5%" ,backgroundColor:"#f2ffff"}}>
             <div style={{display:"flex", justifyContent:"center" }}><span style={{flex: "50%"}}> Exam Id : </span><p style={{flex: "50%"}}>EDUT808</p></div>
             <div style={{display:"flex", justifyContent:"center" }}><span style={{flex: "50%"}}> Subject : </span><p style={{flex: "50%"}}>{subject}</p></div>
             <div style={{display:"flex", justifyContent:"center" }}><span style={{flex: "50%"}}> Marks : </span><p style={{flex: "50%"}}>{result}/15</p></div>
             <div style={{display:"flex", justifyContent:"center" }}><span style={{flex: "50%"}}> Status : </span> <p style={{color: resultStatus==="fail" ? "red": "green",flex: "50%"}}>{resultStatus}</p></div>
             </div>

     
             {resultStatus==="fail" && <span style={{color:"red"}}>Sorry,You are not able to qualify this test. Good luck for next time!!</span>}
             {resultStatus==="pass" && <span style={{color:"green"}}>Congrats!! You have qualified this test</span>} 
            </div>
           </div>
         </div>
       </li>
      
      
       <li style={{ display: "none" }}>
         Should be Empty:
         <input type="text" name="website" value="" />
       </li>
     </ul>
   </div>} */}
    </>
  );
};

export default TutorExam;
