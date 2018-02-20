import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http/src/response';
import { AuthService } from '../../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  login(email, password) {
    this.authService.login(email, password).subscribe(
      () => {
        this.router.navigateByUrl('/');
      }, (err: HttpErrorResponse) => {
        alert(`${err.error.error}`);
      }
    );
  }
}