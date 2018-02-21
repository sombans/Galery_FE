import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './component/layout/layout.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { GallerysComponent } from './component/gallerys/gallerys.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    GallerysComponent,
    LoginComponent,
    RegisterComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    CustomFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
