import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GallerysComponent } from '../component/gallerys/gallerys.component';
import { RegisterComponent } from '../component/auth/register/register.component';
import { LoginComponent } from '../component/auth/login/login.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch: 'full'
  },
  { path: 'gallery', component: GallerysComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registar', component: RegisterComponent },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
