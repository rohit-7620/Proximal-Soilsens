import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';

import { ServicesComponent } from '../services/services.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { StatsComponent } from '../stats/stats.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutVmgComponent } from '../about-vmg/about-vmg.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    StatsComponent,
    TestimonialsComponent,
    ContactComponent,
    AboutVmgComponent
  ],
  template: `
    <app-hero class="animate-fade-in" style="display:block"></app-hero>
    <app-services class="animate-slide-up" style="animation-delay: 0.2s; display:block"></app-services>
    <app-portfolio class="animate-slide-up" style="animation-delay: 0.4s; display:block"></app-portfolio>
    <app-stats class="animate-slide-up" style="animation-delay: 0.6s; display:block"></app-stats>
    <app-testimonials class="animate-slide-up" style="animation-delay: 0.8s; display:block"></app-testimonials>
    <app-contact class="animate-fade-in" style="animation-delay: 1.0s; display:block"></app-contact>
    <app-about-vmg class="animate-slide-up" style="animation-delay: 1.2s; display:block"></app-about-vmg>
  `
})
export class HomeComponent {}
