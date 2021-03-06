import { takeEvery } from "redux-saga/effects";
import { fetchUrl, API } from "../util";
import * as UserActions from '../actions/user'

function* setLogin(action) {
    const param = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(action.payload)
    };
    yield fetchUrl(`${API}Usuarios/login`, UserActions.SET_LOGIN_SUCCESS, UserActions.SET_LOGIN_FAILED, param);
}

export function* watchSetLogin() {
    yield takeEvery(UserActions.SET_LOGIN, setLogin);
}

function* saveUser(action) {
    const param = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(action.payload)
    };
    yield fetchUrl(`${API}Usuarios`, UserActions.POST_USER_SUCCESS, UserActions.POST_USER_FAILED, param);
}

export function* watchSaveUser() {
    yield takeEvery(UserActions.POST_USER, saveUser);
}

function* getUserValid(action) {
    const param = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    };
    yield fetchUrl(`${API}Usuarios/VerificarUsuario/` + action.payload, UserActions.GET_USER_VALID_SUCCESS, UserActions.GET_USER_VALID_FAILED, param);
}

export function* watchGetUserValid() {
    yield takeEvery(UserActions.GET_USER_VALID, getUserValid);
}
