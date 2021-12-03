import * as loginActionsType from '../actionsTypes/loginActionsType'
import {Auth} from '../../api/index'

export const setEmail = (email) => ({
    type: loginActionsType.SET_EMAIL,
    payload: email
});

export const setPassword = (password) => ({
    type: loginActionsType.SET_PASSWORD,
    payload: password
});

export const setToken = (token) => ({
    type: loginActionsType.SET_TOKEN,
    payload: token
})

export const fetchLogin = (callback) => async (dispatch, getState) => {
    try{
        const email = getState().login.email;
        const password = getState().login.password;
        if(!email || !password){
           return 
        }
           const response = await Auth.login(email, password);
        if(response.data.token){
            dispatch(setToken(response.data.token))
            console.log(response.data.token)
            callback()
        }   
       
    }
    catch(e){
        console.log(e, 'Error')
    }
}
