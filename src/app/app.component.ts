import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular4-social-login';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login with google';

  user: any;

  constructor(private _socioAuthServ: AuthService) {  }

  singIn(platform : string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + " logged in user data is= " , response);
        this.user = response;
      }
    );
  }
 
  // Method to log out.
  signOut(): void {
    this._socioAuthServ.signOut();
    this.user = null;
    console.log('User signed out.');
  }
}
