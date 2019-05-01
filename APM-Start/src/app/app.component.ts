import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';

/* Import Routing Paths */
import * as routingPaths from '../routes/RoutingPaths';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';

  // String Routing URLs
  welcome = routingPaths.HOME;
  products = routingPaths.PRODUCTS;
  login = routingPaths.LOGIN;

  constructor(private authService: AuthService) { }

  // Getters
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
  }
}
