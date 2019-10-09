import axios from "axios";

const customAxios = axios.create({
   baseURL: "http://localhost:3001/api",
    // headers: {}
});

customAxios.CancelToken = axios.CancelToken;
customAxios.isCancel = axios.isCancel;

export default customAxios;
