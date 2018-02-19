import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './component/layout/layout.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { GallerysComponent } from './component/gallerys/gallerys.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    GallerysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
