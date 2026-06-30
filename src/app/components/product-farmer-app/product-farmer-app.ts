import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-farmer-app',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-farmer-app.html',
  styleUrl: './product-farmer-app.css',
})
export class ProductFarmerApp {
  acronym = [
    { letter: 'F', word: 'Farmer', desc: 'Built for every farmer — smallholder to large-scale.' },
    { letter: 'A', word: 'Accessible', desc: 'Simple, intuitive UI designed for rural users.' },
    { letter: 'R', word: 'Resource', desc: 'A central hub for all farm data and insights.' },
    { letter: 'M', word: 'Management', desc: 'Manage plots, crops, activities and logs seamlessly.' },
    { letter: 'E', word: 'Easy', desc: 'No technical expertise needed — anyone can use it.' },
    { letter: 'R', word: 'Recommendations', desc: 'AI-driven advisories for crop, water, and nutrient decisions.' },
  ];

  dataTypes = [
    { icon: '🌤️', label: 'Weather Forecast' },
    { icon: '🧪', label: 'Soil Nutrient Data' },
    { icon: '💧', label: 'Soil Moisture Data' },
    { icon: '🛰️', label: 'Satellite Data' },
    { icon: '🌾', label: 'Crop Data' },
    { icon: '🏡', label: 'Farm Data' },
  ];

  connectedDevices = [
    { name: 'MoistureSensGo', icon: '💧', desc: 'Smart moisture meter for controlled irrigation — plug in and get instant readings.' },
    { name: 'NutriSensX™', icon: '🧪', desc: 'Rapid soil testing device for quick soil health tests and balanced fertilizer recommendations.' },
  ];

  benefits = [
    { icon: '📱', title: 'One Platform', description: 'All farm data, advisories, and device data available in a single app.' },
    { icon: '📈', title: 'Monitor Crop Progress', description: 'Track growth stages, yield expectations, and historical performance.' },
    { icon: '📝', title: 'Log Activities', description: 'Record farming activities for future analysis and better planning.' },
    { icon: '👩‍🌾', title: 'Expert Connect', description: 'Farmers can connect with agronomists for personalized advisory sessions.' },
    { icon: '🌍', title: 'Cloud Storage', description: 'All data is securely saved to the cloud for long-term reference.' },
    { icon: '💼', title: 'Rural Employment', description: 'Empowers rural youth and SHGs to offer soil testing services to communities.' },
  ];
}
