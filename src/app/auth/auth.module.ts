import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterLink } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations:
  [
    LoginComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ]
})
export class AuthModule { }
