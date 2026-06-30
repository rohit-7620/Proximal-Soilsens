import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  isDarkMode = signal<boolean>(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.set(savedTheme === 'dark' || (!savedTheme && prefersDark));
      effect(() => { this.applyTheme(this.isDarkMode()); });
    }
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
    if (isPlatformBrowser(this.platformId)) {
      this.applyTheme(this.isDarkMode());
    }
  }

  private applyTheme(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
