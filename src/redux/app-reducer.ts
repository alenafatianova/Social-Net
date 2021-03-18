import { StateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';
import { authData } from './auth-reducer';


export let initialAppState: initialAppStateType = {
    initilized: false,
};
export type initialAppStateType = {
    initilized: boolean,
}

const INITILIZED_SUCCESS = 'INITILIZED_SUCCESS'

export const appReducer = (state = initialAppState, action: appActionsType): initialAppStateType => {
    switch(action.type) {
        case INITILIZED_SUCCESS:
            return {
                ...state,
                initilized: true,
            }
        default: {
            return state;
        }
    }
};

type setInitilizedType = {
    type: typeof INITILIZED_SUCCESS
}
//---action creator----//
export const setInitilized = (): setInitilizedType => ({type: INITILIZED_SUCCESS} as const);

export type appActionsType = ReturnType<typeof setInitilized>;

//----type for thunk---//
type appThunkType = ThunkAction<void, StateType, unknown, appActionsType>

//--- redux - thunk ----//
export const initilizedAppThunk = (): appThunkType => {
    return (dispatch) => {
        let promise = dispatch(authData())
        Promise.all([promise]).then(() => {
            dispatch(setInitilized)
        })
    }
}

