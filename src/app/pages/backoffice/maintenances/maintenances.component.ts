import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenances',
  standalone: true,
  imports: [],
  templateUrl: './maintenances.component.html',
  styleUrl: './maintenances.component.css'
})
export class MaintenancesComponent
{
  constructor(private readonly router: Router) { }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
