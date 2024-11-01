import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { LoadingService } from '../../core/services/loading.service';

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

  constructor(private authService: AuthService,
    private router: Router) { }
  onLogin()
  {
    this.authService.login(this.username, this.password).subscribe(
      success =>
      {
        if (success)
        {
          this.router.navigate(['/dashboard']);
        }
        else
        {
          this.errorMessage = 'Usuário ou senha inválidos';
        }
      }
    )
  }
}
