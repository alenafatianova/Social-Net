import { InferActionsType, StateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';
import { authData } from './auth-reducer';


export let initialAppState = {
    initilized: false,
    globalerror: null
};
export type initialAppStateType = typeof initialAppState

export const appReducer = (state = initialAppState, action: appActionsType): initialAppStateType => {
    switch(action.type) {
        case 'INITILIZED_SUCCESS':
            return {
                ...state,
                initilized: true,
            }
        default: {
            return state;
        }
    }
};


//---action creator----//
export const appActions = {
    setInitilized: () => ({type: 'INITILIZED_SUCCESS'} as const)
}
export type appActionsType = InferActionsType<typeof appActions>;

//----type for thunk---//
type appThunkType = ThunkAction<void, StateType, unknown, appActionsType>

//--- redux - thunk ----//
export const initilizedAppThunk = (): appThunkType => {
    return (dispatch) => {
        let promise = dispatch(authData())
        Promise.all([promise]).then(() => {
            dispatch(appActions.setInitilized)
        })
    }
}

