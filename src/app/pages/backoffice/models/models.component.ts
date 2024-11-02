import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent
{
  constructor(private readonly router: Router){}
  navigateTo(route : string) : void
  {
    this.router.navigate([route]);
  }
}
