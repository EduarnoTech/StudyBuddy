import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import classes from "./FormFeatures.module.css";

const FormFeatures = () => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredDate, setEnteredDate] = useState();
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredFile, setEnteredFile] = useState();
  const [refEnteredFile, setRefEnteredFile] = useState();

  const textHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const dateHandler = (event) => {
    // event.preventDefault()
    setEnteredDate(event.target.value);
  };
  const fileHandler = (event) => {
    setEnteredFile(event.target.files[0]);
  };

  const refFileHandler = (event) => {
    setRefEnteredFile(event.target.files[0]);
  };

  const subjectHandler = (event) => {
    setEnteredSubject(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    let postData = new FormData();
    postData.append("description", enteredText);
    // postData.append("email", enteredEmail);
    // postData.append("whatsapp", enteredWhatsApp);
    postData.append("deadline", enteredDate);
    postData.append("subject", enteredSubject);
    postData.append("quesFile", enteredFile);
    // postData.append("refMaterial", refEnteredFile);
    postData.append("email", localStorage.getItem("email"));

    // enteredFile="";
    // enteredSubject="";
    // enteredDate="";
    // enteredText=""

    console.log(postData);
    console.log(enteredDate);
    console.log(enteredText);
    try {
      const result = await axios.post(
        "https://device2api.el.r.appspot.com/client/C1",
        postData
        // {description:enteredText,
        // deadline:new Date(enteredDate),
        // subject:enteredSubject,
        // // AddFile:enteredFile
        // }
      );
      // .then((res) => {console.log(res.data)
      if (result) {
        setEnteredText("");
        setEnteredDate("");
        setEnteredSubject("");
        setEnteredFile("");

        let postData1 = new FormData();
        postData1.append("id1", result.data._id);
        postData1.append("refMaterial", refEnteredFile);

        // alert('Submitted')
        const result2 = await axios.post(
          "https://device2api.el.r.appspot.com/client/refMaterial",
          postData1
        );
        if (result2) {
          setRefEnteredFile("");
          alert("Request has been sent");
        }
      }

      console.log("working");
    } catch (err) {
      console.log("not working");
    }
  };

  return (
    <div>
      <div className="chat_banner_content">
        <h2 className="wow fadeInUp" data-wow-delay="0.2s">
          We Will Be Happy To Help You In Your Assignments
        </h2>
        <div className="text-center pr_100 wow fadeInUp" data-wow-delay="0.4s">
          <div>
            <form class="form" onSubmit={submitHandler}>
              <textarea
                id="w3review"
                name="w3review"
                onChange={textHandler}
                value={enteredText}
                style={{
                  width: "-webkit-fill-available",
                  borderRadius: "7px",
                  padding: "5px 10px",
                  border: "1px solid #d1d1d1",
                }}
                rows="4"
                cols="50"
                placeholder="Type your question"
              ></textarea>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    // justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  {/* <div > */}
                  {/* <label>Question Files</label>
                  <input type="file"  onChange={fileHandler} /> */}

                  <div className={classes.container}>
                    <div className={classes["button-wrap"]}>
                      <label className={classes["new-button"]} for="upload">
                        {" "}
                        Upload Question Files
                      </label>
                      <input id="upload" type="file" onChange={fileHandler} />
                      <div></div>
                    </div>
                  </div>




                  {/* <div>
                    <label>Reference Material</label>
                    <input type="file" onChange={refFileHandler} />
                  </div> */}
                   <div className={classes.container}>
                    <div className={classes["button-wrap"]}>
                      <label className={classes["new-button"]} for="upload">
                        {" "}
                        Upload Reference Material
                      </label>
                      <input id="upload" type="file" onChange={refFileHandler} />
                      <div></div>
                    </div>
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
                    style={{
                      width: "-webkit-fill-available",
                      borderRadius: "7px",
                      border: "1px solid #d1d1d1",
                      paddingLeft: "15px",
                      height: "45px",
                    }}
                    type="date"
                    placeholder="Deadline"
                    // class="textbox-n" type="text" onfocus="(this.type='date')"
                    onChange={dateHandler}
                    value={enteredDate}
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
                    Get Solution Now
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

export default FormFeatures;
