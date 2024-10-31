import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  username = '';
  password = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin()
  {
    if (this.authService.login(this.username, this.password))
    {
      this.errorMessage = '';
      this.router.navigate(['/dashboard']);
    }
    else
    {
      this.errorMessage = 'E-mail ou senha incorretos.';
    }
  }
}
