import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport',
  standalone: true,
  imports: [],
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.css'
})
export class TransportComponent {
  constructor(private readonly router: Router) { }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
