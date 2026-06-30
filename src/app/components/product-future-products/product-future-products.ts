import { Component, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-product-future-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-future-products.html',
  styleUrl: './product-future-products.css',
})
export class ProductFutureProducts {
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

  pipeline = [
    {
      icon: '🟢',
      name: 'Portable Chlorophyll Meter',
      description: 'Non-destructive, instant measurement of leaf chlorophyll content to assess crop nitrogen status and health.',
      tags: ['Crop Health', 'Non-destructive', 'Portable'],
    },
    {
      icon: '🧪',
      name: 'Portable pH Meter',
      description: 'Quick and accurate soil pH measurement in the field without sending samples to laboratories.',
      tags: ['Soil Health', 'Field-ready', 'Instant Results'],
    },
    {
      icon: '⚗️',
      name: 'Portable NPK Meter',
      description: 'On-site Nitrogen, Phosphorus, and Potassium measurement for balanced fertilizer decisions.',
      tags: ['NPK', 'Fertilizer Advisory', 'Portable'],
    },
    {
      icon: '📡',
      name: 'Portable TDR Soil Moisture Meter',
      description: 'Time Domain Reflectometry-based portable device for high-accuracy soil moisture profiling anywhere in the field.',
      tags: ['TDR', 'High Accuracy', 'Moisture Profiling'],
    },
  ];
}
