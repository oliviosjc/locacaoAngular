import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.css'
})
export class CrmComponent {
  constructor(private readonly router : Router){}

  navigateTo(route : string) : void
  {
    this.router.navigate([route]);
  }
}
