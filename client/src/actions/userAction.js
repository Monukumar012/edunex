import axios from 'axios'

import {
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERROR
}
from '../constants/userConstants'


//login
export const login = (email, password) => async(dispatch)=>{
    try {
        
        // const config = { headers : {"Content-Type" : "application/json"}};
        dispatch({type : LOGIN_REQUEST});
        const {data} = await axios.post(`/api/v1/user/login` , {email, password} )


        dispatch({type:LOGIN_SUCCESS, payload : data.user})

    } catch (error) {
        dispatch({type: LOGIN_FAIL,payload:error.response.data.message});
    }
};


//register
export const register = (userData) => async(dispatch)=>{
    try {

        const config = { headers : {"Content-Type" : "application/json"}};
        dispatch({type : REGISTER_REQUEST});
        const {data} = await axios.post(`/api/v1/user/register` , userData, config )


        dispatch({type:REGISTER_SUCCESS, payload : data.user})

    } catch (error) {
        dispatch({type: REGISTER_FAIL,payload:error.response.data.message});
    }
};



//load user
export const loadUser = () => async(dispatch)=>{
    try {
        
        dispatch({type : LOAD_USER_REQUEST});
        const {data} = await axios.get(`/api/v1/user/me`)


        dispatch({type:LOAD_USER_SUCCESS, payload : data.user})

    } catch (error) {
        dispatch({type: LOAD_USER_FAIL,payload:error.response.data.message});
    }
};



//logout user
export const logout = () => async(dispatch)=>{
    try {
        await axios.get(`/api/v1/user/logout`)
        dispatch({type:LOGOUT_SUCCESS })

    } catch (error) {
        dispatch({type: LOGOUT_SUCCESS,payload:error.response.data.message});
    }
};



export const clearErrors = ()=> async(dispatch)=>{
    dispatch({type:CLEAR_ERROR})
}