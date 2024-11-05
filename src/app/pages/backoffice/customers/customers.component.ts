import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})

export class CustomersComponent
{
  constructor(private readonly router: Router){}
  navigateTo(route : string) : void
  {
    this.router.navigate([route]);
  }
}
