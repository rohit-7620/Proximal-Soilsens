import { Component, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-product-agriwise-app',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-agriwise-app.html',
  styleUrl: './product-agriwise-app.css',
})
export class ProductAgriWiseApp {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  scrollToTopOnNavigate(event: Event, route: string) {
    event.preventDefault();
    this.router.navigate([route]);
    if (isPlatformBrowser(this.platformId)) {
      // Delay to ensure navigation completes
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }

  acronym = [
    { letter: 'A', word: 'Agriculture', color: '#16a34a', desc: 'Represents the core focus — serving the agricultural industry and its professionals.' },
    { letter: 'G', word: 'Growth', color: '#15803d', desc: 'Fostering agricultural growth through valuable insights, tools, and resources to enhance productivity.' },
    { letter: 'R', word: 'Resourceful', color: '#166534', desc: 'A rich and resourceful platform built to serve agriculture professionals at every level.' },
    { letter: 'I', word: 'Innovation', color: '#14532d', desc: 'Commitment to innovation in agriculture with cutting-edge technologies and solutions.' },
    { letter: 'W', word: 'Wisdom', color: '#065f46', desc: 'A platform for sharing knowledge, expertise, and best practices among agricultural professionals.' },
    { letter: 'I', word: 'Insightful', color: '#047857', desc: 'Insightful data, analysis, and recommendations to help experts make informed decisions.' },
    { letter: 'S', word: 'Sustainability', color: '#059669', desc: 'Promoting sustainable agriculture with tools that support environmentally-friendly farming.' },
    { letter: 'E', word: 'Expertise', color: '#0d9488', desc: 'Built by experts and for experts — delivering precision tools for agriculture professionals.' },
  ];

  features = [
    { icon: '🔬', title: 'Advanced Analytics', description: 'Data-driven insights for agronomists to optimize recommendations at scale.' },
    { icon: '🗺️', title: 'Geo-mapping', description: 'Visualize field data on interactive maps for spatial crop and soil analysis.' },
    { icon: '🤝', title: 'Collaboration Hub', description: 'Connect professionals, share knowledge, and foster collective agricultural learning.' },
    { icon: '📋', title: 'Expert Advisory Tools', description: 'Generate professional multi-parameter advisory reports for farmer consultations.' },
    { icon: '📡', title: 'Device Integration', description: 'Seamlessly integrates with SoilSens® hardware for real-time field intelligence.' },
    { icon: '🌱', title: 'Sustainability Metrics', description: 'Track and report on sustainability KPIs for responsible agricultural management.' },
  ];
}
