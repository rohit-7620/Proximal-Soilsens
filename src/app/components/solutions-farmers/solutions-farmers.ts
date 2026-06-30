import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-solutions-farmers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './solutions-farmers.html',
  styleUrl: './solutions-farmers.css',
})
export class SolutionsFarmers {
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
    benefits: string[];
    subFeatures?: Array<{ title: string; description: string }>;
  }> = [
    {
      title: 'Advanced Soil Testing at Your Farm',
      icon: '🔬',
      description: 'With NutriSensX™ – Lab-on-the-Farm, perform rapid soil analysis anytime, anywhere, and get precise recommendations to optimize fertilizer use and crop performance.',
      benefits: [
        'Instant N, P, K & micronutrient analysis',
        'Real-time fertilizer recommendations',
        'No waiting for lab reports',
        'Reduce input costs by up to 40%'
      ]
    },
    {
      title: 'Smart Irrigation Advisory',
      icon: '💧',
      description: 'Leverage TerraPort™ and TerraStation™ to monitor real-time soil moisture, soil temperature, ambient humidity and ambient temperature and receive irrigation advisories based on actual field conditions and crop stages – saving water and energy.',
      benefits: [
        'Real-time soil moisture monitoring',
        'Multi-depth temperature tracking',
        'Irrigation scheduling based on actual field data',
        'Save up to 27% water and energy'
      ],
      subFeatures: [
        {
          title: 'Weather Forecast Alerts',
          description: 'Stay ahead with hyperlocal weather forecasts, rainfall predictions, and alerts that help you plan irrigation, pest control, and harvesting with confidence.'
        }
      ]
    },
    {
      title: 'Digital Farm Management Tools',
      icon: '📱',
      description: 'Maintain farm records, track inputs and expenses, monitor crop progress, and generate reports – all in one place. Make your farm data work for you.',
      benefits: [
        'Track all farm activities in one dashboard',
        'Monitor input costs and ROI',
        'Generate detailed farm reports',
        'Access data anywhere, anytime'
      ]
    },
    {
      title: 'Expert Agronomic Guidance',
      icon: '👨‍🌾',
      description: 'Get continuous support from our agronomy team for interpreting data, planning nutrition schedules, and troubleshooting issues during the crop cycle.',
      benefits: [
        'Personalized crop recommendations',
        'Data-driven decision support',
        'Troubleshooting assistance',
        'Season-long agronomic support'
      ]
    }
  ];

  benefits = [
    {
      title: 'Higher Yields, Better Quality',
      description: 'Make every input count with precise, timely interventions.',
      icon: '📈'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Move beyond guesswork. Act on real-time insights from your own farm.',
      icon: '📊'
    },
    {
      title: 'Sustainable Practices',
      description: 'Reduce overuse of water and fertilizers. Build long-term soil health.',
      icon: '🌱'
    },
    {
      title: 'Complete Visibility and Control',
      description: 'Know what\'s happening on every corner of your land — even when you\'re away.',
      icon: '👁️'
    }
  ];

  visionMissionGoals = {
    vision: {
      icon: '👁️',
      title: 'Vision',
      description: 'Empower every farmer with data-driven insights to maximize yields, minimize costs, and build sustainable, profitable farms for generations to come.'
    },
    mission: {
      icon: '🚀',
      title: 'Mission',
      description: 'Provide accessible, affordable, and actionable agricultural intelligence through field-tested technologies that transform farming from guesswork to precision.'
    },
    goals: {
      icon: '🎯',
      title: 'Goals',
      description: 'Reach 100,000+ farmers globally, reduce input waste by 50%, increase farm productivity by 30%, and ensure every farmer can compete with modern, data-backed decision-making.'
    }
  };
}
