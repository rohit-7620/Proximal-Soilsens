import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-sm-sensor',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-sm-sensor.html',
  styleUrl: './product-sm-sensor.css',
})
export class ProductSmSensor {
  features = [
    { icon: '📡', title: 'Frequency Output', description: 'Gives frequency output that changes with soil moisture value — highly accurate and noise-resistant.' },
    { icon: '🌾', title: 'Any Crop Compatible', description: 'Works across all crop types including cereals, vegetables, fruits, and cash crops.' },
    { icon: '📏', title: 'Any Depth', description: 'Can be installed at multiple depths to understand the full soil moisture profile.' },
    { icon: '🌍', title: 'Any Field', description: 'Suitable for all soil types and field conditions — sandy, loamy, clayey, and more.' },
    { icon: '🔧', title: 'IoT Ready', description: 'Designed for seamless integration with custom IoT hardware and data loggers.' },
    { icon: '⚡', title: 'State-of-the-Art', description: 'Advanced sensor technology engineered for precision, durability, and long-term reliability.' },
  ];

  specs = [
    { label: 'Output Type', value: 'Frequency-based' },
    { label: 'Compatible Crops', value: 'All crop types' },
    { label: 'Installation Depth', value: 'Any depth' },
    { label: 'Soil Type', value: 'All types' },
    { label: 'Integration', value: 'Custom IoT hardware' },
    { label: 'Technology', value: 'State-of-the-art' },
  ];

  useCases = [
    { icon: '🏗️', title: 'Custom IoT Systems', description: 'Integrate into proprietary IoT hardware for precision agriculture monitoring solutions.' },
    { icon: '🔬', title: 'Research & Development', description: 'Perfect for agricultural R&D setups requiring precise, raw frequency-based moisture data.' },
    { icon: '🌱', title: 'Smart Irrigation', description: 'Drive automated irrigation controllers based on real-time soil moisture frequency output.' },
    { icon: '📊', title: 'Data Logging', description: 'Connect to data loggers for long-term soil moisture trend analysis across seasons.' },
  ];
}
