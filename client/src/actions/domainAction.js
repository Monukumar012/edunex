import axios from "axios";


import {
        ALL_DOMAIN_REQUEST,
        ALL_DOMAIN_SUCCESS,
        ALL_DOMAIN_FAIL,
        DOMAIN_DETAILS_REQUEST,
        DOMAIN_DETAILS_SUCCESS,
        DOMAIN_DETAILS_FAIL,
        CLEAR_ERROR,
} from '../constants/domainConstants'




export const getDomain = ()=> async (dispatch)=>{
        try {
                
                dispatch({type : ALL_DOMAIN_REQUEST });

                const {data} = await axios.get("/api/v1/admin/get-all")

                dispatch({
                        type : ALL_DOMAIN_SUCCESS,
                        payload: data,
                });

        } catch (error) {
               dispatch({
                type : ALL_DOMAIN_FAIL,
                payload:error.response.data.message,
               });
        }
}



export const getDomainDetails = (id)=> async (dispatch)=>{
        try {
                
                dispatch({type : DOMAIN_DETAILS_REQUEST });

                const {data} = await axios.get(`/api/v1/admin/get/${id}`)

                dispatch({
                        type : DOMAIN_DETAILS_SUCCESS,
                        payload: data,
                });

        } catch (error) {
               dispatch({
                type : DOMAIN_DETAILS_FAIL,
                payload:error.response.data.message,
               });
        }
}


export const clearErrors = ()=> async(dispatch)=>{
        dispatch({type:CLEAR_ERROR})
}