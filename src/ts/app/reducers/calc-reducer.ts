import { Reducer } from "redux";

import { ActionTypes } from "../action-types";
import { AppState } from "../app-state";
import { CalcAction } from "../actions/calc-actions";

export const calcReducer: Reducer<AppState> = (state: AppState = { result: 0 }, action: CalcAction) => {
    switch (action.type) {
        case ActionTypes.ADD:
            return Object.assign({}, state, { result: state.result + action.value });
        case ActionTypes.SUBTRACT:
            return Object.assign({}, state, { result: state.result - action.value });
        case ActionTypes.MULTIPLY:
            return Object.assign({}, state, { result: state.result * action.value });
        case ActionTypes.DIVIDE:
            return Object.assign({}, state, { result: state.result / action.value });
        default:
            return state;
    }
};
