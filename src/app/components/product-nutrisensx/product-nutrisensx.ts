import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-nutrisensx',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-nutrisensx.html',
  styleUrl: './product-nutrisensx.css',
})
export class ProductNutrisensx {
  challenges = [
    'Dependency on physical infrastructure.',
    'Samples often need to be sent to distant labs.',
    'Requires skilled personnel to operate testing systems.',
    'Lack of compact and accurate handheld soil testing devices.',
    'Soil testing process is complex and time-consuming.',
    'Results take 15 days to 2 months, missing critical fertilizer application windows.',
    'Farmers lack trust as they don\'t witness the testing process.',
    'Limited actionable insights or agronomic advisories based on test results.',
    'Dependence on electricity, which may be unavailable in rural areas.',
    'Shortage of skilled manpower exacerbates the issue.'
  ];

  solution = {
    current: {
      description: 'Our product, NutriSensX™, currently measures six parameters including pH, Electrical Conductivity, Nitrate, Phosphate, Potassium, and Organic Carbon. We\'ve conducted successful product market fit assessments in India, effectively assisting farmers with their soil testing needs.',
      parameters: ['pH', 'Electrical Conductivity', 'Nitrate', 'Phosphate', 'Potassium', 'Organic Carbon']
    },
    future: {
      description: 'Looking towards the future, we aim to expand the capabilities of NutriSensX™ by incorporating additional parameters such as micronutrients, water quality, petiole analysis, and soil microbes. This expansion will unlock opportunities in the market for cash crops.',
      additionalParams: ['Micronutrients', 'Water Quality', 'Petiole Analysis', 'Soil Microbes']
    },
    dataImpact: 'Furthermore, our initiative will generate a substantial amount of data. Leveraging this data, we plan to develop nutrient and moisture maps spanning various states in India. These maps hold significant value for input companies, governments, and other stakeholders, facilitating informed decision-making and optimizing agricultural practices on a broader scale. An input company would know which area lacks or is in excess of certain nutrients and can drive his market accordingly.'
  };

  sdgs = [
    {
      number: 2,
      title: 'Zero Hunger',
      description: 'NutriSensX™ solutions contribute to zero hunger by improving soil and water management, ultimately boosting crop yields and reducing food insecurity.'
    },
    {
      number: 3,
      title: 'Good Health and Well-being',
      description: 'By promoting sustainable agricultural practices and reducing the use of harmful chemicals, NutriSensX™ helps create safer and healthier food, thereby enhancing overall well-being.'
    },
    {
      number: 6,
      title: 'Clean Water and Sanitation',
      description: 'NutriSensX™ solutions support SDG 6 by facilitating sustainable soil and water management practices, ensuring the availability of clean water and safeguarding water quality for all.'
    },
    {
      number: 12,
      title: 'Responsible Consumption and Production',
      description: 'NutriSensX™ promotes responsible consumption and production by enabling more efficient agricultural practices, reducing waste, and fostering sustainability throughout the agricultural supply chain.'
    },
    {
      number: 13,
      title: 'Climate Action',
      description: 'Through improved soil and water management, NutriSensX™ solutions contribute to climate action by mitigating the impacts of climate change and promoting resilience in agricultural systems.'
    },
    {
      number: 15,
      title: 'Life on Land',
      description: 'NutriSensX™ solutions help sustain healthy soils and ecosystems, supporting biodiversity and promoting life on land by ensuring the preservation of natural habitats and ecological balance.'
    },
    {
      number: 17,
      title: 'Partnerships for the Goals',
      description: 'Collaboration is central to NutriSensX™ approach, as partnerships drive integrated water and soil management efforts, fostering cooperation among stakeholders to achieve common goals related to sustainable agriculture and environmental conservation.'
    }
  ];

  revolutionPoints = [
    {
      title: 'Affordability, Accessibility, Ease of Use',
      description: 'One of the barriers to widespread adoption of soil testing has been the cost and accessibility of testing services. The true revolution in soil testing involves the development of affordable testing solutions that cater to the needs of smallholder farmers and resource-constrained agricultural communities. NutriSensX™ is a premium soil testing machine at an affordable price, providing unmatched value and quality service. It is very simple to use and is accessible to every farmer.'
    },
    {
      title: 'Precision, Accuracy and Time',
      description: 'Accurate and quick soil analysis is crucial for making informed decisions. Revolutionary soil testing technologies leverage advancements in sensor technology to deliver precise and reliable results. Chemical-based soil testing is more reliable than any other methodology. NutriSensX™ has simplified the chemical-based soil testing and reduced the testing time significantly. It provides results in 2 to 3 minutes with recommendations on fertilizer doses for the specific crops.'
    },
    {
      title: 'Integration with Digital Platforms',
      description: 'The integration of soil testing technologies with digital platforms and mobile applications facilitates data collection, analysis, and sharing. Farmers can access soil test results, receive personalized recommendations, and track changes in soil health over time, all from their smartphones or tablets. NutriSensX™ is integrated with FARMER© and AgriWise™© mobile apps catering to farmers and agriculture experts. They offer instant Soil health reports, advisories, alerts and many more features.'
    },
    {
      title: 'Sustainable Soil Management Practices',
      description: 'Ultimately, the true revolution in soil testing is not just about analyzing soil samples but about promoting sustainable soil management practices. We understand that and hence our devices, platforms and our services are exactly doing this.'
    }
  ];

  benefits = [
    { icon: '⏱️', title: 'Save time', description: 'Get results in 2-3 minutes' },
    { icon: '👌', title: 'Easy to use', description: 'Simple operation for everyone' },
    { icon: '🌾', title: 'On-site soil analysis', description: 'Test right in your field' },
    { icon: '💰', title: 'Save Money', description: 'Affordable premium testing' }
  ];

  specs = {
    weight: '55 grams',
    power: 'No electricity or battery needed',
    portability: 'Lightest and smallest soil testing device',
    usability: 'Can be used at any place, any time and by anyone'
  };
}
