# 📂 Project Structure

## Complete File Organization

```
soilsns-website/
│
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 components/
│   │   │   ├── 📁 navbar/
│   │   │   │   ├── navbar.component.ts       # Navigation with scroll effects
│   │   │   │   ├── navbar.component.html     # Navbar template
│   │   │   │   └── navbar.component.css      # Navbar styles
│   │   │   │
│   │   │   ├── 📁 hero/
│   │   │   │   ├── hero.component.ts         # Hero with typing animation
│   │   │   │   ├── hero.component.html       # Hero template
│   │   │   │   └── hero.component.css        # Hero styles
│   │   │   │
│   │   │   ├── 📁 services/
│   │   │   │   ├── services.component.ts     # Services grid
│   │   │   │   ├── services.component.html   # Services template
│   │   │   │   └── services.component.css    # Services styles
│   │   │   │
│   │   │   ├── 📁 portfolio/
│   │   │   │   ├── portfolio.component.ts    # Portfolio with filters
│   │   │   │   ├── portfolio.component.html  # Portfolio template
│   │   │   │   └── portfolio.component.css   # Portfolio styles
│   │   │   │
│   │   │   ├── 📁 stats/
│   │   │   │   ├── stats.component.ts        # Animated counters
│   │   │   │   ├── stats.component.html      # Stats template
│   │   │   │   └── stats.component.css       # Stats styles
│   │   │   │
│   │   │   ├── 📁 testimonials/
│   │   │   │   ├── testimonials.component.ts # Client testimonials
│   │   │   │   ├── testimonials.component.html
│   │   │   │   └── testimonials.component.css
│   │   │   │
│   │   │   ├── 📁 contact/
│   │   │   │   ├── contact.component.ts      # Contact form
│   │   │   │   ├── contact.component.html    # Contact template
│   │   │   │   └── contact.component.css     # Contact styles
│   │   │   │
│   │   │   └── 📁 footer/
│   │   │       ├── footer.component.ts       # Footer component
│   │   │       ├── footer.component.html     # Footer template
│   │   │       └── footer.component.css      # Footer styles
│   │   │
│   │   ├── 📁 models/
│   │   │   └── company.model.ts              # TypeScript interfaces
│   │   │
│   │   ├── 📁 services/
│   │   │   ├── data.service.ts               # ⭐ MAIN DATA FILE (customize this!)
│   │   │   └── theme.service.ts              # Dark mode service
│   │   │
│   │   ├── app.ts                            # Main app component
│   │   ├── app.html                          # App template
│   │   ├── app.css                           # App styles
│   │   ├── app.config.ts                     # App configuration
│   │   └── app.routes.ts                     # Routing configuration
│   │
│   ├── index.html                            # HTML entry point
│   ├── styles.css                            # ⭐ Global styles with Tailwind
│   └── main.ts                               # Bootstrap file
│
├── 📁 public/                                # Static assets
│   └── favicon.ico                           # Favicon
│
├── tailwind.config.js                        # ⭐ Tailwind configuration
├── tsconfig.json                             # TypeScript config
├── angular.json                              # Angular CLI config
├── package.json                              # Dependencies
│
├── README.md                                 # Main documentation
├── CUSTOMIZATION_GUIDE.md                    # Step-by-step guide
└── PROJECT_STRUCTURE.md                      # This file
```

## 🎯 Key Files to Customize

### 1. **data.service.ts** (MOST IMPORTANT)
**Location:** `src/app/services/data.service.ts`

Contains ALL your content:
- Company information
- Services
- Portfolio projects
- Statistics
- Testimonials
- Team members

**Action:** Update with your actual data

### 2. **tailwind.config.js**
**Location:** `tailwind.config.js`

Contains:
- Brand colors
- Custom animations
- Font configuration
- Theme extensions

**Action:** Change colors to match your brand

### 3. **styles.css**
**Location:** `src/styles.css`

Contains:
- Global styles
- Tailwind imports
- Custom CSS classes
- Utility classes

**Action:** Add custom global styles if needed

