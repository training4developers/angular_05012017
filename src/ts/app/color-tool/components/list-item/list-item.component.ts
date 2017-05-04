import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Color } from "../../models/color";

@Component({
    selector: "li[list-item]",
    template: require("./list-item.component.html"),
    styles: [ require("./list-item.component.scss") ],
})
export class ListItemComponent {

    // @Input()
    // public color: Color;

    // @Output()
    // public onDeleteColor = new EventEmitter<number>();

    // public deleteColor(colorId: number) {
    //     this.onDeleteColor.emit(colorId);
    // }

}
