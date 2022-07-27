import axios from "axios";

const authHeader = async() => {
    let user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user.accessToken && !user.refreshToken) {
      // return { Authorization: 'Bearer ' + user.accessToken };
      return { "x-auth-token": user.accessToken };
    }
    else if (user && user.refreshToken) {

      let payload = {
        token: user.refreshToken
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
      return { "x-auth-token": user.accessToken };
    }
    else {
      return {};
    }
  }

  export default  authHeader;