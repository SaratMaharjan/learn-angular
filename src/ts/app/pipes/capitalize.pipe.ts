import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: "capitalize"
})

export class CapitalizePipe implements PipeTransform {

    public transform (value: any) {

        const strValue = String(value);
        return strValue.charAt(0).toUpperCase() + strValue.slice(1);

    }
}