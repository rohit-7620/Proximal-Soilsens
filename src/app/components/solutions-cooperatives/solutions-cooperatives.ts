import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-solutions-cooperatives',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './solutions-cooperatives.html',
  styleUrl: './solutions-cooperatives.css',
})
export class SolutionsCooperatives {
  private router = inject(Router);

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToDemo() {
    this.router.navigate(['/request-demo']);
    this.scrollToTop();
  }
  features: Array<{
    title: string;
    icon: string;
    description: string;
    benefits?: string[];
    subFeatures?: Array<{ title: string; description: string }>;
  }> = [
    {
      title: 'Trusted On-the-Ground Technologies',
      icon: '🔬',
      description: 'Devices like NutriSensX™, TerraPort™, and TerraStation™ are field-tested, easy to use, and deliver accurate data farmers can act on immediately.',
      benefits: [
        'Field-tested and reliable devices',
        'Easy to use for all farmer levels',
        'Immediate actionable data',
        'Proven accuracy and durability'
      ]
    },
    {
      title: 'Seamless API Integration',
      icon: '🔗',
      description: 'Our systems come with robust APIs, allowing you to integrate soil, water, and crop health data directly into your own dashboards and analytics platforms—enabling real-time visibility across regions.',
      benefits: [
        'Direct integration with your systems',
        'Real-time data synchronization',
        'Regional visibility and monitoring',
        'Custom dashboard compatibility'
      ]
    },
    {
      title: 'Customization and Co-Branding',
      icon: '🎨',
      description: 'We support custom workflows and can tailor our technology to align with your operational model, whether for in-house farms, contracted farmers, or CSR initiatives.',
      benefits: [
        'Custom workflows for your needs',
        'White-label and co-branding options',
        'Flexible deployment models',
        'Tailored for CSR programs'
      ]
    },
    {
      title: 'Data-Driven Decision Support',
      icon: '📊',
      description: 'Use our insights to optimize input use, plan interventions, and meet traceability, compliance, or sustainability goals with confidence.',
      benefits: [
        'Optimize fertilizer and water use',
        'Plan timely interventions',
        'Meet sustainability goals',
        'Compliance and traceability support'
      ]
    },
    {
      title: 'Accurate Weather and Field Data',
      icon: '🌤️',
      description: 'Most corporates need field-specific data to run their analytics and manage farms effectively. Unfortunately, due to lack of in-field sensors, they lack data. SoilSens technologies can bridge that gap by bringing in field-specific data at an affordable price.',
      benefits: [
        'Hyperlocal weather forecasting',
        'In-field sensor deployment',
        'Close data gaps affordably',
        'Real-time farm activity tracking'
      ]
    },
    {
      title: 'Corporate CSR Initiatives',
      icon: '🤝',
      description: 'Many corporates are working with FPOs and NGOs to help farmers. We would like to bridge that gap by partnering with these NGOs to spread awareness about technologies and help farmers procure the technologies.',
      benefits: [
        'Partner with FPOs and NGOs',
        'Technology awareness programs',
        'Farmer procurement support',
        'Measurable CSR impact'
      ]
    }
  ];

  benefits = [
    {
      title: 'Scalable & Cost-Effective',
      description: 'Deploy proven agricultural technologies across multiple farms and regions at scale.',
      icon: '📈'
    },
    {
      title: 'Reliable & Measurable',
      description: 'Track impact with accurate, real-time data from field-tested devices.',
      icon: '✅'
    },
    {
      title: 'Tailored to Your Needs',
      description: 'Customize workflows, branding, and integrations to fit your operational model.',
      icon: '🎯'
    },
    {
      title: 'Partnership Focused',
      description: 'We partner with you to deliver measurable impact, whether for own farms, CSR, or client networks.',
      icon: '🤝'
    }
  ];

  visionMissionGoals = {
    vision: {
      icon: '👁️',
      title: 'Vision',
      description: 'Enable agri-corporates to scale sustainable, data-driven operations across their farms and networks, delivering competitive advantage through precision agriculture.'
    },
    mission: {
      icon: '🚀',
      title: 'Mission',
      description: 'Partner with corporates to deploy scalable, cost-effective agricultural technologies that ensure traceability, sustainability, and measurable impact across supply chains.'
    },
    goals: {
      icon: '🎯',
      title: 'Goals',
      description: 'Support 500+ corporate farm networks globally, enable sustainable certification and compliance, reduce operational costs by 25%, and create traceable, high-quality supply chains backed by real-time farm data.'
    }
  };
}
