import axios, { AxiosStatic } from 'axios';

const customAxios = axios.create({
    baseURL: 'http://localhost:3001/api',
    // headers: {}
}) as AxiosStatic;

customAxios['CancelToken'] = axios.CancelToken;
customAxios['isCancel'] = axios.isCancel;

export default customAxios;

// пример кастомного error handling
// const ErrorDescription = ({ error }) => {
//     return (
//         <>
//             Please try again later <br /> {error}
//     </>
// );
// };
//
// customAxios.interceptors.response.use(
//     function (response) {
//         // Do something with response data
//         return response;
//     },
//     function (error) {
//         notification['error']({
//             message: 'Something went wrong',
//             description: <ErrorDescription error={error.message} />,
//     });
//         // Do something with response error
//         return Promise.reject(error);
//     }
// );
// также с request
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });
