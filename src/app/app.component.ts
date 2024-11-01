import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit()
  {
    this.authService.isLoggedIn().subscribe(isLoggedIn =>
    {
      this.isAuthenticated = isLoggedIn;
    });
  }
}
