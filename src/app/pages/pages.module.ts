import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    BaseChartDirective
  ]
})
export class PagesModule { }
