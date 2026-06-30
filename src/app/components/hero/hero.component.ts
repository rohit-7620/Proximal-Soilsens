import { Component, OnInit, AfterViewInit, PLATFORM_ID, inject, signal, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  companyInfo: any;
  isVideoPlaying = signal(true);
  scrollY = signal(0);

  @ViewChild('heroVideo') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;



  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.companyInfo = this.dataService.companyInfo;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initVideoObserver();
      this.initParticles();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollY.set(window.scrollY);
    }
  }

  private initParticles() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    let particles: any[] = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height;
      size = Math.random() * 2 + 1;
      speedX = Math.random() * 0.5 - 0.25;
      speedY = Math.random() * 0.5 - 0.25;

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = 'rgba(34, 197, 94, 0.3)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 60; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        for (let j = i; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };
    animate();
  }


  private initVideoObserver() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };


    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = this.videoElement.nativeElement;
        if (entry.isIntersecting) {
          video.play().catch(err => console.log('Autoplay blocked:', err));
          this.isVideoPlaying.set(true);
        } else {
          video.pause();
          this.isVideoPlaying.set(false);
        }
      });
    }, options);

    observer.observe(this.videoElement.nativeElement);
  }


  scrollTo(event: Event, id: string) {
    event.preventDefault();
    if (isPlatformBrowser(this.platformId)) {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleVideo() {
    const video = this.videoElement.nativeElement;
    if (this.isVideoPlaying()) {
      video.pause();
    } else {
      video.play();
    }
    this.isVideoPlaying.set(!this.isVideoPlaying());
  }
}
