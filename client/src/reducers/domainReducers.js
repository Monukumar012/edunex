import {
        ALL_DOMAIN_REQUEST,
        ALL_DOMAIN_SUCCESS,
        ALL_DOMAIN_FAIL,
        DOMAIN_DETAILS_REQUEST,
        DOMAIN_DETAILS_SUCCESS,
        DOMAIN_DETAILS_FAIL,
        CLEAR_ERROR,
} from '../constants/domainConstants'



export const domainReducers = (state = { domains: [] }, action) => {
        switch (action.type) {
                case ALL_DOMAIN_REQUEST:
                        return {
                                loading: true,
                                domain: []
                        };

                case ALL_DOMAIN_SUCCESS:

                        return {
                                loading: false,
                                domains: action.payload.interns,
                                domainCount: action.payload.internCount,
                        };
                case ALL_DOMAIN_FAIL:

                        return {
                                loading: false,
                                error: action.payload
                        };
                case CLEAR_ERROR:

                        return {
                                ...state,
                                error: null
                        };

                default:
                        return state;
        }
};




export const domainDetailsReducer = (state = { domain: {} }, action) => {
        switch (action.type) {
                case DOMAIN_DETAILS_REQUEST:
                        return {
                                loading: true,
                                ...state,
                        };

                case DOMAIN_DETAILS_SUCCESS:

                        return {
                                loading: false,
                                domain: action.payload.intern,

                        };
                case DOMAIN_DETAILS_FAIL:

                        return {
                                loading: false,
                                error: action.payload
                        };
                case CLEAR_ERROR:

                        return {
                                ...state,
                                error: null
                        };

                default:
                        return state;
        }
};