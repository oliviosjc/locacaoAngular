import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('lineChart') lineChart!: ElementRef<HTMLCanvasElement>;

  constructor()
  {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void
  {
    this.criarGrafico();
  }

  criarGrafico(): void {
    const dadosFaturamento: ChartData<'line'> = {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      datasets:
      [
        {
          label: 'Faturamento',
          data: [1200, 1900, 3000, 5000, 2100, 1800, 2500],
          borderColor: 'gray',
          fill: false,
          tension: 0.1,
        }
      ]
    };

    const opcoes: ChartOptions<'line'> = {
      responsive: true,
      color: 'white',
      plugins:
      {
        legend:
        {
          display: false
        }
      },
      scales: {
        y:
        {
          beginAtZero: true,
        }
      }
    };

    new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: dadosFaturamento,
      options: opcoes
    });
  }
}
