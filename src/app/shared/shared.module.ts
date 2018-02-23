import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { FormsModule } from '@angular/forms';
import { GuestGuard } from './guards/guest.guard';
import { AuthGuard } from './guards/auth.guard';
import { GalerisService } from './service/galeris.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  providers: [
    AuthService,
    GuestGuard,
     AuthGuard,
     GalerisService
  ]
})
export class SharedModule { }
