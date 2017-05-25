import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard.component";
import { ColorComponent } from "./color.component";
import { HeroesComponent } from "./heroes.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "./hero.service";
import { Logger } from './services/logger';

import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { AppRoutingModule } from "./app-routing.module";

import "../../scss/styles.scss";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ColorComponent,
        HeroesComponent,
        HeroDetailComponent,
        CapitalizePipe
    ],
    providers: [
        HeroService,
        Logger
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {

}
