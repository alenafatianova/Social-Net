import { StateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';
import { authData } from './auth-reducer';


export let initialAppState: initialAppStateType = {
    initilized: false,
};
export type initialAppStateType = {
    initilized: boolean | null,
}

const INITILIZED_SUCCESS = 'INITILIZED_SUCCESS'

export const appReducer = (state: initialAppStateType = initialAppState, action: appActionsType) => {
    switch(action.type) {
        case INITILIZED_SUCCESS:
            return {
                ...state,
                initilized: true
            }
        default: {
            return state;
        }
    }
};

export const setInitilized = () => ({type: INITILIZED_SUCCESS} as const);

export type appActionsType = ReturnType<typeof setInitilized>;

type appThunkType = ThunkAction<void, StateType, unknown, appActionsType>

export const initilizedAppThunk = (): appThunkType => {
    return (dispatch) => {
        let promise = dispatch(authData())
        Promise.all([promise]).then(() => {
            dispatch(setInitilized)
        })
    }
}

