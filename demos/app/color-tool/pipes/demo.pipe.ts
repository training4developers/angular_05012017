import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "demo",
    pure: false,
})
export class DemoPipe implements PipeTransform {

    public transform(value: any[], f: string, t: number) {
        console.log("demo pipe execute");

        value.sort();

        return value;
    }

}
