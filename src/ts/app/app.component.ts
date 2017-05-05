import { Component, Injectable,
    InjectionToken, Inject, Directive, ElementRef,
    HostListener, TemplateRef, ViewContainerRef,
    Input,
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
        private e: ElementRef,
    ) {

        console.log(this.products);
        console.log(this.validators);

        this.e.nativeElement.style.backgroundColor = "blue";
    }

    @HostListener("click")
    public clickMe() {
        console.log("clicked!");
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

    public items = [
        "red", "yellow", "blue",
    ];

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
    viewProviders: [
        { provide: PRODUCTS, useValue: { id: "app-comp" }, multi: true },
    ],
})
export class AppComponent {

    constructor(@Inject(PRODUCTS) private products: any) {
        console.log(this.products);
    }

}
