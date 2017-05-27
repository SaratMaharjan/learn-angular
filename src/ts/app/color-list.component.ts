import { Component, Inject } from "@angular/core";

import { Logger } from './services/logger';
import { Colors } from './services/colors';
import { ColorsImmutable } from './services/colors-immutable';

const useImmutable = false;

const colorsFactory = (logger: Logger) => {

    if(useImmutable) {
        return new ColorsImmutable(logger);
    } else {
        return new Colors(logger);
    }

}

@Component({
    selector: "color-list",
    template: require("./color-list.component.html"),
    styles: [ require("./color-list.component.scss") ],
    providers: [
        // { provide: Colors, useClass: ColorsImmutable },
        { provide: Colors, useFactory: colorsFactory, deps: [Logger] }
        // { provide: ColorsToken, useClass: ColorsImmutable }
    ]
})

export class ColorListComponent {

    public colors: string[] = [];

    constructor (private colorsSvc: Colors) {
        this.colorsSvc.addColor("red");
        this.colorsSvc.addColor("white");
        this.colorsSvc.addColor("blue");
        this.colorsSvc.addColor("black");
        this.colors = this.colorsSvc.getAll();
    }

}
