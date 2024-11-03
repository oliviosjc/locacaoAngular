import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-communications',
  standalone: true,
  imports: [],
  templateUrl: './communications.component.html',
  styleUrl: './communications.component.css'
})
export class CommunicationsComponent {
  constructor(private readonly router: Router) { }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
