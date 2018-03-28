import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';
import { AppComponent } from './components/app/app.component';;
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { SharedModule } from './components/shared/shared.module'
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app-store';
import { CoreModule } from './core/core.module';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent
    ],
    imports: [
        routing,
        CoreModule.forRoot(),
        SharedModule.forRoot(),
        StoreModule.provideStore(appReducer)
    ]
};
