import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `<div>
    <h1>{{header}}</h1>
    </div>`,
})
export class AppComponent {

    public message: string = "Hello World!";

}
