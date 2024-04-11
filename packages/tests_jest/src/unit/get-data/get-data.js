import fetch from 'node-fetch';
import axios, { AxiosResponse } from 'axios';

/**
 * Get Data example
 * @param {string} url
 * @return {Promise<void>}
 */
export default async (url = 'https://jsonplaceholder.typicode.com/todos/1') => {
    return fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            return data;
        });
};

/**
 * Get Data example
 * @param {string} url
 * @return {Promise<AxiosResponse>}
 */
export const getDataAxios = async (url = 'https://jsonplaceholder.typicode.com/todos/1') => {
    return axios.get(url).then(data => {
        console.log(data.data);
        return data;
    });
};
