import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer} from 'rxjs/';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Injectable()
export class AuthService {

  user: User;
  public isAuthenticated: boolean;

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.isAuthenticated = !!window.localStorage.getItem('loginToken');
    }

  login(email: string, password: string) {
    return new Observable((o: Observer<any>) => {
      this.http.post('http://localhost:8000/api/login', {
        'email': email,
        'password': password
      })
        .subscribe(
        (data: { token: string }) => {
          window.localStorage.setItem('loginToken', data.token);
          this.isAuthenticated = true;

          o.next(data.token);
          return o.complete();
        },
        (err) => {
          // samo proslediti
          return o.error(err);
        }
        );
    });
  }

  public getRequestHeaders() {
    return new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('loginToken'));
  }

  public logout() {
    window.localStorage.removeItem('loginToken');
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  register(firstName: string, lastName: string, email: string, password: string, password_confirmation: string) {
    return new Observable((o: Observer<any>) => {
      this.http.post('http://localhost:8000/api/register', {
        'first_name': firstName,
        'last_name': lastName,
        'email': email,
        'password': password,
        'password_confirmation' : password_confirmation
      })
        .subscribe(
          (data: { email: string, user: Object }) => {
            this.user = data;
            o.next(this.user);
            return o.complete();
          },
          (err) => {
            return o.error(err);
          }
        );
    });
  }
}
