import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import classes from './FormFeatures.module.css'

const FormFeaturesLive = () => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredDate, setEnteredDate] = useState();
  const [enteredDate1, setEnteredDate1] = useState();
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredFile, setEnteredFile] = useState();

  const textHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const dateHandler1 = (event) => {
    // event.preventDefault()
    setEnteredDate1(event.target.value);
  };

  const dateHandler = (event) => {
    // event.preventDefault()
    setEnteredDate(event.target.value);
  };
  const fileHandler = (event) => {
    setEnteredFile(event.target.files[0]);
  };
  const subjectHandler = (event) => {
    setEnteredSubject(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    let postData = new FormData();
    postData.append("description", enteredText);
    postData.append("deadline", enteredDate);
    postData.append("dates", enteredDate1);
    postData.append("subject", enteredSubject);
    postData.append("refMaterial", enteredFile);
    postData.append("email", localStorage.getItem('email'));

    console.log(postData);
    console.log(enteredDate);
    console.log(enteredText);
    try {
      await axios
        .post("https://device2api.el.r.appspot.com/client/C2", postData)
        .then((res) => {console.log(res.data)
          alert('Request has been sent')
          setEnteredText("")
          setEnteredDate("")
          setEnteredSubject("")
          setEnteredFile("")

        })
        .catch((err) => console.log(err));

      console.log("working");
    } catch (err) {
      console.log("not working");
    }
  };

  return (
    <div>
      <div className="chat_banner_content">
        <h2 className="wow fadeInUp" data-wow-delay="0.2s">
          live Sessions
        </h2>
        <ul>
          <li> Interact with expert tutors in real time.</li>
          <li>Book a session, set the duration and make payment.</li>
          <li>
            {" "}
            Upload reference material and provide instructions for the tutor.
          </li>
          <li>
            The tutor will be ready at the session time to solve your problems.
          </li>
        </ul>
        <div className="text-center pr_100 wow fadeInUp" data-wow-delay="0.4s">
          <div>
            <label>Instructions</label>
            <form onSubmit={submitHandler}>
              <textarea
                id="w3review"
                name="w3review"
                style={{
                  width: "-webkit-fill-available",
                  borderRadius: "7px",
                  padding: "5px 10px",
                  border: "1px solid #d1d1d1",
                }}
                rows="4"
                cols="50"
                placeholder="Please write your Instructions here"
                onChange={textHandler}
                value={enteredText}
              ></textarea>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                {/* <label>Study Material</label>
                <input type="file" onChange={fileHandler} name="refMaterial" /> */}


                  <div className={classes.container}>
                    <div className={classes["button-wrap"]}>
                      <label className={classes["new-button"]} for="upload">
                        {" "}
                        Upload Reference Material
                      </label>
                      <input id="upload" type="file" onChange={fileHandler} name="refMaterial" />
                      <div></div>
                    </div>
                  </div>

                {/* <span>(No credit card requierd)</span> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <input
                    style={{
                      width: "-webkit-fill-available",
                      borderRadius: "7px",
                      border: "1px solid #d1d1d1",
                      paddingLeft: "15px",
                      height: "45px",
                      marginRight: "25px",
                    }}
                    placeholder="Subject Name"
                    onChange={subjectHandler}
                    value={enteredSubject}
                  />
                  <input
                    type="date"
                    style={{
                      type: "date",
                      width: "-webkit-fill-available",
                      borderRadius: "7px",
                      border: "1px solid #d1d1d1",
                      paddingLeft: "15px",
                      height: "45px",
                    }}
                    placeholder="Deadline"
                    onChange={dateHandler}
                    value={enteredDate}
                  />
                  <input
                    type="date"
                    style={{
                      width: "-webkit-fill-available",
                      borderRadius: "7px",
                      border: "1px solid #d1d1d1",
                      paddingLeft: "15px",
                      height: "45px",
                    }}
                    //   placeholder="Deadline"
                    onChange={dateHandler1}
                    value={enteredDate1}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "30px",
                  }}
                >
                  <Button
                    type="submit"
                    style={{
                      borderRadius: "7px",
                      backgroundColor: "rgb(105 57 243 / 88%)",
                    }}
                    size="large"
                    variant="contained"
                  >
                    Book Session
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFeaturesLive;
