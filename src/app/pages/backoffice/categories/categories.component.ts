import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(private readonly router: Router) { }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
