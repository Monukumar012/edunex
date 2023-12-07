import {createStore,combineReducers,applyMiddleware} from 'redux'
import { domainDetailsReducer, domainReducers } from './reducers/domainReducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applicationDetailsReducer, applicationReducers } from './reducers/applicationReducers';
import {userReducers } from './reducers/userReducers';

const reducer = combineReducers({
        domains : domainReducers,
        domainDetails : domainDetailsReducer,
        applications : applicationReducers,
        applicationDetails : applicationDetailsReducer,
        user : userReducers,
});


let initialState = {};

const middleware = [thunk];

const store = createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
);


export default store;
