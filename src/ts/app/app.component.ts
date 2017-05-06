import { Component, Injectable, OnInit, OnDestroy } from "@angular/core";
import { FormControl } from "@angular/forms";

import { AppStore } from "./services/app-store.service";

@Component({
    selector: "main",
    template: `
        <input type="number" [formControl]="calcEntry">
        <button (click)="this.appStore.getActions().add(this.calcEntry.value);this.calcEntry.setValue(0);">+</button>
        <span>Result: {{result}}</span>
    `,
})
export class AppComponent implements OnInit, OnDestroy {

    public calcEntry = new FormControl("");
    public result: number;

    private storeUnsubscribe: () => void;

    constructor(
        private appStore: AppStore,
    ) { }

    public ngOnInit() {
        this.storeUnsubscribe = this.appStore.subscribe(() => {
            this.result = this.appStore.getState().result;
        });
    }

    public ngOnDestroy() {
        this.storeUnsubscribe();
    }

}
