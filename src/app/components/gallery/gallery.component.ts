import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  description?: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  @ViewChild('lightboxModal') lightboxModal!: ElementRef;
  
  selectedImage: GalleryImage | null = null;
  currentFilter = 'all';
  
  galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: '/img/soilsens/IITB.jpeg',
      alt: 'IIT Bombay Campus',
      title: 'IIT Bombay',
      category: 'academic',
      description: 'Our roots at IIT Bombay - where innovation begins'
    },
    {
      id: 2,
      src: '/img/soilsens/President of INDIA and ISRAEL.jpg',
      alt: 'Meeting with President of India and Israel',
      title: 'Presidential Meeting',
      category: 'dignitaries',
      description: 'Historic meeting with Presidents of India and Israel'
    },
    {
      id: 3,
      src: '/img/soilsens/Principal Scientific Advisor of PM Modi DR Chidambaram.jpg',
      alt: 'With Principal Scientific Advisor Dr Chidambaram',
      title: 'Dr. Chidambaram Meeting',
      category: 'dignitaries',
      description: 'Meeting with Principal Scientific Advisor to PM Modi'
    },
    {
      id: 4,
      src: '/img/soilsens/US vice president Joe Biden.jpg',
      alt: 'Meeting with US Vice President Joe Biden',
      title: 'Joe Biden Meeting',
      category: 'dignitaries',
      description: 'International collaboration with US Vice President Joe Biden'
    },
    {
      id: 5,
      src: '/img/soilsens/With_Manohar_parikar.jpeg',
      alt: 'With Manohar Parrikar',
      title: 'Manohar Parrikar',
      category: 'dignitaries',
      description: 'Meeting with former Defence Minister Manohar Parrikar'
    },
    {
      id: 6,
      src: '/img/soilsens/With_Nitin_Gadkari.jpeg',
      alt: 'With Nitin Gadkari',
      title: 'Nitin Gadkari',
      category: 'dignitaries',
      description: 'Discussion with Union Minister Nitin Gadkari'
    },
    {
      id: 7,
      src: '/img/soilsens/With_PRAKASH_JAVADEKAR.jpeg',
      alt: 'With Prakash Javadekar',
      title: 'Prakash Javadekar',
      category: 'dignitaries',
      description: 'Meeting with former Union Minister Prakash Javadekar'
    },
    {
      id: 8,
      src: '/img/soilsens/With_Romesh wadhwani.jpeg',
      alt: 'With Romesh Wadhwani',
      title: 'Romesh Wadhwani',
      category: 'business',
      description: 'Strategic discussion with entrepreneur Romesh Wadhwani'
    },
    {
      id: 9,
      src: '/img/soilsens/DELHI_IARI_GREENHOUSE.jpg',
      alt: 'IARI Delhi Greenhouse',
      title: 'IARI Greenhouse',
      category: 'research',
      description: 'Research facility at Indian Agricultural Research Institute, Delhi'
    },
    {
      id: 10,
      src: '/img/soilsens/Delhi_iari.jpeg',
      alt: 'IARI Delhi Campus',
      title: 'IARI Delhi',
      category: 'research',
      description: 'Collaboration at IARI Delhi campus'
    },
    {
      id: 11,
      src: '/img/soilsens/kamshet green house.jpeg',
      alt: 'Kamshet Greenhouse',
      title: 'Kamshet Greenhouse',
      category: 'farms',
      description: 'Modern greenhouse facility in Kamshet'
    },
    {
      id: 12,
      src: '/img/soilsens/kamshet green house1.jpeg',
      alt: 'Kamshet Greenhouse Interior',
      title: 'Kamshet Facility',
      category: 'farms',
      description: 'Advanced agricultural setup in Kamshet'
    },
    {
      id: 13,
      src: '/img/soilsens/Soilsens_Team_Shirdi_Farm.jpg',
      alt: 'SoilSens Team at Shirdi Farm',
      title: 'Shirdi Farm Visit',
      category: 'farms',
      description: 'Our team conducting field research at Shirdi'
    },
    {
      id: 14,
      src: '/img/soilsens/Sula Vineyards.jpg',
      alt: 'Sula Vineyards Project',
      title: 'Sula Vineyards',
      category: 'farms',
      description: 'Precision agriculture at Sula Vineyards'
    },
    {
      id: 15,
      src: '/img/soilsens/Mahindra Wafgaon1.jpg',
      alt: 'Mahindra Wafgaon Farm',
      title: 'Mahindra Wafgaon',
      category: 'farms',
      description: 'Partnership project at Mahindra Wafgaon'
    },
    {
      id: 16,
      src: '/img/soilsens/MAHINDRA_Wafgaon.jpg',
      alt: 'Mahindra Wafgaon Facility',
      title: 'Mahindra Partnership',
      category: 'farms',
      description: 'Technology deployment at Mahindra facility'
    },
    {
      id: 17,
      src: '/img/soilsens/Go4Fresh_Nashik.jpg',
      alt: 'Go4Fresh Nashik Project',
      title: 'Go4Fresh Nashik',
      category: 'farms',
      description: 'Fresh produce monitoring in Nashik'
    },
    {
      id: 18,
      src: '/img/soilsens/Coromandel_Hyderabad.jpg',
      alt: 'Coromandel Hyderabad',
      title: 'Coromandel Partnership',
      category: 'business',
      description: 'Strategic partnership with Coromandel, Hyderabad'
    },
    {
      id: 19,
      src: '/img/soilsens/CII_AGROTECH_CHANDIGARH.jpeg',
      alt: 'CII Agrotech Chandigarh',
      title: 'CII Agrotech Event',
      category: 'events',
      description: 'Showcasing technology at CII Agrotech, Chandigarh'
    },
    {
      id: 20,
      src: '/img/soilsens/CII_AGROTECH_CHANDIGARH_1.jpeg',
      alt: 'CII Agrotech Exhibition',
      title: 'CII Exhibition',
      category: 'events',
      description: 'Product demonstration at CII Agrotech'
    },
    {
      id: 21,
      src: '/img/soilsens/ESSAR_AGROTECH_LONAVALA.jpeg',
      alt: 'Essar Agrotech Lonavala',
      title: 'Essar Agrotech',
      category: 'events',
      description: 'Technology showcase at Essar Agrotech, Lonavala'
    },
    {
      id: 22,
      src: '/img/soilsens/Global_Business_Forum_Goa.jpeg',
      alt: 'Global Business Forum Goa',
      title: 'Global Business Forum',
      category: 'events',
      description: 'International business forum in Goa'
    },
    {
      id: 23,
      src: '/img/soilsens/KISAN_MELA_PUNE.jpg',
      alt: 'Kisan Mela Pune',
      title: 'Kisan Mela',
      category: 'events',
      description: 'Farmer outreach program in Pune'
    },
    {
      id: 24,
      src: '/img/soilsens/TEHCFEST_IITBOMBAY.jpg',
      alt: 'Techfest IIT Bombay',
      title: 'Techfest IIT Bombay',
      category: 'events',
      description: 'Innovation showcase at IIT Bombay Techfest'
    },
    {
      id: 25,
      src: '/img/soilsens/IMG_20180904_113728.jpg',
      alt: 'Field Research 2018',
      title: 'Field Research',
      category: 'research',
      description: 'On-field research and data collection'
    },
    {
      id: 26,
      src: '/img/soilsens/IMG_20190301_135308.jpg',
      alt: 'Team Work 2019',
      title: 'Team Collaboration',
      category: 'research',
      description: 'Collaborative research and development'
    }
  ];

  filteredImages: GalleryImage[] = [];
  categories = [
    { key: 'all', label: 'All Images', count: 0 },
    { key: 'dignitaries', label: 'Dignitaries', count: 0 },
    { key: 'farms', label: 'Farms & Fields', count: 0 },
    { key: 'events', label: 'Events', count: 0 },
    { key: 'research', label: 'Research', count: 0 },
    { key: 'business', label: 'Business', count: 0 },
    { key: 'academic', label: 'Academic', count: 0 }
  ];

  ngOnInit() {
    this.updateCategoryCounts();
    this.filterImages('all');
  }

  ngAfterViewInit() {
    // Add scroll reveal animations
    this.addScrollRevealAnimations();
  }

  updateCategoryCounts() {
    this.categories.forEach(category => {
      if (category.key === 'all') {
        category.count = this.galleryImages.length;
      } else {
        category.count = this.galleryImages.filter(img => img.category === category.key).length;
      }
    });
  }

  filterImages(category: string) {
    this.currentFilter = category;
    if (category === 'all') {
      this.filteredImages = [...this.galleryImages];
    } else {
      this.filteredImages = this.galleryImages.filter(img => img.category === category);
    }
  }

  openLightbox(image: GalleryImage) {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }

  nextImage() {
    if (!this.selectedImage) return;
    const currentIndex = this.filteredImages.findIndex(img => img.id === this.selectedImage!.id);
    const nextIndex = (currentIndex + 1) % this.filteredImages.length;
    this.selectedImage = this.filteredImages[nextIndex];
  }

  prevImage() {
    if (!this.selectedImage) return;
    const currentIndex = this.filteredImages.findIndex(img => img.id === this.selectedImage!.id);
    const prevIndex = (currentIndex - 1 + this.filteredImages.length) % this.filteredImages.length;
    this.selectedImage = this.filteredImages[prevIndex];
  }

  addScrollRevealAnimations() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      const galleryItems = document.querySelectorAll('.gallery-item');
      galleryItems.forEach(item => {
        item.classList.add('reveal-init');
        observer.observe(item);
      });
    }, 100);
  }

  getCategoryLabel(key: string): string {
    const category = this.categories.find(cat => cat.key === key);
    return category ? category.label : key;
  }
}
