import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5001/api",
    withCredentials: true // To send the cookies in every single request 
});
