import axios from "axios";

// const API_URL = "https://device6chatapi.el.r.appspot.com/api/auth";
const API_URL = "https://device6chatapi.el.r.appspot.com/api/auth";

const signup = async (email, password, name) => {
  const response = await axios
        .post(API_URL + "/signup", {
            email,
            password,
            name
        });
    // if (response.data.accessToken) {
    //     localStorage.setItem("user", JSON.stringify(response.data));
    // }
    return response.data;
};


const tutorSignup = async (email, password, name) => {
  const response = await axios
        .post(API_URL + "/tutorSignup", {
            email,
            password,
            name
        });
    // if (response.data.accessToken) {
    //     localStorage.setItem("user", JSON.stringify(response.data));
    // }
    return response.data;
};

const login = async (email, password) => {
  const response = await axios
        .post(API_URL + "/login", {
            email,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};


const tutorLogin = async (email, password) => {
  const response = await axios
        .post(API_URL + "/tutorLogin", {
            email,
            password,
        });
    if (!(JSON.parse(localStorage.getItem('tutor'))) && response.data.accessToken) {
        localStorage.setItem("tutor", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const tutorLogout = () => {
  localStorage.removeItem("tutor");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  tutorSignup,
  login,
  tutorLogin,
  logout,
  tutorLogout,
  getCurrentUser,
};

export default authService;