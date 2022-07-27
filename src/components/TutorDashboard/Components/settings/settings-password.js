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

let tutor = JSON.parse(localStorage.getItem("tutor"));


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
    if (tutor && tutor.accessToken && !tutor.refreshToken) {
      // return { Authorization: 'Bearer ' + tutor.accessToken };
      // return { "x-auth-token": tutor.accessToken };
      return axios.post(`${API_URL}/private/updateTutorPassword`, {tutor_id:JSON.parse(window.localStorage.getItem('tutor')).saveTutor.tutor_id,password:values.password}, {
        headers: { "x-auth-token": tutor.accessToken },
      });
    } else if (tutor && tutor.refreshToken) {
      let payload = {
        token: tutor.refreshToken,
      };

      try {
        const res = await axios.post(
          `https://device6chatapi.el.r.appspot.com/api/auth/refresh`,
          payload
        );
        if (res.data.accessToken) {
          tutor.accessToken = res.data.accessToken;
          tutor.refreshToken = res.data.refreshToken;
          localStorage.setItem("tutor", JSON.stringify(tutor));
        }
      } catch (err) {
        console.log(err);
      }
      // return { Authorization: 'Bearer ' + tutor.accessToken };
      return axios.post(`${API_URL}/private/updateTutorPassword`, {tutor_id:JSON.parse(window.localStorage.getItem('tutor')).saveTutor.tutor_id,password:values.password}, {
        headers: { "x-auth-token": tutor.accessToken },
      });
    } else {
      return axios.post(`${API_URL}/private/updateTutorPassword`, {tutor_id:JSON.parse(window.localStorage.getItem('tutor')).saveTutor.tutor_id,password:values.password}, {
        headers: {},
      });
    }
  };

  const updateTutorPassword = async () => {
    updatePasswordFunc().then(
      (response) => {
        if (values.password === values.confirm) {
          // const passwordUpdate = await axios.post("https://device6chatapi.el.r.appspot.com/client/updatetutorPassword", {email:window.localStorage.getItem('tutor').email,password:values.password})

          if (response?.data?.success) {
            alert("Password updated successfully!");
            console.log("Tutor password updated successfully");
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
            onClick={updateTutorPassword}
            style={{ backgroundColor: "rgb(80, 72, 229)" }}
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};
