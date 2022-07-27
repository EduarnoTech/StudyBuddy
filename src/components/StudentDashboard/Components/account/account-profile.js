import React, { useEffect, useState } from "react";
import fs from "fs";
import { decode as atob, encode as btoa } from "base-64";

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

const AccountProfile = (props) => {
  const [profilePic, setProfilePic] = useState();
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
      "clientId",
      JSON.parse(window.localStorage.getItem("user")).saveUser.uid
    );
    formdata.append("file", fileVal);

    // setProfilePic(e.target.value)

    // const updateProfilePic = await axios.post("https://device6chatapi.el.r.appspot.com/client/updateProfilePic", formdata)

    updateProfilePicFunc(formdata).then(
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

  useEffect(() => {
    console.log({ pic108: props.values.profilePic });
    if (props?.values?.profilePic !== null)
      {setProfilePic(props.values.profilePic);}
  }, [props.values.profilePic]);

  console.log({ profilepic786: profilePic });

  return (
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
            {props.values.username}
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
  );
};
export default AccountProfile;
