import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Collaboration {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-research-development',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './research-development.component.html',
  styleUrls: ['./research-development.component.css']
})
export class ResearchDevelopmentComponent {
  collaborations: Collaboration[] = [
    {
      title: 'Research Partners',
      description: 'Academic institutions and research centers exploring innovative agricultural sensing technologies',
      icon: '🔬'
    },
    {
      title: 'Co-Funded Innovation Projects',
      description: 'Joint development initiatives to advance precision agriculture solutions',
      icon: '💡'
    },
    {
      title: 'On-Ground Implementation Teams',
      description: 'Field testing and deployment partners bringing technology directly to farmers',
      icon: '🌾'
    }
  ];

  milestones = [
    {
      phase: 'Foundation',
      title: 'IIT Bombay Origins',
      description: 'Our journey began at IIT Bombay with exclusive license for initial soil moisture sensor technology',
      year: 'Early Years'
    },
    {
      phase: 'Development',
      title: 'Prototype Building',
      description: 'Built early prototypes at CEN, IITBNF, and INUP facilities',
      year: 'Development Phase'
    },
    {
      phase: 'Field Testing',
      title: 'NNETRA Program',
      description: 'Extensive field trials through the NNETRA program for real-world validation',
      year: 'Testing Phase'
    },
    {
      phase: 'Innovation',
      title: 'Independent Development',
      description: 'Every enhancement developed independently by our dedicated team',
      year: 'Current'
    }
  ];
}
