import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loginUserData = {};
  helper = new JwtHelperService();
  rol = {};

  constructor(private auth: AuthService,
              private router: Router) {}

              ngOnInit() {
              }

  loginUser() {
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(this.loginUserData);
        console.log(res);

        if ( res.token) {
       localStorage.setItem('token', res.token);
       const decodedToken = this.helper.decodeToken(res.token);
       console.log(decodedToken.username);
       localStorage.setItem('username', decodedToken.username);
       localStorage.setItem('roles', decodedToken.roles);
       localStorage.setItem('expiration', decodedToken.exp);
       console.log(localStorage);
      // this.rol(decodedToken.roles[0]);
       
}
this.router.navigateByUrl('transaction');
   },
   err => {
    console.log(err);
    }
     );
   }
  //  rol(arg0: any) {
  //   throw new Error('Method not implemented.');
  // }

}

