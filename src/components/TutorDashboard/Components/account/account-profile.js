import React, { useEffect, useState } from "react";
import fs from "fs";
import { decode as atob, encode as btoa } from "base-64";
import {useHistory } from "react-router-dom"
import AccountSubmission_dialog from "./accountSubmission_dialog"

import axios from "axios";
import {
  Avatar,
  Box,
  Input,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const AccountProfile = (props) => {
  const [profilePic, setProfilePic] = useState();
  const [showAccSub_dia,setShowAccSub_dia]=useState(false)
  const history = useHistory()

  let src;
  const API_URL = "https://device6chatapi.el.r.appspot.com/api/sessions";
  const API_URL_CONV =
    "https://device6chatapi.el.r.appspot.com/api/conversations";

  let user = JSON.parse(localStorage.getItem("user"));

  const updateProfilePicFunc = async (formdata) => {
    if (user && user.accessToken && !user.refreshToken) {
      // return { Authorization: 'Bearer ' + user.accessToken };
      // return { "x-auth-token": user.accessToken };
      return axios.post(`${API_URL}/private/updateProfilePic`, formdata, {
        headers: { "x-auth-token": user.accessToken },
      });
    } else if (user && user.refreshToken) {
      let payload = {
        token: user.refreshToken,
      };

      try {
        const res = await axios.post(
          `https://device6chatapi.el.r.appspot.com/api/auth/refresh`,
          payload
        );
        if (res.data.accessToken) {
          user.accessToken = res.data.accessToken;
          user.refreshToken = res.data.refreshToken;
          localStorage.setItem("user", JSON.stringify(user));
        }
      } catch (err) {
        console.log(err);
      }
      // return { Authorization: 'Bearer ' + user.accessToken };
      return axios.post(`${API_URL}/private/updateProfilePic`, formdata, {
        headers: { "x-auth-token": user.accessToken },
      });
    } else {
      return axios.post(`${API_URL}/private/updateProfilePic`, formdata, {
        headers: {},
      });
    }
  };
  // const updateProfilePicFuncConv = async (formdata) => {
  //   if (user && user.accessToken && !user.refreshToken) {
  //     // return { Authorization: 'Bearer ' + user.accessToken };
  //     // return { "x-auth-token": user.accessToken };
  //     return axios.post(`${API_URL_CONV}/private/updateProfilePic`, formdata, {
  //       headers: { "x-auth-token": user.accessToken },
  //     });
  //   } else if (user && user.refreshToken) {
  //     let payload = {
  //       token: user.refreshToken,
  //     };

  //     try {
  //       const res = await axios.post(
  //         `https://device6chatapi.el.r.appspot.com/api/auth/refresh`,
  //         payload
  //       );
  //       if (res.data.accessToken) {
  //         user.accessToken = res.data.accessToken;
  //         user.refreshToken = res.data.refreshToken;
  //         localStorage.setItem("user", JSON.stringify(user));
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     // return { Authorization: 'Bearer ' + user.accessToken };
  //     return axios.post(`${API_URL_CONV}/private/updateProfilePic`, formdata, {
  //       headers: { "x-auth-token": user.accessToken },
  //     });
  //   } else {
  //     return axios.post(`${API_URL_CONV}/private/updateProfilePic`, formdata, {
  //       headers: {},
  //     });
  //   }
  // };

  let formdata = new FormData();

  const profilepicHandler = async (e) => {
    e.preventDefault();

    console.log({ srcVal: e.target.files });
    let fileVal = e.target.files[0];

    src = URL.createObjectURL(fileVal);

    props.setValues({
      ...props.values,
      profilePic: src,
    });

    formdata.append(
      "tutor_id",
      JSON.parse(window.localStorage.getItem("tutor")).saveTutor.tutor_id
    );
    formdata.append("file", fileVal);

    // setProfilePic(e.target.value)

    await axios
      .post(`https://device6chatapi.el.r.appspot.com/api/tutorweb/updateProfilePic`, formdata)
      .then(
        (response) => {
          if (response.data && response.data.length != 0) {
            console.log("proifle pic uploaded");

            // updateProfilePicFuncConv(formdata).then((response1) => {
            //   if (response1.data && response1.data.length != 0) {
            //     console.log("proifle pic uploaded");
            //   }
            // });
          } else {
            alert("profile pic not get updated .please try again!!");
          }
        },
        (error) => {
          console.log("Private page", error.response);
        }
      );
  };

  const handleClickOpen =()=>{
    setShowAccSub_dia(true);
  }

  useEffect(() => {
    console.log({ pic108: props.values.profilePic });
    if (props?.values?.profilePic !== null) {
      setProfilePic(props.values.profilePic);
    }
  }, [props.values.profilePic]);

  console.log({ profilepic786: profilePic });

  return (
    <>
      <Card {...props}>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={props.values.profilePic}
              sx={{
                height: 64,
                mb: 2,
                width: 64,
              }}
            />
            <Typography color="textPrimary" gutterBottom variant="h5">
              {props.values.name}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {`${props.values.email}`}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {/* {props.values.branch} */}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          {/* <label htmlFor="contained-button-file"> */}
          {/* <Input accept="image/*" id="contained-button-file"  onChange={(e)=>profilepicHandler()} type="file" /> */}

          <Button
            variant="contained"
            component="label"
            fullWidth
            style={{
              width: "22rem",
              backgroundColor: "white",
              fontWeight: "700",
              color: "rgb(80, 72, 229)",
              boxShadow: "none",
              width: "100%",
            }}
          >
            Upload picture
            <input
              type="file"
              name="profilePic"
              onChange={profilepicHandler}
              hidden
            />
          </Button>
          {/* </label> */}
        </CardActions>
      </Card>
      <Card style={{ marginTop: "30px", height: "17rem" }}>
        <div style={{ margin: "15px 7px 7px 7px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "500",
              marginRight: "5px",
            }}
          >
            Add tag:
          </span>
          {props?.values?.tags &&
            props?.values?.tags.map((i) => (
              <Chip style={{ margin: "6px" }} label={i} color="primary" />
            ))}

          <Fab
            style={{ height: "36px", width: "36px" }}
            color="primary"
            aria-label="add"
          >
            <AddIcon onClick={handleClickOpen} />
            {/* <Dialog open={openTag} onClose={_handleClose}>
              <DialogContent>
                <DialogContentText>Add New Tag</DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Tag Name"
                  type="text"
                  value={tagValue}
                  onChange={(e) => setTagValue(e.target.value)}
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={_handleClose}>Cancel</Button>
                <Button onClick={_handleAddTag}>Add</Button>
              </DialogActions>
            </Dialog> */}
          </Fab>
          {showAccSub_dia && <AccountSubmission_dialog showAccSub_dia={showAccSub_dia} setShowAccSub_dia={setShowAccSub_dia}/>}
        </div>
      </Card>
    </>
  );
};
export default AccountProfile;