### 4. **index.html**
**Location:** `src/index.html`

Contains:
- Page title
- Meta tags
- Font imports
- SEO tags

**Action:** Update title and meta descriptions

## 📦 Component Breakdown

### Navbar Component
**Purpose:** Sticky navigation with scroll effects
**Features:**
- Transparent → solid on scroll
- Mobile hamburger menu
- Dark mode toggle
- Smooth scroll to sections

### Hero Component
**Purpose:** Landing section with impact
**Features:**
- Animated typing effect
- Gradient background
- CTA buttons
- Stats preview

### Services Component
**Purpose:** Display service offerings
**Features:**
- Grid layout
- Hover effects
- Icon support
- Feature lists

### Portfolio Component
**Purpose:** Showcase projects
**Features:**
- Category filtering
- Image galleries
- Hover overlays
- Tag system

### Stats Component
**Purpose:** Display achievements
**Features:**
- Animated counters
- Scroll-triggered animation
- Gradient background
- Responsive grid

### Testimonials Component
**Purpose:** Show client reviews
**Features:**
- Star ratings
- Client avatars
- Company logos
- Responsive cards

### Contact Component
**Purpose:** Contact form
**Features:**
- Form validation
- Success/error states
- Contact information
- Social links

### Footer Component
**Purpose:** Site footer
**Features:**
- Multi-column layout
- Quick links
- Social media icons
- Copyright info

## 🔧 Services Explained

### DataService
**File:** `src/app/services/data.service.ts`

**Purpose:** Central data management
**Uses:** Angular Signals for reactivity
**Methods:**
- `getCompanyInfo()` - Get company details
- `getServices()` - Get all services
- `getProjects()` - Get portfolio projects
- `getProjectsByCategory()` - Filter projects
- `getStats()` - Get statistics
- `getTestimonials()` - Get testimonials
- `getTeam()` - Get team members

### ThemeService
**File:** `src/app/services/theme.service.ts`

**Purpose:** Dark/light mode management
**Features:**
- System preference detection
- LocalStorage persistence
- Smooth transitions
**Methods:**
- `toggleTheme()` - Switch themes
- `isDarkMode` - Current theme signal

## 🎨 Styling Architecture

### Tailwind CSS
- Utility-first approach
- Custom color palette
- Responsive breakpoints
- Dark mode support

### Custom CSS
- Global animations
- Component-specific styles
- Utility classes
- Smooth transitions

### CSS Variables
Used for:
- Theme colors
- Spacing
- Transitions
- Breakpoints

## 📱 Responsive Design

### Breakpoints
```css
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Mobile-First Approach
All components start with mobile layout and scale up.

## 🚀 Build Process

### Development
```bash
ng serve
```
- Hot reload
- Source maps
- Development mode

### Production
```bash
ng build --configuration production
```
- Minification
- Tree shaking
- Optimization
- AOT compilation

## 📊 File Sizes (Approximate)

```
Component Files:
- navbar.component.ts: ~1.5 KB
- hero.component.ts: ~2 KB
- services.component.ts: ~1 KB
- portfolio.component.ts: ~1.5 KB
- stats.component.ts: ~2 KB
- testimonials.component.ts: ~1 KB
- contact.component.ts: ~1.5 KB
- footer.component.ts: ~1.5 KB

Service Files:
- data.service.ts: ~8 KB (your content)
- theme.service.ts: ~1 KB

Total Component Code: ~20 KB
```

## 🔄 Data Flow

```
User Interaction
      ↓
  Component
      ↓
   Service (Signals)
      ↓
  Template Update
      ↓
   DOM Render
```

## 🎯 Next Steps

1. ✅ Customize `data.service.ts`
2. ✅ Update colors in `tailwind.config.js`
3. ✅ Add your logo
4. ✅ Update meta tags
5. ✅ Add real images
6. ✅ Test responsiveness
7. ✅ Build for production
8. ✅ Deploy

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Accessibility](https://www.w3.org/WAI/)

---

**Happy Coding!** 🚀
