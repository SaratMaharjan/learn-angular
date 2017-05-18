import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `<div>
    <h1>{{header}}</h1>
    <ul>
        <li *ngFor="let color of colors">
            {{color}}
        </li>
    </ul>
    </div>`,
})
export class AppComponent {

    public header: string = "Color Tool";

    public colors: string[] = [
        "red", "white", "green", "orange"
    ]

}
