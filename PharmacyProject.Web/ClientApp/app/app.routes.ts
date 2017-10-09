import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // Lazy async modules
    //{
    //    path: 'login', loadChildren: './+login/login.module#LoginModule'
    //},
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'counter', component: CounterComponent
    },
    {
        path: 'fetch-data', component: FetchDataComponent
    },
    {
        path: '**', redirectTo: 'home'
    }
];

export const routing = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
