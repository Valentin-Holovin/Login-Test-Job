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

export const fetchLogin = () => async (dispatch, getState) => {
    try{
        const email = getState().login.email;
        const password = getState().login.password;
        const response = await Auth.login(email, password);
        console.log(response.data.token)
        dispatch(setToken(response.data.token))        
    }
    catch(e){
        console.log(e, 'Error')
    }
}