import { Component } from "@angular/core";

import { Logger } from './services/logger';

@Component({
    selector: "main",
    template: require("./app.component.html"),
    styles: [ require("./app.component.scss") ]
})

export class AppComponent {

    constructor (private logger: Logger) {
        this.logger.log('inside main app constructor');
    }
    title = "Tour of Heroes";

}
