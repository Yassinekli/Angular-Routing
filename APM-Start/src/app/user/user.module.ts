import { NgModule } from '@angular/core';

import * as routingPaths from '../../routes/RoutingPaths'
import { RouterModule } from '@angular/router'

import { LoginComponent } from './login.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: routingPaths.LOGIN, component: LoginComponent }
    ])
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
