import axios from "axios"
import * as actionTypes from "./actionTypes"

export const LoginAction=(username,password)=>{
    console.log(username,password)
    
    
        return async dispatch=>{
            const headers = {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                method:'POST',
                credentials: 'include',
            };
            
            const config = {
                headers
            };
            const data=JSON.stringify({ username: username,password: password })
                   
            try{
             axios.post('http://192.168.0.12:8080/login',
             data,config).then(response=>response).then((responseData)=>{
             console.log(responseData)
                    dispatch({
                        type:actionTypes.LOGIN,
                        payload:responseData.data
                    })
                    
                    
                }).catch((err)=>{
                    dispatch({
                        type:actionTypes.ERROR,
                        payload:err.message
                })
                })
            
            }catch(err){
                console.log(err.message)
                
            }
            
        }
    }
    export const UpdateAction=(username,password)=>{
    
    
        console.log(username,password)
            return async dispatch=>{
                const headers = {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    method:'POST',
                    credentials: 'include',
                };
                
                const config = {
                    headers
                };
                const data=JSON.stringify({ username: username,password: password })
                
                try{
                 axios.post("http://localhost:8080/update",
                 data,config).then(response=>response).then((responseData)=>{
                 
                        dispatch({
                            type:actionTypes.UPDATE,
                            payload:responseData.data
                        })
                        
                        
                    }).catch((err)=>{
                        dispatch({
                            type:actionTypes.ERROR,
                            payload:err.message
                    })
                    })
                
                }catch(err){
                    console.log(err.message)
                    
                }
                
            }
        }