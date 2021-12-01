import axiosInstance from '../axios/axios';

export const login = (email, password) => {
    return axiosInstance.post('security/login', {
        email,
        password
    });
};

export const logout = () => {};