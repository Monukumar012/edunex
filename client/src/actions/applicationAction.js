import axios from "axios";


import {
    ALL_APPLICATION_REQUEST,
    ALL_APPLICATION_SUCCESS,
    ALL_APPLICATION_FAIL,
    APPLICATION_DETAILS_REQUEST,
    APPLICATION_DETAILS_SUCCESS,
    APPLICATION_DETAILS_FAIL,
    CLEAR_ERROR,
} from '../constants/applicationConstants'





export const getApplication = (email)=> async (dispatch)=>{
        try {
                dispatch({type : ALL_APPLICATION_REQUEST });

                const {data} = await axios.get(`/api/v1/application/get/${email}`)

                dispatch({
                        type : ALL_APPLICATION_SUCCESS,
                        payload: data,
                });

        } catch (error) {
               dispatch({
                type : ALL_APPLICATION_FAIL,
                payload:error.response.data.message,
               });
        }
}



export const getApplicationDetails = (id)=> async (dispatch)=>{
        try {
                
                dispatch({type : APPLICATION_DETAILS_REQUEST });

                const {data} = await axios.get(`/api/v1/application/get-id/${id}`)

                dispatch({
                        type : APPLICATION_DETAILS_SUCCESS,
                        payload: data,
                });

        } catch (error) {
               dispatch({
                type : APPLICATION_DETAILS_FAIL,
                payload:error.response.data.message,
               });
        }
}


export const clearErrors = ()=> async(dispatch)=>{
        dispatch({type:CLEAR_ERROR})
}