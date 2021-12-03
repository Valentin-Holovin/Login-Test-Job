import axios from "axios";
import { setToken } from "../../redux/actions/loginActions";
import store from '../../redux/store'
import { Auth } from "../index";

const axiosInstance = axios.create({
    baseURL: `https://site.ualegion.com/api/v1/`,
    timeout: 10000,
});

axios.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if(error.response.status == 401){
       const email = store.login.email;
       const password = store.login.password;
       const response = await Auth.login(email, password);
       if(response.data.token){
           store.dispatch(setToken(response.data.token))
           return axiosInstance.request(originalRequest)
       }
       console.log(response.data)
    }
}
)


export default axiosInstance;