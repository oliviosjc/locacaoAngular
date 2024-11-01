import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  onRequestReset(): void {
    this.successMessage = 'Um link para redefinir sua senha foi enviado para o seu e-mail.';
    this.errorMessage = '';
  }
}
