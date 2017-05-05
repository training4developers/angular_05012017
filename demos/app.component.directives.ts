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

@Directive({
    selector: "[myUnless]",
})
export class MyUnlessDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef,

    ) {}

    @Input()
    public set myUnless(condition: boolean) {
        if (condition) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);

        } else {
            this.viewContainerRef.clear();
        }
    }
}

@Directive({
    selector: "[myFor]",
})
export class MyForDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef,

    ) {}

    @Input()
    public set myForOf(items: any[]) {

        this.viewContainerRef.clear();
        items.forEach((item, index, theItems) => {
            console.log(item);
            this.viewContainerRef.createEmbeddedView(
                this.templateRef,
                {
                    $implicit: item,
                    index,
                    even: index % 2 === 0,
                    odd: index % 2 !== 0,
                    first: index === 0,
                    last: index === theItems.length - 1,
                    middle: !(index === 0) && !(index === theItems.length - 1),
                },
                // 0,
            );
        });

    }

}

@Component({
    selector: "child-demo",
    template: `child demo
        <input type="checkbox" name="showMe" id="show-me-input" [(ngModel)]="showMe">
        <div *myUnless="showMe">
            You can see me!
        </div>
        <ul>
            <ng-template myFor [myForOf]="items"
                let-item
                let-index="index"
                let-even="even"
                let-odd="odd"
                let-first="first"
                let-last="last"
                let-middle="middle"
            >
                <li>
                    <div>Index: {{index}}</div>
                    <div>Even: {{even}}</div>
                    <div>Odd: {{odd}}</div>
                    <div>First: {{first}}</div>
                    <div>Last: {{last}}</div>
                    <div>Middle: {{middle}}</div>
                    <div>{{item}}</div>
                </li>
            </ng-template>
            <li *myFor="let item of items; let aliasEven=even">
                <div>Even: {{aliasEven}}</div>
                <div>{{item}}</div>
            </li>
        </ul>
    `,
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
