import { Component, OnInit, signal, ElementRef, ViewChild, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  stats: any;
  animatedValues = signal<{ [key: string]: number }>({});
  hasAnimated = false;

  @ViewChild('statsSection', { static: false }) statsSection!: ElementRef;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.stats = this.dataService.stats;
    const initial: { [key: string]: number } = {};
    this.stats().forEach((s: any) => { initial[s.id] = 0; });
    this.animatedValues.set(initial);

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.setupObserver(), 150);
    }
  }

  setupObserver() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.stats().forEach((s: any) => this.animateValue(s.id, 0, s.value, 2000));
        }
      });
    }, { threshold: 0.4 });
    if (this.statsSection) observer.observe(this.statsSection.nativeElement);
  }

  animateValue(id: string, start: number, end: number, duration: number) {
    const startTime = performance.now();
    
    const easeOutExpo = (t: number) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const cur = Math.floor(easedProgress * (end - start) + start);
      
      this.animatedValues.update(v => ({ ...v, [id]: progress === 1 ? end : cur }));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }

}
