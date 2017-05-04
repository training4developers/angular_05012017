import { Component } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";

import { Observable, Observer, Subscription } from "rxjs";

@Component({
    selector: "main",
    template: `
        <h1>Angular Class Demos</h1>
        <tool-menu></tool-menu>
        <router-outlet></router-outlet>
    `,
})
export class AppComponent {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                // console.log("navigation done: ", this.route.pathFromRoot);
                // console.log(window.location.href);
            }
            // ga('set', 'page', event.urlAfterRedirects);
            // ga('send', 'pageview');
        });

        // const stockData = Observable.create((observer: Observer<number>) => {

        //     const ws = new WebSocket("ws://localhost:3010");
        //     ws.addEventListener("message", (msg) => {
        //         // resolve
        //         observer.next(msg.data);
        //     });

        //     ws.addEventListener("error", () => {
        //         // reject
        //         observer.error("something did not go well...");
        //     });

        //     ws.addEventListener("close", () => {
        //         observer.complete();
        //     });



        // });

        // const sub: Subscription = stockData
        //     .filter((stockPrice: number) => stockPrice > 10)
        //     .subscribe((stockPrice: number) => {
        //     // next - resolve
        //     console.log(stockPrice);
        // }, (err: string) => {
        //     // error - reject
        // }, () => {
        //     // complete
        // });

        // sub.unsubscribe();


    }
}
