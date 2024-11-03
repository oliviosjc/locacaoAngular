import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent
{
  constructor(private readonly router: Router) { }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
