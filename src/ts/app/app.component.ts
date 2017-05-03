import { Component } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";

@Component({
    selector: "main",
    template: `
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
                console.log("navigation done: ", this.route.pathFromRoot);
                console.log(window.location.href);
            }
            // ga('set', 'page', event.urlAfterRedirects);
            // ga('send', 'pageview');
        });
    }
}
