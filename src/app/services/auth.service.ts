import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private loginUrl = 'http://localhost:8000/api/login_check';

  loginUser(user) {
     return this.http.post<any>(this.loginUrl, user);
   }
   loggedIn() {
    return !!localStorage.getItem('token');
    }
    getToken() {
      return localStorage.getItem('token');

    }
    rol() {
      return localStorage.getItem('roles');
    }

}
