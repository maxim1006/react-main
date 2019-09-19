import axios from "axios";

const ciustomAxios = axios.create({
   baseURL: "http://localhost:3001/api",
    // headers: {}
});

ciustomAxios.CancelToken = axios.CancelToken;
ciustomAxios.isCancel = axios.isCancel;

export default ciustomAxios;
