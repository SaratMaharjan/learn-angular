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
    <form>
        <div>
            <label for="new-color">New Color:</label>
            <input type="text" id="new-color-input" name="newColor" [(ngModel)]="newColor">
        </div>
    </form>
    </div>`,
})
export class AppComponent {

    public header: string = "Color Tool";

    public colors: string[] = [
        "red", "white", "green", "orange"
    ];

    public newColor: string = "";

}
