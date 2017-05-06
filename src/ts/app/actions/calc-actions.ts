import { Action, ActionCreator } from "redux";

import { ActionTypes } from "../action-types";

export class CalcAction implements Action {
    public type: any;
    public value: number;
}

export const addActionCreator: ActionCreator<CalcAction> = (value: number) =>
    ({ type: ActionTypes.ADD, value });
export const subtractActionCreator: ActionCreator<CalcAction> = (value: number) =>
    ({ type: ActionTypes.SUBTRACT, value });
export const multiplyActionCreator: ActionCreator<CalcAction> = (value: number) =>
    ({ type: ActionTypes.MULTIPLY, value });
export const divideActionCreator: ActionCreator<CalcAction> = (value: number) =>
    ({ type: ActionTypes.DIVIDE, value });
