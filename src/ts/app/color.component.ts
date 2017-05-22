import { Component } from "@angular/core";

@Component({
    selector: "my-color",
    template: require("./color.component.html"),
    styles: [ require("./color.component.scss") ]
})

export class ColorComponent {

    public header: string = "Color Tool";

    public colors: string[] = [
        "red", "white", "green", "orange"
    ];

    public newColor: string = "";

    public addColor(){
        this.colors.push(this.newColor);
        this.newColor = "";
    }

    public people: any[] = [
        { firstName: "john", lastName: "afddaf"},
        { firstName: "secondJohn", lastName: "afddaf"},
        { firstName: "thirdJohn", lastName: "afddaf"},
        { firstName: "afadsfdasfadsf", lastName: "afddaf"},
        { firstName: "afadsfdasfadsf", lastName: "afddaf"},
        { firstName: "afadsfdasfadsf", lastName: "afddaf"},
        { firstName: "afadsfdasfadsf", lastName: "afddaf"}
    ];
    public get startPerson(): number {
        return this.currentPage * this.pageLength;
    }
    public get endPerson(): number {
        return (this.currentPage * this.pageLength + this.pageLength);
    }
    public currentPage: number = 0;
    public pageLength: number = 3;
    public prevPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    }
    public nextPage() {
        let pages: number = this.people.length / this.pageLength;

        if (this.people.length % this.pageLength > 0) {
            pages++;
        }
        if (this.currentPage < pages) {
            this.currentPage++;
        }
    }
}