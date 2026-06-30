import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  services: any;

  serviceImages = {
    '1': '/Products/Nutrisensx.png',           // NutriSensXr / NutriSensX
    '2': '/Products/terra port.jpg',           // TerraPort
    '3': '/Products/terrastation.png',         // TerraStation
    '4': '/Products/terrastation lite.png',    // TerraStation Lite
    '5': '/Products/farmer app.jpg',           // SoilSens Farmer App
    '6': '/Products/agriwise app.jpg',         // SoilSens AgriWise App
    '7': '/Products/proximal central.png'      // Proximal Central
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.services = this.dataService.services;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll('.feat-card, .prod-item');
    elements.forEach(el => observer.observe(el));
  }

  getServiceImage(serviceId: string): string {
    return this.serviceImages[serviceId as keyof typeof this.serviceImages] || '';
  }
}

