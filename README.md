# SoilSens Website - Modern Angular 18+ Homepage

A stunning, production-ready corporate homepage built with Angular 18+, featuring modern design patterns, smooth animations, and dark mode support.

## 🚀 Features

### Design & UX
- ✨ **Ultra-modern, premium design** inspired by Apple, Stripe, and high-end agencies
- 🌓 **Dark/Light mode** with smooth transitions
- 📱 **Fully responsive** - mobile-first design
- 🎨 **Glassmorphism effects** and gradient overlays
- ⚡ **Smooth animations** - scroll-triggered, hover effects, and micro-interactions
- 🎯 **Accessibility-friendly** with ARIA labels and keyboard navigation

### Technical Stack
- **Angular 18+** with standalone components
- **Signals** for reactive state management
- **New control flow** (@if, @for syntax)
- **Tailwind CSS** for styling
- **TypeScript** with strict mode
- **Modern CSS** with custom properties and animations

### Sections Included
1. **Hero Section** - Cinematic intro with animated typing effect
2. **Navigation** - Sticky navbar with scroll effects and mobile menu
3. **Services** - Beautiful service cards with hover effects
4. **Portfolio** - Filterable project grid with categories
5. **Stats** - Animated counters with scroll trigger
6. **Testimonials** - Client reviews with ratings
7. **Contact** - Full contact form with validation
8. **Footer** - Rich footer with links and social media

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/           # Navigation component
│   │   ├── hero/             # Hero section with typing animation
│   │   ├── services/         # Services grid
│   │   ├── portfolio/        # Portfolio with filters
│   │   ├── stats/            # Animated statistics
│   │   ├── testimonials/     # Client testimonials
│   │   ├── contact/          # Contact form
│   │   └── footer/           # Footer component
│   ├── models/
│   │   └── company.model.ts  # TypeScript interfaces
│   ├── services/
│   │   ├── data.service.ts   # Company data (CUSTOMIZE THIS!)
│   │   └── theme.service.ts  # Dark mode management
│   ├── app.ts                # Main app component
│   ├── app.html              # App template
│   └── app.css               # App styles
├── styles.css                # Global styles with Tailwind
└── index.html                # HTML entry point
```

## 🎨 Customization Guide

### 1. Update Company Information

Edit `src/app/services/data.service.ts` to customize:

```typescript
// Company Info
companyInfo = signal<CompanyInfo>({
  name: 'Your Company Name',
  tagline: 'Your Tagline',
  description: 'Your description...',
  email: 'your@email.com',
  phone: '+1 (555) 123-4567',
  address: 'Your Address',
  social: {
    facebook: 'https://facebook.com/yourcompany',
    twitter: 'https://twitter.com/yourcompany',
    // ... more social links
  }
});

// Services - Add/edit your services
services = signal<Service[]>([
  {
    id: '1',
    title: 'Your Service',
    description: 'Service description...',
    icon: '🚀', // Use emoji or replace with icon component
    features: ['Feature 1', 'Feature 2', ...]
  },
  // ... more services
]);

// Portfolio Projects - Add your actual projects
projects = signal<Project[]>([
  {
    id: '1',
    title: 'Project Name',
    category: 'Category',
    description: 'Project description...',
    image: 'https://your-image-url.com/image.jpg',
    tags: ['Tech1', 'Tech2'],
    link: 'https://project-link.com'
  },
  // ... more projects
]);

// Stats - Update your statistics
stats = signal<Stat[]>([
  { id: '1', value: 500, label: 'Projects Completed', suffix: '+' },
  // ... more stats
]);

// Testimonials - Add client testimonials
testimonials = signal<Testimonial[]>([
  {
    id: '1',
    name: 'Client Name',
    position: 'Position',
    company: 'Company',
    content: 'Testimonial text...',
    avatar: 'https://avatar-url.com/avatar.jpg',
    rating: 5
  },
  // ... more testimonials
]);
```

### 2. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Change these to your brand colors
    500: '#22c55e',  // Main brand color
    600: '#16a34a',  // Darker shade
    // ... more shades
  }
}
```

### 3. Update Logo

Replace the logo in `src/app/components/navbar/navbar.component.html`:

```html
<!-- Current: Simple letter logo -->
<div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg">
  <span class="text-white font-bold text-xl">S</span>
</div>

<!-- Replace with: -->
<img src="assets/logo.png" alt="Company Logo" class="h-10">
```

### 4. Add Real Images

Replace placeholder images in:
- Portfolio projects (data.service.ts)
- Team members (data.service.ts)
- Add images to `public/` folder or use a CDN

### 5. Customize Animations

Edit animation speeds in `tailwind.config.js`:

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-out',  // Change duration
  'slide-up': 'slideUp 0.6s ease-out',
  // ... customize as needed
}
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Angular CLI 18+

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`

### Build for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 🎯 Key Features Explained

### Dark Mode
- Automatic detection of system preference
- Manual toggle with smooth transitions
- Persists user choice in localStorage
- Managed by `ThemeService`

### Smooth Scrolling
- CSS-based smooth scrolling
- Scroll-to-section navigation
- Sticky navbar with scroll effects

### Animated Counters
- Intersection Observer API
- Animates when scrolled into view
- Customizable duration and easing

### Portfolio Filtering
- Real-time category filtering
- Smooth transitions between states
- Maintains responsive grid layout

### Contact Form
- Form validation with Angular Forms
- Success/error states
- Ready to integrate with backend API

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with mobile-first design.

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus states for interactive elements
- Alt text for images
- Color contrast compliance

## 🚀 Performance Optimizations

- Lazy loading for images
- Standalone components (tree-shakeable)
- Signals for efficient reactivity
- CSS animations (GPU-accelerated)
- Minimal bundle size with Tailwind purging

## 🔧 Extending the Website

### Add a New Section

1. Generate component:
```bash
ng generate component components/about --standalone
```

2. Import in `app.ts`:
```typescript
import { AboutComponent } from './components/about/about.component';
```

3. Add to template in `app.html`:
```html
<app-about></app-about>
```

### Add Routing

1. Update `app.routes.ts`
2. Add router links in navigation
3. Use `<router-outlet>` (already included)

### Integrate Backend API

Update `contact.component.ts`:

```typescript
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) {}

onSubmit() {
  this.http.post('/api/contact', this.formData())
    .subscribe({
      next: () => this.submitSuccess.set(true),
      error: () => this.submitError.set(true)
    });
}
```

## 📦 Additional Libraries (Optional)

### GSAP for Advanced Animations
```bash
npm install gsap
```

### Lenis for Smooth Scrolling
```bash
npm install @studio-freight/lenis
```

### AOS (Animate On Scroll)
```bash
npm install aos
```

## 🎨 Design Resources

- **Fonts**: Inter (Google Fonts)
- **Icons**: Heroicons (inline SVG)
- **Images**: Unsplash (placeholders)
- **Colors**: Tailwind CSS palette

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues:
- Check the code comments
- Review Angular 18 documentation
- Customize the data.service.ts file with your content

## 🎉 Credits

Built with:
- Angular 18+
- Tailwind CSS
- TypeScript
- Modern CSS3

---

**Ready to customize?** Start by editing `src/app/services/data.service.ts` with your company information!
