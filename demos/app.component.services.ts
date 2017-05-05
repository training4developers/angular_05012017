import { Component, Injectable, InjectionToken, Inject } from "@angular/core";

const SAMSUNG_SERVICES = new InjectionToken("SAMSUNG_SERVICES");

interface DemoSvc {
    instanceId: number;
}

const anotherDemoSvc = {
    instanceId: 34,
};

const anotherDemoSvc2Factory = () => {
    return {
        instanceId: 42,
    };
};

@Component({
    selector: "child-demo",
    template: "child demo: {{samsungServices[0].instanceId}}",
    providers: [ { provide: SAMSUNG_SERVICES, useValue: anotherDemoSvc, multi: true } ],
})
export class ChildDemoComponent {

    constructor(@Inject(SAMSUNG_SERVICES) private samsungServices: DemoSvc[]) {
        console.log(this.samsungServices);
    }

}



@Component({
    selector: "main",
    template: `
        parent demo: {{samsungServices[0].instanceId}}
        <child-demo></child-demo>
    `,
    providers: [ { provide: SAMSUNG_SERVICES, useFactory: anotherDemoSvc2Factory, multi: true } ],
})
export class AppComponent {

    constructor(@Inject(SAMSUNG_SERVICES) private samsungServices: DemoSvc[]) {
        console.log(this.samsungServices);
    }

}
