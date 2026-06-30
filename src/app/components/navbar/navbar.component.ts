import { Component, HostListener, signal, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private platformId = inject(PLATFORM_ID);
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  isSolutionsDropdownOpen = signal(false);
  isProductsDropdownOpen = signal(false);
  isCompanyDropdownOpen = signal(false);

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  navLinks: { label: string; href: string }[] = [
  ];

  successRoute = '/success';

  solutionLinks = [
    { label: 'For Farmers', route: '/solutions/farmers' },
    { label: 'For Corporates', route: '/solutions/cooperatives' }
  ];

  productLinks = [
    { label: 'SoilSens® NutriSensX™', route: '/products/nutrisensx' },
    { label: 'SoilSens® TerraStation™', route: '/products/terrastation' },
    { label: 'SoilSens® TerraPort™', route: '/products/terraport' },
    { label: 'SoilSens® SM-Sensor', route: '/products/sm-sensor' },
    { label: 'SoilSens® Weather Station', route: '/products/weather-station' },
    { label: 'SoilSens® FARMER© App', route: '/products/farmer-app' },
    { label: 'SoilSens® AgriWise™ App', route: '/products/agriwise-app' },
    { label: 'Future Products', route: '/products/future-products' }
  ];

  companyLinks = [
    { label: 'About Us', route: '/company/about-us' },
    { label: 'Our Team', route: '/company/our-team' },
    { label: 'Research & Development', route: '/company/research-development' },
    { label: 'Gallery', route: '/company/gallery' },
    { label: 'Media', route: '/company/media' },
    { label: 'Download Brochure', route: '/company/brochure' },
    { label: 'Contact', route: '/company/contact' }
  ];

  constructor(public themeService: ThemeService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 50);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdown = target.closest('.nav-dropdown');
    
    // Close dropdown if clicking outside
    if (!dropdown && (this.isSolutionsDropdownOpen() || this.isProductsDropdownOpen() || this.isCompanyDropdownOpen())) {
      this.closeSolutionsDropdown();
      this.closeProductsDropdown();
      this.closeCompanyDropdown();
    }
  }

  toggleMobileMenu() { this.isMobileMenuOpen.update(v => !v); }
  closeMobileMenu() { 
    this.isMobileMenuOpen.set(false);
    this.isSolutionsDropdownOpen.set(false);
    this.isProductsDropdownOpen.set(false);
    this.isCompanyDropdownOpen.set(false);
  }

  toggleSolutionsDropdown() {
    this.isSolutionsDropdownOpen.update(v => !v);
    this.isProductsDropdownOpen.set(false);
    this.isCompanyDropdownOpen.set(false);
  }

  closeSolutionsDropdown() {
    this.isSolutionsDropdownOpen.set(false);
  }

  toggleProductsDropdown() {
    this.isProductsDropdownOpen.update(v => !v);
    this.isSolutionsDropdownOpen.set(false);
    this.isCompanyDropdownOpen.set(false);
  }

  closeProductsDropdown() {
    this.isProductsDropdownOpen.set(false);
  }

  toggleCompanyDropdown() {
    this.isCompanyDropdownOpen.update(v => !v);
    this.isSolutionsDropdownOpen.set(false);
    this.isProductsDropdownOpen.set(false);
  }

  closeCompanyDropdown() {
    this.isCompanyDropdownOpen.set(false);
  }

  private router = inject(Router);

  scrollToSection(event: Event, href: string) {
    event.preventDefault();
    const id = href.replace('#', '');
    
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        this.router.navigate(['/'], { fragment: id });
      }
    }
    this.closeMobileMenu();
  }

  navigateSolution(route: string) {
    this.router.navigate([route]);
    this.closeMobileMenu();
    this.closeSolutionsDropdown();
    if (isPlatformBrowser(this.platformId)) {
      // Slight delay to ensure route navigation completes first
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }

  navigateProduct(route: string) {
    this.router.navigate([route]);
    this.closeMobileMenu();
    this.closeProductsDropdown();
    if (isPlatformBrowser(this.platformId)) {
      // Slight delay to ensure route navigation completes first
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }

  navigateCompany(route: string) {
    this.router.navigate([route]);
    this.closeMobileMenu();
    this.closeCompanyDropdown();
    if (isPlatformBrowser(this.platformId)) {
      // Slight delay to ensure route navigation completes first
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }

  navigateToDemo() {
    this.closeMobileMenu();
    this.router.navigate(['/request-demo']);
    if (isPlatformBrowser(this.platformId)) {
      // Slight delay to ensure route navigation completes first
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }
}
