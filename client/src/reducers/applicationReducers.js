import {
    ALL_APPLICATION_REQUEST,
    ALL_APPLICATION_SUCCESS,
    ALL_APPLICATION_FAIL,
    APPLICATION_DETAILS_REQUEST,
    APPLICATION_DETAILS_SUCCESS,
    APPLICATION_DETAILS_FAIL,
    CLEAR_ERROR,
} from '../constants/applicationConstants'



export const applicationReducers = (state = { applications: [] }, action) => {
    switch (action.type) {
            case ALL_APPLICATION_REQUEST:
                    return {
                            loading: true,
                            applications: []
                    };

            case ALL_APPLICATION_SUCCESS:

                    return {
                            loading: false,
                            applications: action.payload.applications,
                    };
            case ALL_APPLICATION_FAIL:

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




export const applicationDetailsReducer = (state = { application: {} }, action) => {
    switch (action.type) {
            case APPLICATION_DETAILS_REQUEST:
                    return {
                            loading: true,
                            ...state,
                    };

            case APPLICATION_DETAILS_SUCCESS:

                    return {
                            loading: false,
                            application: action.payload.application,

                    };
            case APPLICATION_DETAILS_FAIL:

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