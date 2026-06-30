import { Injectable, signal } from '@angular/core';
import { CompanyInfo, Service, Project, Stat, Testimonial, TeamMember } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  companyInfo = signal<CompanyInfo>({
    name: 'SoilSens',
    tagline: 'Portable, real-time soil & water testing devices that bring the lab to your field—powering communities with actionable insights through a 360° agri-tech ecosystem.',
    description: 'SoilSens® empowers agribusinesses, NGOs, and FPOs with real-time insights on soil health, crop growth, weather conditions, moisture levels, and satellite data. Our comprehensive ecosystem delivers actionable intelligence, enabling farmers to boost productivity, optimize resources, and implement data-driven precision agriculture at scale.',
    mission: 'To lead in deep-tech green solutions for greater productivity and precision.',
    vision: 'Proximal SoilSens® aims to bring innovative technology for a sustainable world.',
    email: 'rajul@soilsens.com',
    phone: '+91 7045997267',
    address: '109, Crescent, Forest Trails, Paud Road, Bhugaon, Pune 412115',
    social: {
      facebook: 'https://facebook.com/soilsens',
      twitter: 'https://twitter.com/soilsens',
      linkedin: 'https://linkedin.com/company/soilsens'
    }
  });

  services = signal<Service[]>([
    {
      id: '1',
      title: 'NutriSensX',
      description: 'A portable, electrochemical soil nutrient analyzer that instantly measures N, P, K, Ca, Mn, Cu, Fe, Organic Carbon, Carbonate, pH, and EC right in the field. Helps farmers get precise fertilizer recommendations, reduce input costs, and improve soil health—without waiting for lab reports. Empowering science-based farming at every pincode in India.',
      icon: '🔬',
      image: '/Products/Nutrisensx.png',
      features: ['Instant N, P, K & micronutrient analysis', 'Precise fertilizer recommendations', 'Reduces input costs', 'No lab wait time']
    },
    {
      id: '2',
      title: 'TerraPort',
      description: 'A portable soil moisture and microclimate monitoring device designed for on-the-go use. Provides real-time insights on soil water levels, humidity, and temperature—helping optimize irrigation and conserve resources. Ideal for farmer groups, research projects, and water management programs.',
      icon: '💧',
      image: '/Products/terra port.jpg',
      features: ['Real-time soil moisture data', 'Humidity & temperature monitoring', 'Portable & field-ready', 'Ideal for farmer groups & research']
    },
    {
      id: '3',
      title: 'TerraStation',
      description: 'A fixed, multi-depth soil and weather monitoring station for continuous, long-term data collection. Measures soil moisture, temperature, rainfall, and microclimate parameters, enabling accurate irrigation planning and agri-research. Perfect for large farms, institutions, and carbon or climate projects.',
      icon: '📡',
      image: '/Products/terrastation.png',
      features: ['Multi-depth soil monitoring', 'Rainfall & microclimate data', 'Continuous long-term collection', 'Carbon & climate project ready']
    },
    {
      id: '4',
      title: 'TerraStation Lite',
      description: 'A compact and affordable version of TerraStation, built for farmers and cooperatives. Monitors soil moisture and temperature at multiple depths to support water-saving irrigation practices. Simple to install, solar-powered, and ideal for precision agriculture and community farming networks.',
      icon: '☀️',
      image: '/Products/terrastation lite.png',
      features: ['Multi-depth moisture & temperature', 'Solar-powered', 'Easy installation', 'Affordable for cooperatives']
    },
    {
      id: '5',
      title: 'SoilSens Farmer App',
      description: 'A user-friendly mobile platform that empowers farmers with instant soil insights, fertilizer recommendations, and irrigation advice directly from SoilSens devices. Displays easy-to-understand results in local languages, helping farmers make data-driven decisions on the field. Farmers can track soil health, monitor weather, and store past test results—all in one simple dashboard.',
      icon: '📱',
      image: '/Products/farmer app.jpg',
      features: ['Local language support', 'Instant soil insights', 'Fertilizer & irrigation advice', 'Soil health history tracking']
    },
    {
      id: '6',
      title: 'SoilSens AgriWise App',
      description: 'A professional data and analytics platform built for agribusinesses, NGOs, researchers, and government programs. Aggregates field data from multiple SoilSens devices (NutriSensX, TerraPort, TerraStation) to generate regional soil health maps, carbon insights, and MRV-ready datasets. With built-in dashboards, cloud storage, and AI-driven analytics, AgriWise enables large-scale decision-making and precision farming at scale.',
      icon: '🌐',
      image: '/Products/agriwise app.jpg',
      features: ['Regional soil health maps', 'Carbon & MRV-ready datasets', 'AI-driven analytics', 'Cloud storage & dashboards']
    },
    {
      id: '7',
      title: 'Proximal Central',
      description: 'The unified command center connecting all SoilSens devices, apps, and data streams into one powerful platform for enterprise-scale precision agriculture.',
      icon: '🌿',
      image: '/Products/proximal central.png',
      features: ['Unified command center', 'All devices connected', 'Enterprise-scale platform', 'Complete data integration']
    }
  ]);

  projects = signal<Project[]>([
    {
      id: '1',
      title: 'Corporate Agribusiness Solutions',
      category: 'Enterprise',
      description: 'Scalable agricultural technologies for agri-corporates, food processing companies, and exporters.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
      tags: ['Agri-Corporate', 'Food Processing', 'CSR Programs'],
      link: '#'
    },
    {
      id: '2',
      title: 'Farmer Solutions',
      category: 'Farmers',
      description: 'Advanced soil testing and precision farming tools designed specifically for farmers.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
      tags: ['Soil Testing', 'Precision Farming', 'Resource Optimization'],
      link: '#'
    },
    {
      id: '3',
      title: 'FPO & NGO Programs',
      category: 'Organizations',
      description: 'Collaborative solutions for Farmer Producer Organizations and NGOs to drive agricultural transformation.',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop',
      tags: ['FPO', 'NGO', 'Community Programs'],
      link: '#'
    }
  ]);

  stats = signal<Stat[]>([
    { id: '1', value: 40, label: 'Chemical Inputs Reduced', suffix: '%' },
    { id: '2', value: 27, label: 'Water Saved', suffix: '%' },
    { id: '3', value: 15000, label: 'Hectares Impacted', suffix: '+' },
    { id: '4', value: 72, label: 'Crops Covered', suffix: '' },
    { id: '5', value: 25000, label: 'Farmers Reached', suffix: '+' },
    { id: '6', value: 22, label: 'Increase in Productivity', suffix: '%' }
  ]);

  testimonials = signal<Testimonial[]>([
    {
      id: '1',
      name: 'R.P Gajibhiye',
      position: 'College of Agriculture',
      company: 'Nagpur',
      content: 'SoilSens (Terra) Station is easy to use, accurate, practical, affordable and very useful. The use of this system will help the farmers to save water and improve the yield. I believe that this technology is disruptive and can create a huge social impact in agricultural community across India. 22%-25% of saving in water. Also consumption of electricity is reduced. Proximal Soilsens is knowledgeable, supportive and helpful.',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5
    },
    {
      id: '2',
      name: 'Dr. Amit Rastogi',
      position: 'Executive Vice President',
      company: 'Coromandel',
      content: 'The SoilSens could measure soil moisture with a reliable accuracy in the field. Use of SoilSens under our evaluation led to a saving in irrigation water. Satisfactorily working in the field since 2016. A strong support team for timely maintenance and upgrade in field. We are poised to collaborate with Proximal Soilsens Technologies Pvt. Ltd. on implementing the technology at farmer\'s field levels.',
      avatar: 'https://i.pravatar.cc/150?img=33',
      rating: 5
    },
    {
      id: '3',
      name: 'Fr. George D\'abreo',
      position: 'Director',
      company: 'Bosco Gramin Vikas Kendra - Kedgaon, Ahmednagar',
      content: 'Soil Testing Machine NutriSensX™, which is provided by SoilSens, is helping our farmers immensely. We consulted our agronomist and found the results accurate. Their instant advisory based on soil test results is helping our farmers reduce their input costs and improve their land. We are grateful to SoilSens for their innovation.',
      avatar: 'https://i.pravatar.cc/150?img=14',
      rating: 5
    },
    {
      id: '4',
      name: 'Mr. Navnath Shantaram Nathe',
      position: 'Wheat Farmer',
      company: 'Pade, Dindori, Nashik',
      content: 'I have had my soil testing done by Rahul sir from SoilSens. He did the soil testing at my farm and gave the report that exactly prescribed the fertilizer dose for my crop. I saved 25% in the input cost and recommend that other farmers use this technology and benefit from instant soil testing using SoilSens device.',
      avatar: 'https://i.pravatar.cc/150?img=15',
      rating: 5
    },
    {
      id: '5',
      name: 'Fauzlin',
      position: 'Agriculture Analyst',
      company: 'Dayatani Inc (Indonesia)',
      content: 'Our government is working on precision farming. Earlier, we used to send soil samples to the lab, which used to cost us $30 to $40 and used to take 2 to 3 weeks to get the result back. With SoilSens (NutriSensX™) we get the results in real-time and much cheaper. We are now working with them to generate fertilizer recommendations specifically for our farmers based on our local conditions.',
      avatar: 'https://i.pravatar.cc/150?img=45',
      rating: 5
    }
  ]);

  team = signal<TeamMember[]>([
    {
      id: '1',
      name: 'Research Team',
      position: 'Founders — IIT Bombay',
      bio: 'Indigenously developed at IIT Bombay — first company in India to build sensors for precision agriculture.',
      image: 'https://i.pravatar.cc/300?img=14',
      social: { linkedin: 'https://linkedin.com/company/soilsens' }
    }
  ]);

  constructor() {}

  getCompanyInfo() { return this.companyInfo(); }
  getServices() { return this.services(); }
  getProjects() { return this.projects(); }
  getProjectsByCategory(category: string) { return this.projects().filter(p => p.category === category); }
  getStats() { return this.stats(); }
  getTestimonials() { return this.testimonials(); }
  getTeam() { return this.team(); }
}
