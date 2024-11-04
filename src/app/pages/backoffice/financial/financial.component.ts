import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financial',
  standalone: true,
  imports: [],
  templateUrl: './financial.component.html',
  styleUrl: './financial.component.css'
})
export class FinancialComponent {
  constructor(private readonly router: Router) { }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
