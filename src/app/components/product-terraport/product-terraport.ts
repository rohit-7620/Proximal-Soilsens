import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-terraport',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-terraport.html',
  styleUrl: './product-terraport.css',
})
export class ProductTerraport {
  challenges = [
    'Stationary point sensors measure moisture at a single spot only',
    'Fixed systems offer lateral coverage of only 20–50 cm',
    'Cannot reflect field-wide moisture variation across plots',
    'Traditional devices are expensive and not shareable across farmers',
    'No easy way to create multi-depth or multi-location moisture profiles',
    'Lack of cloud connectivity limits long-term monitoring and planning',
  ];

  capabilities = [
    { icon: '📍', title: 'Multi-Location Measurement', description: 'Measure soil moisture at multiple locations across the whole field — not just one fixed point.' },
    { icon: '📏', title: 'Multi-Depth Profiling', description: 'Take readings at multiple depths to understand how moisture is distributed through the soil profile.' },
    { icon: '🔌', title: 'Plug & Play Sensors', description: 'Modular design supports additional plug-and-play sensors for extended parameter coverage as needed.' },
    { icon: '☁️', title: 'Cloud Data Sync', description: 'Collected data is seamlessly saved to the cloud, enabling long-term monitoring and improved planning.' },
    { icon: '🤝', title: 'Shareable Across Farms', description: 'Cost-effective and portable — one device can be shared across multiple plots or by multiple farmers in a community.' },
    { icon: '🗺️', title: 'Field Moisture Mapping', description: 'Creates a comprehensive moisture profile across the field for accurate, data-driven irrigation decisions.' },
  ];

  benefits = [
    { icon: '💧', title: 'Prevent Over-Irrigation', description: 'Precise moisture insights help farmers stop wasteful over-watering with confidence.' },
    { icon: '🌱', title: 'Sustainable Water Use', description: 'Reduces groundwater depletion and supports long-term sustainable water management.' },
    { icon: '📈', title: 'Enhance Productivity', description: 'Right water at the right time and place directly translates to better crop yields.' },
    { icon: '🌍', title: 'Conserve Resources', description: 'Smarter irrigation conserves precious natural resources for future generations.' },
  ];

  specs = [
    { label: 'Type', value: 'Portable Soil Moisture Meter' },
    { label: 'Status', value: 'Patent Pending' },
    { label: 'Sensors', value: '4+ (Plug & Play)' },
    { label: 'Data Storage', value: 'Cloud Enabled' },
    { label: 'Portability', value: 'Compact & Lightweight' },
    { label: 'Use Case', value: 'Multi-depth & Multi-location' },
  ];
}
