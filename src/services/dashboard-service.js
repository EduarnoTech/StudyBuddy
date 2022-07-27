import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://device6chatapi.el.r.appspot.com/api/sessions';

let user = JSON.parse(localStorage.getItem("user"));
let tutor = JSON.parse(localStorage.getItem("tutor"));


// const getAllPrivatePosts = async () => {
//   if (user && user.accessToken && !user.refreshToken) {
//     // return { Authorization: 'Bearer ' + user.accessToken };
//     // return { "x-auth-token": user.accessToken };
//     return axios.get(`${API_URL}/private/200396`, { headers: { "x-auth-token": user.accessToken } });
//   }
//   else if (user && user.refreshToken) {

//     let payload = {
//       token: user.refreshToken
//     }

//     try {
//       const res = await axios.post(`https://device6chatapi.el.r.appspot.com/api/auth/refresh`, payload);
//       if (res.data.accessToken) {
//         user.accessToken = res.data.accessToken
//         user.refreshToken = res.data.refreshToken
//         localStorage.setItem("user", JSON.stringify(user));
//       }
//     } catch (err) {
//       console.log(err);
//     }
//     // return { Authorization: 'Bearer ' + user.accessToken };
//     return axios.get(`${API_URL}/private/200396`, { headers: { "x-auth-token": user.accessToken } });
//   }
//   else {
//     return axios.get(`${API_URL}/private/200396`, { headers: {} });
//   }
// };

const fetchProfile = async () => {
  if (user && user.accessToken && !user.refreshToken) {
    // return { Authorization: 'Bearer ' + user.accessToken };
    // return { "x-auth-token": user.accessToken };
    return axios.post(`${API_URL}/private/fetchProfile`,{ clientId:JSON.parse(window.localStorage.getItem('user')).saveUser.uid}, { headers: { "x-auth-token": user.accessToken } });
  }
  else if (user && user.refreshToken) {

    let payload = {
      token: user.refreshToken,
     
    }

    try {
      const res = await axios.post(`https://device6chatapi.el.r.appspot.com/api/auth/refresh`, payload);
      if (res.data.accessToken) {
        user.accessToken = res.data.accessToken
        user.refreshToken = res.data.refreshToken
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (err) {
      localStorage.removeItem("user");
      console.log(err);
    }
    // return { Authorization: 'Bearer ' + user.accessToken };
    return axios.post(`${API_URL}/private/fetchProfile`,{ clientId:JSON.parse(window.localStorage.getItem('user')).saveUser.uid}, { headers: { "x-auth-token": user.accessToken } });
  }
  else {
    return axios.post(`${API_URL}/private/fetchProfile`,{ clientId:JSON.parse(window.localStorage.getItem('user')).saveUser.uid}, { headers: {} });
  }
};


const fetchUserSession = async () => {
  if (user && user.accessToken && !user.refreshToken) {
    // return { Authorization: 'Bearer ' + user.accessToken };
    // return { "x-auth-token": user.accessToken };
    return axios.post(`${API_URL}/private/fetchUserSession`,{ clientId:JSON.parse(window.localStorage.getItem('user')).saveUser.uid}, { headers: { "x-auth-token": user.accessToken } });
  }
  else if (user && user.refreshToken) {

    let payload = {
      token: user.refreshToken,
     
    }

    try {
      const res = await axios.post(`https://device6chatapi.el.r.appspot.com/api/auth/refresh`, payload);
      if (res.data.accessToken) {
        user.accessToken = res.data.accessToken
        user.refreshToken = res.data.refreshToken
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (err) {
      localStorage.removeItem("user");
      console.log(err);
    }
    // return { Authorization: 'Bearer ' + user.accessToken };
    return axios.post(`${API_URL}/private/fetchUserSession`,{ clientId:JSON.parse(window.localStorage.getItem('user')).saveUser.uid}, { headers: { "x-auth-token": user.accessToken } });
  }
  else {
    return axios.post(`${API_URL}/private/fetchUserSession`,{ clientId:JSON.parse(window.localStorage.getItem('user')).saveUser.uid}, { headers: {} });
  }
};


const fetchTutorSession = async () => {
  if (tutor && tutor.accessToken && !tutor.refreshToken) {
    // return { Authorization: 'Bearer ' + tutor.accessToken };
    // return { "x-auth-token": tutor.accessToken };
    return axios.post(`https://device6chatapi.el.r.appspot.com/api/sessions/private/fetchTutorSession`,{ tutor_id:JSON.parse(window.localStorage.getItem('tutor')).saveTutor.tutor_id}, { headers: { "x-auth-token": tutor.accessToken } });
  }
  else if (tutor && tutor.refreshToken) {

    let payload = {
      token: tutor.refreshToken,
     
    }

    try {
      const res = await axios.post(`https://device6chatapi.el.r.appspot.com/api/auth/refresh`, payload);
      if (res.data.accessToken) {
        tutor.accessToken = res.data.accessToken
        tutor.refreshToken = res.data.refreshToken
        localStorage.setItem("tutor", JSON.stringify(tutor));
      }
    } catch (err) {
      localStorage.removeItem("tutor");
      console.log(err);
    }
    // return { Authorization: 'Bearer ' + tutor.accessToken };
    return axios.post(`https://device6chatapi.el.r.appspot.com/api/sessions/private/fetchTutorSession`,{ tutor_id:JSON.parse(window.localStorage.getItem('tutor')).saveTutor.tutor_id}, { headers: { "x-auth-token": tutor.accessToken } });
  }
  else {
    return axios.post(`https://device6chatapi.el.r.appspot.com/api/sessions/private/fetchTutorSession`,{ tutor_id:JSON.parse(window.localStorage.getItem('tutor')).saveTutor.tutor_id}, { headers: {} });
  }
};

const updateComments = async () => {
  if (user && user.accessToken && !user.refreshToken) {
    // return { Authorization: 'Bearer ' + user.accessToken };
    // return { "x-auth-token": user.accessToken };
    return axios.post(`${API_URL}/private/updateComments`,{ email:JSON.parse(window.localStorage.getItem('user')).saveUser.emailId}, { headers: { "x-auth-token": user.accessToken } });
  }
  else if (user && user.refreshToken) {

    let payload = {
      token: user.refreshToken,
     
    }

    try {
      const res = await axios.post(`https://device6chatapi.el.r.appspot.com/api/auth/refresh`, payload);
      if (res.data.accessToken) {
        user.accessToken = res.data.accessToken
        user.refreshToken = res.data.refreshToken
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (err) {
      console.log(err);
    }
    // return { Authorization: 'Bearer ' + user.accessToken };
    return axios.post(`${API_URL}/private/updateComments`,{ email:JSON.parse(window.localStorage.getItem('user')).saveUser.emailId}, { headers: { "x-auth-token": user.accessToken } });
  }
  else {
    return axios.post(`${API_URL}/private/updateComments`,{ email:JSON.parse(window.localStorage.getItem('user')).saveUser.emailId}, { headers: {} });
  }
};

const DashboardService = {
  // getAllPrivatePosts,
  fetchProfile,
  fetchUserSession,
  fetchTutorSession,
  updateComments,
};

export default DashboardService;
