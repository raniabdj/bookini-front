import axios from "axios";

const apiClient = () => {
    // const { REACT_APP_API_URL } = process.env;

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:5000/',
        responseType: "json",
    });

    return axiosInstance;
};

export default apiClient;