import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

/* Import Components */
import { WelcomeComponent } from "src/app/home/welcome.component";
import { PageNotFoundComponent } from "src/app/page-not-found.component";

/* Import Routing Paths */
import * as routingPaths from '../routes/RoutingPaths';

export const routes: Routes = [
    { path: routingPaths.WELCOME, component: WelcomeComponent },
    { path: routingPaths.HOME, redirectTo: routingPaths.WELCOME, pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule { }