import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,

} from './actionType';



export function setlogin() {
    return {
        type: LOGIN_USER
    };
}



export function loginSuccess(payload) {
    return {
        type: LOGIN_USER_SUCCESS,
        payload
    };
}

export function loginFailed(payload) {
    return {
        type: LOGIN_USER_FAILED,
        payload
    };
}

export const userLogin = (payload) => async (dispatch, getState, api) => {
    dispatch(setlogin());
    await api.post(`${''}`, payload)
        .then(response => {
            if (response.data.data && response.data.data.token) {
                dispatch(loginSuccess(response.data.data));
            } else {
                dispatch(loginFailed(response.data));
            }
        })
        .catch(err => {
            dispatch(loginFailed(err.response.data));
        });
};
