import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "reactive-form",
    template: require("./reactive-form.component.html"),
    styles: [ require("./reactive-form.component.scss") ]

})

export class ReactiveForm {

    public profileForm: FormGroup = new FormGroup({
        firstNameInput: new FormControl(''),
        lastNameInput: new FormControl(''),
        addressGroup: new FormGroup({
            streetInput: new FormControl(''),
            cityInput: new FormControl(''),
            countryInput: new FormControl('')
        })
    });

    public message: string = 'Hellau world';

}