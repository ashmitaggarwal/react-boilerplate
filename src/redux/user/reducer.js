import {

    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER

} from './actionType';

const initialState = {
    login: null

};

function UserReducer(state = initialState, action) {
    switch (action.type) {


        case LOGIN_USER:
            return {
                ...state,
                login: null
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                login: action.payload
            };
        case LOGIN_USER_FAILED:
            return {
                ...state,
                login: action.payload
            };
        default:
            return state;
    }
}

export default UserReducer;
