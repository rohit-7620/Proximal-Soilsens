// Company Data Models - UPDATE THIS WITH YOUR PDF CONTENT

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Stat {
  id: string;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  email: string;
  phone: string;
  address: string;
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
}

// ============================================
// 📄 EXTRACT INFORMATION FROM YOUR PDF HERE
// ============================================
// Look at your soilsns website.pdf and fill in:
// - Company name, tagline, description
// - Services offered
// - Portfolio projects
// - Contact information
// - Team members
// - Statistics
// ============================================
