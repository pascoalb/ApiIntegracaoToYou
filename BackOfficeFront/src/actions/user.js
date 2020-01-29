export const SET_LOGIN = 'LOGIN';
export const SET_LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SET_LOGIN_FAILED = 'LOGIN_FAILED';

export function setLogin(payload) {
    return {
        type: SET_LOGIN,
        payload
    };
}

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export function getUser(payload) {
    return {
        type: GET_USER,
        payload
    };
}

export const POST_USER = 'POST_USER';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_FAILED = 'POST_USER_FAILED';

export function saveUser(payload) {
    return {
        type: POST_USER,
        payload
    };
}

export const PUT_USER = 'PUT_USER';
export const PUT_USER_SUCCESS = 'PUT_USER_SUCCESS';
export const PUT_USER_FAILED = 'PUT_USER_FAILED';

export function updateUser(payload) {
    return {
        type: PUT_USER,
        payload
    };
}