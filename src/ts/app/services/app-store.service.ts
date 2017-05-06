import { Injectable } from "@angular/core";
import { createStore, Store, Action, bindActionCreators } from "redux";

import { ActionTypes } from "../action-types";
import { AppState } from "../app-state";
import * as actionCreators from "../actions/calc-actions";
import { calcReducer } from "../reducers/calc-reducer";

@Injectable()
export class AppStore {

    private store: Store<AppState>;
    private actions: any;

    constructor() {
        this.store = createStore<AppState>(calcReducer);
        this.actions = bindActionCreators({
            add: actionCreators.addActionCreator,
            subtract: actionCreators.subtractActionCreator,
            multiple: actionCreators.multiplyActionCreator,
            divide: actionCreators.divideActionCreator,
        }, this.store.dispatch);
    }

    public getActions() {
        return this.actions;
    }

    public getState() {
        return this.store.getState();
    }

    public dispatch(action: Action) {
        return this.store.dispatch(action);
    }

    public subscribe(fn: () => void) {
        return this.store.subscribe(fn);
    }
}
