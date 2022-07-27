import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";

export const SettingsPassword = (props) => {
const API_URL = 'https://device6chatapi.el.r.appspot.com/api/sessions';
let user = JSON.parse(localStorage.getItem("user"));
  const [values, setValues] = useState({
    password: "",
    confirm: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const updatePasswordFunc = async () => {
    if (user && user.accessToken && !user.refreshToken) {
      // return { Authorization: 'Bearer ' + user.accessToken };
      // return { "x-auth-token": user.accessToken };
      return axios.post(`${API_URL}/private/updateUserPassword`, {clientId:JSON.parse(window.localStorage.getItem('user')).saveUser.uid,password:values.password}, {
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
      return axios.post(`${API_URL}/private/updateUserPassword`, {clientId:JSON.parse(window.localStorage.getItem('user')).saveUser.uid,password:values.password}, {
        headers: { "x-auth-token": user.accessToken },
      });
    } else {
      return axios.post(`${API_URL}/private/updateUserPassword`, {clientId:JSON.parse(window.localStorage.getItem('user')).saveUser.uid,password:values.password}, {
        headers: {},
      });
    }
  };

  const updateUserPassword = async () => {
    updatePasswordFunc().then(
      (response) => {
        if (values.password === values.confirm) {
          // const passwordUpdate = await axios.post("https://device6chatapi.el.r.appspot.com/client/updateUserPassword", {email:window.localStorage.getItem('user').email,password:values.password})

          if (response?.data?.success) {
            alert("Password updated successfully!");
            console.log("user Password updated successfully");
          } else {
            alert('Something went wrong. Please try again later...!');
          }
        } else {
          alert("Password and Confirm Password does not match!");
        }
      },
      (error) => {
        console.log("Private page", error.response);
      }
    );
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader subheader="Update password" title="Password" />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={updateUserPassword}
            style={{ backgroundColor: "rgb(80, 72, 229)" }}
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};
