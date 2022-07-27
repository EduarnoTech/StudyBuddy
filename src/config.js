import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://tutorlancerapi.el.r.appspot.com/",
});