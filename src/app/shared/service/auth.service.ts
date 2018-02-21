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

  register(firstName: string, lastName: string, email: string, password: string) {
    return new Observable((o: Observer<any>) => {
      this.http.post('http://localhost:8000/api/register', {
        'first_name': firstName,
        'last_name': lastName,
        'email': email,
        'password': password
      })
        .subscribe(
          (data: { token: string, user: Object }) => {
            window.localStorage.setItem('loginToken', data.token);
            this.isAuthenticated = true;
            window.localStorage.setItem('user', JSON.stringify(data.user));
            this.user = new User(data.user['id'], data.user['first_name'], data.user['last_name'], data.user['email']);
            o.next(data.token);
            return o.complete();
          },
          (err) => {
            return o.error(err);
          }
        );
    });
  }
}
