import * as loginActionsType from '../actionsTypes/loginActionsType'

const initialState = {
    email: '',
    password: '',
    token: null
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case loginActionsType.SET_EMAIL:
            return{
                ...state,
                email: action.payload
            }
        case loginActionsType.SET_PASSWORD: 
            return {
                ...state,
                password: action.payload
            }
        case loginActionsType.SET_TOKEN: 
            return {
                ...state,
                token: action.payload
            }    
        default: 
            return state;
    }
} 

export default loginReducer