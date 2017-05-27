import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from "./app.component";
import { ReactiveForm } from "./reactive-form.component";
import { DashboardComponent } from "./dashboard.component";
import { ColorComponent } from "./color.component";
import { ColorListComponent } from "./color-list.component";
import { HeroesComponent } from "./heroes.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "./hero.service";
import { Logger, simpleLogger } from './services/logger';
import { Colors } from './services/colors';
import { ColorsImmutable } from './services/colors-immutable';
// import { ColorsToken } from './tokens/colors.token';

import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { AppRoutingModule } from "./app-routing.module";

import "../../scss/styles.scss";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ColorComponent,
        ColorListComponent,
        HeroesComponent,
        HeroDetailComponent,
        CapitalizePipe,
        ReactiveForm
    ],
    providers: [
        HeroService,
        {provide: Logger, useValue: simpleLogger},
        Colors,
        ColorsImmutable
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {

}
