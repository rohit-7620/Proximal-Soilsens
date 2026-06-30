import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-weather-station',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-weather-station.html',
  styleUrl: './product-weather-station.css',
})
export class ProductWeatherStation {
  parameters = [
    { icon: '💨', name: 'Wind Speed & Direction', description: 'Precise anemometer data for understanding field microclimate and evapotranspiration.' },
    { icon: '💧', name: 'Ambient Humidity', description: 'Real-time relative humidity monitoring for disease risk prediction and irrigation scheduling.' },
    { icon: '🌡️', name: 'Ambient Temperature', description: 'Accurate air temperature data for crop growth stage analysis and heat stress alerts.' },
    { icon: '☀️', name: 'Solar Radiation', description: 'Measures incoming solar energy — critical for photosynthesis modeling and evapotranspiration.' },
    { icon: '🌧️', name: 'Rainfall', description: 'Rain gauge data to track actual precipitation and adjust irrigation plans accordingly.' },
  ];

  features = [
    { icon: '⏱️', title: 'Configurable Logging', description: 'Capture data every hour or at any custom interval as desired by the user.' },
    { icon: '🔮', title: 'Predicted Weather Data', description: 'Get hyperlocal weather forecasts to help plan field operations days in advance.' },
    { icon: '📊', title: 'Dashboard Access', description: 'All data is available on an easy-to-use web dashboard for analysis and reporting.' },
    { icon: '📱', title: 'Mobile Alerts', description: "Farmers receive all weather data and advisories directly on their mobile phones." },
    { icon: '📡', title: 'Real-Time Capture', description: 'IoT-connected station transmits data in real time for immediate decision-making.' },
    { icon: '🧑‍🌾', title: 'Farmer-Centric Design', description: 'Helps farmers plan sowing, spraying, harvesting, and irrigation based on actual weather.' },
  ];
}
