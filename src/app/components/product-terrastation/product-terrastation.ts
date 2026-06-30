import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-terrastation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-terrastation.html',
  styleUrl: './product-terrastation.css',
})
export class ProductTerrastation {
  sensors = [
    { icon: '💧', name: 'Soil Moisture', description: 'Measured using FDR probe designed & developed at IIT Bombay with extensive lab and field testing' },
    { icon: '🌡️', name: 'Soil Temperature', description: 'Accurate soil temperature readings for optimal crop management decisions' },
    { icon: '☁️', name: 'Ambient Humidity', description: 'Real-time ambient humidity monitoring for disease prediction and crop advisory' },
    { icon: '🌤️', name: 'Ambient Temperature', description: 'Continuous ambient temperature tracking for comprehensive microclimate analysis' },
  ];

  features = [
    {
      icon: '☀️',
      title: 'Solar Powered',
      description: 'Completely self-sufficient with solar energy — no external power source needed, ideal for remote farm locations.'
    },
    {
      icon: '📡',
      title: 'IoT Connectivity',
      description: 'Wireless data transmission to the cloud, enabling real-time monitoring from anywhere in the world.'
    },
    {
      icon: '🔬',
      title: 'IIT Bombay FDR Probe',
      description: 'Advanced Frequency Domain Reflectometry probe engineered at IIT Bombay, field-validated for precision accuracy.'
    },
    {
      icon: '🧩',
      title: 'Modular & Customizable',
      description: 'Fully modular design with adjustable height and support for additional sensors as per client requirements.'
    },
    {
      icon: '📊',
      title: 'Flexible Data Recording',
      description: 'Custom data logging intervals and formats configured to meet specific customer requirements.'
    },
    {
      icon: '📱',
      title: 'Mobile Advisory',
      description: 'Farmers receive actionable crop advisories directly on their mobile phones for informed decisions in the field.'
    }
  ];

  farmerAdvisories = [
    { icon: '💧', question: 'When to irrigate?', description: 'Data-driven irrigation scheduling based on real-time soil moisture levels' },
    { icon: '📏', question: 'How much to irrigate?', description: 'Precise irrigation quantity recommendations to avoid over or under-watering' },
    { icon: '🦠', question: 'Disease occurrence alerts?', description: 'Early warnings about probable disease outbreaks based on environmental sensor data' },
  ];

  farmerBenefits = [
    { icon: '📈', title: 'Improve Yield', description: 'Optimize crop inputs with data-backed recommendations to maximize productivity.' },
    { icon: '💧', title: 'Save Water', description: 'Irrigate only when needed and in the right quantity — conserving precious water resources.' },
    { icon: '🛡️', title: 'Reduce Crop Loss', description: 'Early disease and pest alerts help farmers act before significant damage occurs.' },
    { icon: '💰', title: 'Better Profitability', description: 'Lower input costs and higher yields translate directly to improved farm profitability.' },
  ];
}
