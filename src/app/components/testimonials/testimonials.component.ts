import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: any;
  activeIndex = 0;
  private timer: any;

  // Client logos from our clients folder
  clients = [
    { name: 'Client 1', image: '/clients/Picture8.png' },
    { name: 'Client 2', image: '/clients/Picture9.png' },
    { name: 'Client 3', image: '/clients/Picture10.png' },
    { name: 'Client 4', image: '/clients/Picture11.png' },
    { name: 'Client 5', image: '/clients/Picture12.png' },
    { name: 'Client 6', image: '/clients/Picture13.png' },
    { name: 'Client 7', image: '/clients/Picture14.png' },
    { name: 'Client 8', image: '/clients/Picture15.png' },
    { name: 'Client 9', image: '/clients/Picture16.png' },
    { name: 'Client 10', image: '/clients/Picture17.png' },
    { name: 'Client 11', image: '/clients/Picture18.png' },
    { name: 'Client 12', image: '/clients/Picture19.png' },
    { name: 'Client 13', image: '/clients/Picture20.png' },
    { name: 'Client 14', image: '/clients/Picture21.png' },
    { name: 'Client 15', image: '/clients/Picture22.png' },
    { name: 'Client 16', image: '/clients/Picture23.png' },
    { name: 'Client 17', image: '/clients/Picture24.png' },
    { name: 'Client 18', image: '/clients/Picture25.png' },
    { name: 'Client 19', image: '/clients/Picture26.png' },
    { name: 'Client 20', image: '/clients/Picture27.png' },
    { name: 'Client 21', image: '/clients/Picture28.png' },
    { name: 'Client 22', image: '/clients/Picture29.png' },
    { name: 'Client 23', image: '/clients/Picture30.png' },
    { name: 'Client 24', image: '/clients/Picture31.png' },
    { name: 'Client 25', image: '/clients/Picture32.png' }
  ];

  // Incubation & Funding logos from incubation and funding folder
  incubators = [
    { name: 'Support 1', image: '/incubation/Picture33.png' },
    { name: 'Support 2', image: '/incubation/Picture34.png' },
    { name: 'Support 3', image: '/incubation/Picture35.png' },
    { name: 'Support 4', image: '/incubation/Picture36.png' },
    { name: 'Support 5', image: '/incubation/Picture37.png' },
    { name: 'Support 6', image: '/incubation/Picture38.png' },
    { name: 'Support 7', image: '/incubation/Picture39.png' },
    { name: 'Support 8', image: '/incubation/Picture40.jpg' },
    { name: 'Support 9', image: '/incubation/Picture41.png' },
    { name: 'Support 10', image: '/incubation/Picture42.png' },
    { name: 'Support 11', image: '/incubation/Picture43.png' }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.testimonials = this.dataService.testimonials;
    this.startAutoplay();
  }

  ngOnDestroy() { clearInterval(this.timer); }

  startAutoplay() { this.timer = setInterval(() => this.next(), 5000); }
  resetAutoplay() { clearInterval(this.timer); this.startAutoplay(); }

  next() { this.activeIndex = (this.activeIndex + 1) % this.testimonials().length; }
  prev() { this.activeIndex = (this.activeIndex - 1 + this.testimonials().length) % this.testimonials().length; this.resetAutoplay(); }
  goTo(i: number) { this.activeIndex = i; this.resetAutoplay(); }

  stars(n: number) { return Array(n).fill(0); }
}
