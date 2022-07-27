import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./registrationForm.module.css";
import axios from "axios";
import Header from "./dashboard-navbar";
import { dropdownDataUrl, storeDataUrl } from "../serviceUrls/ServiceUrl";

const RegistrationForm = () => {
  const [branches, setBranches] = useState();
  const [subjects, setSubjects] = useState();
  const [skill, setSkill] = useState([]);
  const [otherSkill, setOtherSkill] = useState("");
  const [bestSub, setBestSub] = useState([]);
  const history = useHistory();
  const [data, setData] = useState({
    email: JSON.parse(localStorage?.getItem("tutor"))?.saveTutor?.email,
    name: "",
    branch: "",
    highest_degree: "",
    other_degree: "",
    university: "",
    skills: [],
    other_skill: [],
    best_subjects: [],
    software_skills: "",
    whatsapp_no: "",
  });
  const {
    email,
    name,
    branch,
    highest_degree,
    other_degree,
    university,
    skills,
    other_skill,
    best_subjects,
    software_skills,
    whatsapp_no,
  } = data;
  console.log(data);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleDegreeChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      other_degree: "",
    });
  };
  const handleOther = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSetSkills = (e) => {
    const newSkill = skill.filter((i) => i === e.target.value);
    if (newSkill.length === 0 && skill.length < 20) {
      setSkill([...skill, e.target.value]);
      setData({
        ...data,
        [e.target.name]: [...skill, e.target.value],
      });
    }
  };

  const handleOtherSkill = (e) => {
    setOtherSkill(e.target.value);
  };
  const handleAddSkill = (e) => {
    if (skill.length < 21) {
      setData({
        ...data,
        other_skill: [...other_skill, otherSkill],
      });
      setSkill([...skill, otherSkill]);
    }
  };

  const handleBestSub = (e) => {
    const filter = bestSub.filter((i) => i === e.target.value);
    if (filter.length === 0 && bestSub.length < 5) {
      setBestSub([...bestSub, e.target.value]);
      setData({
        ...data,
        [e.target.name]: [...bestSub, e.target.value],
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formFetch = await axios.get(
    //   "https://device2api.el.r.appspot.com/tutor/find_tutors");
    //   if(formFetch.data){
    //     console.log({formFetch:formFetch.data.getTutors[0]})
    //   }
    //   else{
    //     console.log({success:false})
    //   }

    if (email.length > 0) {
      // const EmailValid = await axios.post(
      //   "https://annular-arena-331607.el.r.appspot.com/api/tutorWeb/email_check",
      //   { email: email }
      // );
      // console.log({ email: EmailValid.data.success });
      // if (EmailValid.data.success) {
      if (
        name.length > 0 &&
        branch.length > 0 &&
        highest_degree.length > 0 &&
        university.length > 0 &&
        skills.length > 0 &&
        best_subjects.length > 0 &&
        whatsapp_no.length > 0
      ) {
        try {
          const res = await axios({
            method: "post",
            // url: "https://annular-arena-331607.el.r.appspot.com/api/tutorWeb/tutor_save",
            url: `https://device6chatapi.el.r.appspot.com/api/tutorweb/setTutorDetailsByForm/${
             JSON.parse( localStorage.getItem("tutor")).saveTutor.tutor_id
            }`,
            data: {
              email,
              name,
              branch,
              highest_degree,
              university,
              skills,
              best_subjects,
              wa_id:"91"+whatsapp_no,
              software_skills,
              tutStatus:"ex",
            },
          });

          setData({
            ...data,
            email: "",
            name: "",
            branch: "",
            highest_degree: "",
            other_degree: "",
            university: "",
            skills: [],
            other_skill: [],
            best_subjects: [],
            whatsapp_no: "",
            software_skills: "",
          });
          if (res.status === 200 || res.status === "200") {
            let tutor1=JSON.parse(localStorage.getItem('tutor'));
            let tutor_ls=JSON.parse(localStorage.getItem('tutor')).saveTutor;
            
            let temp_tutorSaveObj={
              ...tutor_ls,
              email,
              name,
              branch,
              highest_degree,
              university,
              skills,
              best_subjects,
              wa_id:"91"+whatsapp_no,
              software_skills,
              tutStatus:"ex"
            }
            console.log({tutor_ls})
            let temp_tutorObj={
              ...tutor1, 
              saveTutor: temp_tutorSaveObj 
            }
            let tutor_stringified=JSON.stringify(temp_tutorObj)
            localStorage.setItem('tutor',tutor_stringified)

            history.replace("/tutor_exam");
            // history.push('/tutor_dashboard');
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        alert(
          "Submission failed! Please fill in all *required fields properly"
        );
      }

      // }else{
      //   console.log("This Email is already registered")
      //   alert("This Email Is Already Registered")
      // }
    } else {
      console.log("Please Enter the Email");
      alert("Please Enter Your Email!");
    }
  };
  useEffect(() => {
    const getDropdownData = async () => {
      try {
        const res = await axios({
          method: "get",
          url: dropdownDataUrl,
        });
        setBranches(res.data.branch);
        setSubjects(res.data.subject);
        // setData({
        //   ...data,
        //   email:JSON.parse(localStorage.getItem('tutor')).saveTutor.email
        // })
      } catch (err) {
        console.log(err);
      }
    };
    getDropdownData();
  }, []);
  return (
    <>
   
   <span style={{width:"100%"}}><Header/></span>
    <div className={classes["main_container"]}>
    
      <div className={classes.main} style={{ textAlign: "-webkit-center" }}>
      
        <div className={classes.container} style={{marginTop:"6rem"}}>
          <form className={classes["appointment-form"]} id="appointment-form">
            <h2 className={classes.heading} style={{ marginBottom: "35px" }}>
              Tutor Registration Form{" "}
            </h2>
            <p
              className={classes.para}
              style={{ margin: "0px", fontSize: "13px" }}
            >
              &bull; Please make sure that you don't use country code (+91)
              while entering WhatsApp no.
            </p>
            <p
              className={classes.para}
              style={{ margin: "0px", fontSize: "13px" }}
            >
              &bull; Please leave no gaps or spaces while entering email id or
              any other information.
            </p>
            <br />
            <p
              className={classes.para}
              style={{ margin: "0px", fontSize: "13px" }}
            >
              {" "}
              *Required field
            </p>

            <br />
            <div className={classes["form-group-2"]}>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                className={classes["input_class1"]}
                onChange={handleChange}
                placeholder="Email *"
                required
              />
              <input
                type="text"
                name="name"
                id="name"
                className={classes["input_class1"]}
                value={name}
                onChange={handleChange}
                placeholder="Full Name (As per your PAN Card) *"
                required
              />
              <div className={classes["select-list"]}>
                <select
                  name="branch"
                  id="branch"
                  className={classes.arrow && classes["input_class1"]}
                  value={branch}
                  onChange={handleChange}
                  required
                >
                  <option slected value="">
                    Branch/Specialization/Department *
                  </option>
                  {branches &&
                    branches.map((i) => <option value={i}>{i}</option>)}
                </select>
              </div>
              <div className={classes["select-list"]}>
                <select
                  name="highest_degree"
                  id="highest_degree"
                  className={classes.arrow && classes["input_class1"]}
                  value={highest_degree}
                  onChange={handleDegreeChange}
                  required
                >
                  <option selected value="">
                    Highest Degree *
                  </option>
                  <option value="b-tech">B.Tech</option>
                  <option value="m-tech">M.Tech</option>
                  <option value="phd">Phd</option>
                  <option value="other">Other</option>
                </select>
                {highest_degree === "other" ? (
                  <input
                    type="text"
                    name="other_degree"
                    placeholder="Please mention *"
                    value={other_degree}
                    onChange={handleOther}
                    autoComplete="none"
                    required
                  />
                ) : null}
              </div>
              <input
                type="text"
                name="university"
                id="university"
                className={classes["input_class1"]}
                placeholder="University/Colleges (with separated comma) *"
                value={university}
                onChange={handleChange}
                required
              />
              <div className={classes["select-list-skill"]}>
                <select
                  name="skills"
                  id="skills"
                  className={
                    classes["skill-select"] &&
                    classes.arrow &&
                    classes["input_class1"]
                  }
                  style={{ marginBottom: "2px" }}
                  value={skills[skills.length - 1]}
                  onChange={handleSetSkills}
                  requiredF
                >
                  <option selected value="">
                    Skills/Known Subjects (upto 20) *
                  </option>
                  {subjects &&
                    subjects.map((i) => <option value={i}>{i}</option>)}
                </select>
                {skills[skills.length - 1]?.trim() === "Others" ? (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <input
                      type="text"
                      name="other_skill"
                      placeholder="Please mention *"
                      value={otherSkill}
                      className={classes.otherskill}
                      onChange={handleOtherSkill}
                      autoComplete="none"
                      required
                    />
                    <div className={classes.addBtn} onClick={handleAddSkill}>
                      Add
                    </div>
                  </div>
                ) : null}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {skill &&
                    skill?.map((el, i, arr) => (
                      <div
                        style={{
                          color: "#404040",
                          width: "fit-content",
                          border: "1px solid darkgray",
                          padding: "0px 7px 0px 7px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          margin: "3px",
                        }}
                        onClick={() => {
                          arr.splice(i, 1);
                          setSkill((prev) =>
                            [...prev, ...arr].filter((c, index) => {
                              return [...prev, ...arr].indexOf(c) == index;
                            })
                          );
                          setData({
                            ...data,
                            skills: skill,
                          });
                        }}
                      >
                        {el} x
                      </div>
                    ))}
                </div>
              </div>
              <div className={classes["select-list-skill"]}>
                <select
                  name="best_subjects"
                  id="best_subjects"
                  className={
                    classes["skill-select"] &&
                    classes.arrow &&
                    classes["input_class1"]
                  }
                  style={{ marginBottom: "2px" }}
                  value={best_subjects[best_subjects.length - 1]}
                  onChange={handleBestSub}
                  required
                >
                  <option selected value="">
                    Best Subjects (upto 5) *
                  </option>
                  {skill &&
                    skill
                      .filter((i) => i?.trim() !== "Others")
                      .map((i) => <option value={i}>{i}</option>)}
                </select>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {bestSub &&
                    bestSub.map((el, i, arr) => (
                      <div
                        style={{
                          color: "#404040",
                          width: "fit-content",
                          border: "1px solid darkgray",
                          padding: "0px 7px 0px 7px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          margin: "3px",
                        }}
                        onClick={() => {
                          arr.splice(i, 1);
                          setBestSub((prev) =>
                            [...prev, ...arr].filter((c, index) => {
                              return [...prev, ...arr].indexOf(c) == index;
                            })
                          );
                          setData({
                            ...data,
                            best_subjects: bestSub,
                          });
                        }}
                      >
                        {el} x
                      </div>
                    ))}
                </div>
              </div>
              <input
                type="text"
                name="software_skills"
                id="software_skills"
                className={classes["input_class1"]}
                value={software_skills}
                placeholder="Software Skills (with separated comma)"
                onChange={handleChange}
              />
              <input
                type="number"
                name="whatsapp_no"
                id="phone_number"
                value={whatsapp_no}
                className={classes["whatsapp_input"] && classes["input_class1"]}
                placeholder="Whatsapp No. (without country code) *"
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes["form-check"]}>
              <label for="agree-term" className={classes["label-agree-term"]} style={{fontSize:"15px"}}>
                I agree that I have read the{" "}
                <a
                  href="https://thetutorlancer.com/privacyPolicy"
                  target="_blank"
                  rel="noreferrer"
                  className={classes["term-service"]}
                >
                  Privacy and Policy
                </a>
              </label>
            </div>
            <div className={classes["form-submit"]}>
              <input
                type="submit"
                name="submit"
                id="submit"
                className={classes.submit}
                value="Submit"
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default RegistrationForm;
