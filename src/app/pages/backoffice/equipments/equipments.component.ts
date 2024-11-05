import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipments',
  standalone: true,
  imports: [],
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.css'
})
export class EquipmentsComponent {
  constructor(private readonly router: Router) { }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
