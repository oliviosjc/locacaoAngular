import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent
{
  constructor(private readonly router: Router){}
  navigateTo(route : string) : void
  {
    this.router.navigate([route]);
  }
}
