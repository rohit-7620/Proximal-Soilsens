import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  title: string;
  linkedIn: string;
  photo?: string;
}

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {
  coreTeam: TeamMember[] = [
    {
      name: 'Dr. Rajul Patkar',
      title: 'Founder & CEO',
      linkedIn: 'https://www.linkedin.com/in/rajulpatkar/',
      photo: '/img/people/Rajul_Patkar.jpg'
    },
    {
      name: 'Dr. Mukul Singh',
      title: 'Research Scientist',
      linkedIn: 'https://www.linkedin.com/in/mukul-singh-388a981b/',
      photo: '/img/people/mukul.jpg'
    },
    {
      name: 'Prof. V Ramgopal Rao',
      title: 'Co Founder',
      linkedIn: 'https://www.linkedin.com/in/ramgopalrao/',
      photo: '/img/people/Prof_Rao.jpg'
    }
  ];

  advisors: TeamMember[] = [
    {
      name: 'Dr. Ravinder Kaur',
      title: 'Principal Scientist, IARI, New Delhi',
      linkedIn: 'https://x.com/dr_ravinderkaur?lang=en',
      photo: '/img/people/ravinder-kaur-1.jpg'
    },
    {
      name: 'Mr. Madhu Jamallumudi',
      title: 'Founder and Director, Agrometrics',
      linkedIn: 'https://www.linkedin.com/in/madhuj/',
      photo: '/img/people/MadhuJallamudi.jpg'
    },
    {
      name: 'Mr. Vinay Rathi',
      title: 'Executive Director, Tempsens Instruments (I) Pvt. Ltd.',
      linkedIn: 'https://www.linkedin.com/in/vinay-rathi-2186685/',
      photo: '/img/people/vinay rathi.jpg'
    },
    {
      name: 'Dr. Bhubesh Kumar',
      title: 'Co Founder',
      linkedIn: 'https://www.linkedin.com/in/bhubesh-kumar-/',
      photo: '/img/people/bhuveshkumar.jpg'
    },
    {
      name: 'Prof. Maryam Shojaei Baghini',
      title: 'Professor, IIT Bombay',
      linkedIn: 'https://www.linkedin.com/in/maryam-shojaei-baghini-8537a141/',
      photo: '/img/people/prof-maryam.jpg'
    }
  ];

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }
}
