import { Component, Injectable, InjectionToken, Inject, Directive,
} from "@angular/core";

import { NG_VALIDATORS } from "@angular/forms";

import { PRODUCTS } from "./shared/services/products.service";

@Directive({
    selector: "[demo-dir]",
    providers: [
        { provide: PRODUCTS, useValue: { id: "demo-dir" }, multi: true },
        { provide: NG_VALIDATORS, useValue: (): any => null, multi: true },
    ],
})
export class DemoDirDirective {

    constructor(
        @Inject(PRODUCTS) private products: any,
        @Inject(NG_VALIDATORS) private validators: any,
    ) {
        console.log(this.products);
        console.log(this.validators);
    }
}

@Directive({
    selector: "[demo2-dir]",
    providers: [
        { provide: PRODUCTS, useValue: { id: "demo2-dir" }, multi: true },
        { provide: NG_VALIDATORS, useValue: (): any => null, multi: true },
    ],
})
export class Demo2DirDirective {

    constructor(
        @Inject(PRODUCTS) private products: any,
        @Inject(NG_VALIDATORS) private validators: any,
    ) {
        console.log(this.products);
        console.log(this.validators);
    }
}

@Component({
    selector: "child-demo",
    template: `child demo`,
})
export class ChildDemoComponent {

    constructor(@Inject(PRODUCTS) private products: any) {
        console.log(this.products);
    }

}

@Component({
    selector: "main",
    template: `
        parent demo
        <child-demo></child-demo>
    `,
})
export class AppComponent {

    constructor(@Inject(PRODUCTS) private products: any) {
        console.log(this.products);
    }

}
