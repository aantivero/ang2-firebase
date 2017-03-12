import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {AuthService} from "./providers/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private isLoggedIn: boolean;
  private user_displayName: string;
  private user_email: string;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;

          this.router.navigate(['']);
        }
      }
    );

  }

  title = 'DEBIN - Test Ng2 FB MD';


  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
