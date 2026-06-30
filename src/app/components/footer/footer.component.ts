import { Component, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  companyInfo: any;
  currentYear = new Date().getFullYear();

  // Newsletter subscription state
  subscriberEmail = signal('');
  isSubscribing = signal(false);
  subscribeSuccess = signal(false);
  subscribeError = signal(false);

  // Google Sheets URL is loaded from environment (never hardcoded)
  private readonly GOOGLE_SHEET_URL = environment.googleSheetUrl;

  quickLinks = [
    { label: 'Solutions', route: '/solutions/farmers' },
    { label: 'Products', route: '/products/nutrisensx' },
    { label: 'Success', route: '/success' },
    { label: 'Partners', route: '/partners' },
    { label: 'Company', route: '/company/about-us' },
    { label: 'FAQ', route: '/faq' }
  ];

  legalLinks = [
    { label: 'Terms', href: '#' },
    { label: 'Privacy Policy', href: '#' }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() { this.companyInfo = this.dataService.companyInfo; }

  scrollToSection(event: Event, href: string) {
    event.preventDefault();
    if (isPlatformBrowser(this.platformId)) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  async onSubscribe() {
    const email = this.subscriberEmail().trim();
    
    // Basic email validation
    if (!email || !this.isValidEmail(email)) {
      this.subscribeError.set(true);
      setTimeout(() => this.subscribeError.set(false), 3000);
      return;
    }

    this.isSubscribing.set(true);
    this.subscribeError.set(false);
    this.subscribeSuccess.set(false);

    try {
      const response = await fetch(this.GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          type: 'newsletter',
          email: email,
          message: 'Subscribed to newsletter',
          timestamp: new Date().toISOString()
        })
      });

      this.isSubscribing.set(false);
      this.subscribeSuccess.set(true);
      this.subscriberEmail.set('');
      
      // Reset success message after 5 seconds
      setTimeout(() => this.subscribeSuccess.set(false), 5000);
    } catch (error) {
      console.error('Error subscribing:', error);
      this.isSubscribing.set(false);
      this.subscribeError.set(true);
      setTimeout(() => this.subscribeError.set(false), 3000);
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
