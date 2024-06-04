import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { LWXService } from '../../core/services/lwx.service';

@Component({
  selector: 'app-lwx',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './lwx.component.html',
  styleUrl: './lwx.component.css'
})

export class LWXComponent implements OnInit {
  
  private _lwxService!: LWXService ;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createChart();
    this.fetchForecast();
  }

  // Variable to store the forecast data
  forecastData: any;

  // Fetch the forecast data from the National Weather Service API
  fetchForecast(): void {
    this._lwxService.getForecast().subscribe((data) => {
      this.forecastData = data;
    });
  }

  // show the forecast data
  showForecast(): void {
    console.log(this.forecastData);
  }

  createChart(): void {
    const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Dew Point',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
          },
          {
            label: 'Relative Humidity',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: false,
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}