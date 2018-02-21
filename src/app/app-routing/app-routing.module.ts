import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GallerysComponent } from '../component/gallerys/gallerys.component';
import { RegisterComponent } from '../component/auth/register/register.component';
import { LoginComponent } from '../component/auth/login/login.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { GuestGuard } from '../shared/guards/guest.guard';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch: 'full'
  },
  { path: 'gallery', canActivate: [AuthGuard], component: GallerysComponent },
  { path: 'login', canActivate: [GuestGuard], component: LoginComponent },
  { path: 'registar', component: RegisterComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
