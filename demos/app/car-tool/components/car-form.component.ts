import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "car-form",
    template: `car form`,
})
export class CarFormComponent implements OnInit {

    constructor(private route: ActivatedRoute) {

    }

    public ngOnInit() {

        this.route.params.subscribe((params) => {
            console.log(params["id"]);
        });

    }



}
