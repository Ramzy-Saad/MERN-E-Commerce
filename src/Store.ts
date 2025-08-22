import { stat } from "fs"
import React from "react"

type AppState = {
    mode: string
}

const initialState: AppState = {
    mode: localStorage.getItem('mode') !== null
    ? localStorage.getItem('mode') as string
    : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',
}

type Action = {type : 'SWITCH_MODE'}

function reducer(state: AppState, action:Action): AppState {
    switch(action.type){
        case 'SWITCH_MODE':
            return {mode: state.mode === 'dark'?'light':'dark'}
        default:
            return state
    }
}

const defaultDispatch: React.Dispatch<Action> = () => initialState

const Store = React.createContext({
    state: initislState,
    dispatch: defaultDispatch
})