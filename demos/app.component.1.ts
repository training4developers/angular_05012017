import { Component, Injectable,
    InjectionToken, Inject, Directive,
    ElementRef, OnInit, HostListener, Input, TemplateRef, ViewContainerRef,
} from "@angular/core";

import { Observable, Observer } from "rxjs";

import { NG_VALIDATORS } from "@angular/forms";

import { PRODUCTS } from "./shared/services/products.service";

@Directive({
    selector: "[demo-dir]",
    providers: [
        { provide: PRODUCTS, useValue: { id: "demo-dir" }, multi: true },
        { provide: NG_VALIDATORS, useValue: (): any => null, multi: true },
    ],
})
export class DemoDirDirective implements OnInit {

    constructor(
        @Inject(PRODUCTS) private products: any,
        @Inject(NG_VALIDATORS) private validators: any,
        private e: ElementRef,
    ) {
        console.log("creating instance of demo dir");

        console.log(this.products);
        console.log(this.validators);

        this.e.nativeElement.style.backgroundColor = "white";
    }

    @HostListener("click")
    public clickMe() {
        console.log("I was clicked!");
    }

    public ngOnInit() {

        this.e.nativeElement.focus();
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
    selector: "[myIf]",
})
export class MyIfDirective {

    private viewShowing: boolean;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef,
    ) { }

    @Input()
    public set myIf(condition: boolean) {

        if (condition && !this.viewShowing) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
            this.viewShowing = true;
        } else if (this.viewShowing) {
            this.viewContainerRef.clear();
            this.viewShowing = false;
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
    ) { }

    @Input()
    public set myForOf(items: any[]) {

        this.viewContainerRef.clear();

        items.forEach((jessica, index) => {
            this.viewContainerRef.createEmbeddedView(
                this.templateRef,
                {
                    $implicit: jessica,
                    index,
                    first: index === 0,
                },
            );
        });

    }

}

@Component({
    selector: "child-demo",
    template: `child demo
        <input type="checkbox" [(ngModel)]="showMe">
        <div *myIf="showMe">
            You can see me!
            Show Me: {{showMe}}
        </div>
        <ng-template [myIf]="showMe">
            <div>
                You can see me!
            </div>
        </ng-template>

        <ul>
            <li *myFor="let adeet of items; let nizam=index;">
                {{nizam}} {{adeet}}
            </li>
        </ul>
        <ul>
            <ng-template myFor let-adeet let-nizam="index" [myForOf]="items">
                <li>{{nizam}} {{adeet}}</li>
            </ng-template>
        </ul>


    `,
})
export class ChildDemoComponent {

    public items = [ "red", "yellow", "blue" ];

    constructor(@Inject(PRODUCTS) private products: any) {
        console.log(this.products);
    }
}

@Component({
    selector: "main",
    template: `
        parent demo {{nums | async}}
        <child-demo></child-demo>
    `,
    viewProviders: [
        { provide: PRODUCTS, useValue: { id: "app-comp" }, multi: true },
    ],
})
export class AppComponent implements OnInit {

    public nums: Observable<number> = null;

    constructor(@Inject(PRODUCTS) private products: any) {
        console.log(this.products);
    }


    public ngOnInit() {

        this.nums = Observable.create(
            (observer: Observer<number>) => {
                const ws = new WebSocket("ws://localhost:3030");
                ws.addEventListener("message", (msg) => {
                    observer.next(JSON.parse(msg.data));
                });
            },
        );

        // nums.map((num: number) => num * 2)
        //     .filter((num: number) => num > 20)
        //     .subscribe( (num: number) => {
        //         console.log(num);
        //     });


    }

}
