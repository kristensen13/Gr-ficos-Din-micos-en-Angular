import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css'],
})
export class DonutsComponent {
  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] },
      { data: [50, 150, 120] },
      { data: [250, 130, 70] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
  public numeros_random() {
    //   this.doughnutChartData.datasets = [
    //     { data: [1, 2, 3] },
    //     { data: [1, 2, 3] },
    //     { data: [1, 2, 3] },
    //   ];
    //////////////
    this.doughnutChartData = {
      //labels: this.doughnutChartLabels,
      datasets: [
        {
          data: [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
          ],
        },
        // {
        //   data: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
        // },
        // {
        //   data: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
        // },
      ],
    };
  }
}
