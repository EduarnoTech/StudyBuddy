import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./TutorExam.css";
import Button from "@mui/material/Button";
import axios from "axios";

const TutorExamEnd = (props) => {
  const [isPage, setIsPage] = useState(true);
  const history = useHistory();

  const dashboardEntry = async () => {
    let tutor1=JSON.parse(localStorage.getItem('tutor'));
    let tutor_ls=JSON.parse(localStorage.getItem('tutor')).saveTutor;

            let temp_tutorSaveObj={
              ...tutor_ls,
              tutStatus:"db"
            }
            console.log({tutor_ls})
            let temp_tutorObj={
              ...tutor1,
              saveTutor: temp_tutorSaveObj
            }
            let tutor_stringified=JSON.stringify(temp_tutorObj)
            localStorage.setItem('tutor',tutor_stringified)

    const res = await axios({
      method: "post",
      // url: "https://annular-arena-331607.el.r.appspot.com/api/tutorWeb/tutor_save",
      url: `https://device6chatapi.el.r.appspot.com/api/tutorweb/setTutorDetailsByForm/${
       JSON.parse( localStorage.getItem("tutor")).saveTutor.tutor_id
      }`,
      data: {
        email:tutor_ls.email,
        name:tutor_ls.name,
        branch:tutor_ls.branch,
        highest_degree:tutor_ls.highest_degree,
        university:tutor_ls.university,
        skills:tutor_ls.skills,
        best_subjects:tutor_ls.best_subjects,
        wa_id:tutor_ls.wa_id,
        software_skills:tutor_ls.software_skills,
        tutStatus:"db",
      },
    });
    if (res){
    console.log({res})
    history.replace("/tutor_dashboard");
    window.location.reload();
    }else{
      console.log("not saved tutStatus in db")
    }
  };

  const tryAnotherExam=()=>{
    history.replace("/tutor_exam")
    window.location.reload()
  }

const saveInTutorMain=async()=>{
  const tutorInfo= JSON.parse(window.localStorage.getItem("tutor")).saveTutor;
  let postData1 = {
    tutor_id: tutorInfo.tutor_id,
    name: tutorInfo.name,
    email: tutorInfo.email,
    dept:tutorInfo.dept,
    university:tutorInfo.university,
    watsNumber: tutorInfo.wa_id,
    writer:tutorInfo.writer,
    tags:props.subject[0],
  };
  const updateTutorInfo=await axios.post(`https://device2api.el.r.appspot.com/api/tutor/updateTutorInfo/${JSON.parse(window.localStorage.getItem("tutor")).saveTutor.tutor_id}`,postData1)
  if(updateTutorInfo.data){
    console.log({testTagsDev1:JSON.parse(localStorage.getItem('tutor'))?.saveTutor?.tutor_exam[-1]?.subject})
    console.log("updated the tutor database")
  }else{
    console.log("tutor database not updated")
  }
}

  useEffect(() => {
    if (!props.subject || props?.subject?.length === 0) {
      console.log({ subjectCheck: props.subject });
      setIsPage(false);
    }
    else{
      if(JSON.parse(window.localStorage.getItem("tutor")).saveTutor.tutStatus=="db" || JSON.parse(window.localStorage.getItem("tutor")).saveTutor.tutStatus=="exl"){
      saveInTutorMain()
      }
    }
  }, []);

 

  return (
    <div>
      {isPage && (
        <div
          role="main"
          class="form-all"
          style={{ marginLeft: "27%", marginTop: "11rem", width: "50%" }}
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
            <li>
              <div id="cid_13" class="form-input-wide">
                <div id="text_13" class="form-html" data-component="text">
                  <div
                    style={{ textAlign: "center", justifyContent: "center" }}
                  >
                    <strong style={{ color: "darkorange" }}>
                      You have successfully submitted
                    </strong>
                    <div
                      style={{
                        marginTop: "10%",
                        marginBottom: "5%",
                        backgroundColor: "#f2ffff",
                      }}
                    >
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <span style={{ flex: "50%" }}> Exam Id : </span>
                        <p style={{ flex: "50%" }}>{props.examId}</p>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <span style={{ flex: "50%" }}> Subject : </span>
                        <p style={{ flex: "50%" }}>{props.subject}</p>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <span style={{ flex: "50%" }}> Marks : </span>
                        <p style={{ flex: "50%" }}>{+props.result * 4}/100</p>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <span style={{ flex: "50%" }}> Status : </span>{" "}
                        <p
                          style={{
                            color:
                              props.resultStatus === "fail" ? "red" : "green",
                            flex: "50%",
                          }}
                        >
                          {props.resultStatus}
                        </p>
                      </div>
                    </div>

                    {props.resultStatus === "fail" && (
                      <span style={{ color: "red" }}>
                        Sorry,You are not able to qualify this test. Good luck
                        for next time!!
                        <div
                          style={{
                            marginTop: "10px",
                            marginBottom: "30px",
                            textAlign: "center",
                          }}
                        >
                          <Button
                            variant="contained"
                            className="ctaBtn"
                            onClick={tryAnotherExam}
                            style={{
                              background:
                                "#03d6d7",
                              borderRadius: "35px",
                              fontSize: "15px",
                            }}
                          >
                            Try Another Subject
                          </Button>
                        </div>
                      </span>
                    )}
                    {props.resultStatus === "pass" && (
                      <span style={{ color: "green" }}>
                        Congrats!! You have qualified this test
                        <div
                          style={{
                            marginTop: "10px",
                            marginBottom: "30px",
                            textAlign: "center",
                          }}
                        >
                          <Button
                            variant="contained"
                            className="ctaBtn"
                            onClick={dashboardEntry}
                            style={{
                              background:
                                "linear-gradient(127deg, #03D757, #11A1DC)",
                              borderRadius: "35px",
                              fontSize: "15px",
                            }}
                          >
                            Dashboard
                          </Button>
                        </div>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </li>

            <li style={{ display: "none" }}>
              Should be Empty:
              <input type="text" name="website" value="" />
            </li>
          </ul>
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
    </div>
  );
};

export default TutorExamEnd;
