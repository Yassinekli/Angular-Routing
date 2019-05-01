import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

/* Import Routes Path */
import { HOME, WELCOME } from '../routes/RoutesPath';

/* Import Components */
import { WelcomeComponent } from './home/welcome.component'
import { PageNotFoundComponent } from './page-not-found.component'

const routes: Routes = [
    { path: WELCOME, component: WelcomeComponent },
    { path: HOME, redirectTo: WELCOME, pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule { }