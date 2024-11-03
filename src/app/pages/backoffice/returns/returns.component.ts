import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrl: './returns.component.css'
})
export class ReturnsComponent
{
  constructor(private readonly router : Router){}

  navigateTo(route : string) : void
  {
    this.router.navigate([route]);
  }
}
