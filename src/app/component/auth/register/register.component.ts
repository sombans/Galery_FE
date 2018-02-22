import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../../shared/model/user';
import { AuthService } from '../../../shared/service/auth.service';
import { Observable, Observer} from 'rxjs/';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = new User();

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  register() {
    this.authService.register(
      this.user.firstName,
      this.user.lastName,
      this.user.email,
      this.user.password,
      this.user.password_confirmation
    ).subscribe(
      (user) => {
      },
      (err: HttpErrorResponse) => {
        alert(`${err.error.message}`);
      });
      this.authService.login(this.user.email, this.user.password)
      .subscribe((token) => {
          this.router.navigateByUrl('/');
    });
  }
}
