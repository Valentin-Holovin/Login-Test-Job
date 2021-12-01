import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://site.ualegion.com/api/v1/`,
    timeout: 10000,
});

export default axiosInstance;