import * as UserActions from '../actions/user'

const initialState = {
    login: undefined,
    data: [],
    isValid: true,
    indicacaoId: undefined,
    isLoading: false,
    errorMessage: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {

        case UserActions.SET_LOGIN:
            return { ...state, login: undefined, isLoading: true, errorMessage: undefined }

        case UserActions.SET_LOGIN_SUCCESS:
          sessionStorage.setItem('token', action.payload.loginData.token)
            return { ...state, data: { ...action.payload, loginData: undefined }, login: action.payload.loginData, isLoading: false, errorMessage: undefined };

        case UserActions.SET_LOGIN_FAILED:
            return { ...state, login: undefined, isLoading: false, errorMessage: action.payload.message ? JSON.parse(action.payload.message).Message : 'Falha ao efetuar Login!' };

        case UserActions.POST_USER:
            return { ...state, data: [], isLoading: true, errorMessage: undefined }

        case UserActions.POST_USER_SUCCESS:
            return { ...state, data: action.payload, isLoading: false, errorMessage: undefined };

        case UserActions.POST_USER_FAILED:
            return { ...state, data: [], isLoading: false, errorMessage: action.payload.message ? JSON.parse(action.payload.message).Message : 'Falha ao cadastrar usuário!' };

        case UserActions.GET_USER_VALID:
            return { ...state, isValid: false, indicacaoId: undefined, isLoading: true, errorMessage: undefined };

        case UserActions.GET_USER_VALID_SUCCESS:
            return { ...state, indicacaoId: action.payload, isValid: true, isLoading: false, errorMessage: undefined };

        case UserActions.GET_USER_VALID_FAILED:
            return { ...state, isValid: false, indicacaoId: undefined, isLoading: false, errorMessage: treatErrorMessage(action.payload.message) };

        case UserActions.SET_LOGOUT:
            return { ...initialState }

        default:
            return { ...state }
    }
}

export function treatErrorMessage(message) {
    if (message.includes('Failed to fetch')) {
        return 'Falha na requisição. Contate o suporte.'
    } else {
        return JSON.parse(message).Message
    }



}