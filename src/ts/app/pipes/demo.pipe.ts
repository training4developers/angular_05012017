import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "demo",
    pure: true,
})
export class DemoPipe implements PipeTransform {

    public transform(value: any[]) {
        console.log("demo pipe execute");

        value.sort();

        return value;
    }

}
