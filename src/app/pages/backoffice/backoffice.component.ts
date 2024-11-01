import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrl: './backoffice.component.css'
})
export class BackofficeComponent
{
  constructor(private readonly router : Router){}

  navigateTo(route : string) : void
  {
    this.router.navigate([route]);
  }
}
