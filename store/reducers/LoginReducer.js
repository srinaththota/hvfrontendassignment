import * as actionTypes from "../actions/actionTypes"
const initialState={
    user:null,
    error:null
}

const LoginReducer = (state=initialState,action)=>{
    console.log(action)
    if(action.type===actionTypes.LOGIN){
        return {
            ...state,
            user:action.payload
        }
    }

    if(action.type===actionTypes.ERROR){
        console.log(action)
        return {
            ...state,
            error:action.payload
        }
    }
    return state;
}

export default LoginReducer