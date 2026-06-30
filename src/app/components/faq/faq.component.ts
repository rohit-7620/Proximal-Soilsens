import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  openFaq: number | null = null;

  technologyFaqs = [
    { 
      q: 'What is the technology behind NutriSensX™ and how does it compare with laboratory based soil tests?', 
      a: 'NutriSensX™ uses advanced electrochemical sensing technology to provide instant soil nutrient analysis right at the farm gate. Like traditional laboratories, it follows a chemical-based testing approach, ensuring lab-grade accuracy—but without the delays or infrastructure. Unlike optical or predictive models, which can compromise on precision, NutriSensX™ delivers direct, science-backed measurements, validated by Tamil Nadu Agricultural University, making it one of the most reliable portable soil testing solutions available today.' 
    },
    { 
      q: 'What is TerraPort™ and how is it different from existing sensor based IoT system?', 
      a: 'TerraPort™ is a compact, portable soil moisture meter that measures moisture at multiple depths and locations across a field—unlike fixed IoT sensors that give data from just one point. It\'s cost-effective, easy to share, and doesn\'t require complex infrastructure. What makes it even more versatile is its plug-and-play design, allowing additional sensors to be connected for broader field monitoring. TerraPort™ offers a practical, scalable alternative to traditional IoT systems, enabling smarter, field-wide irrigation decisions.' 
    },
    { 
      q: 'What is TerraStation™ and where should it be used?', 
      a: 'TerraStation™ is a static IoT-based monitoring system designed for continuous, real-time data collection from a fixed location in the field. It can be used alongside TerraPort™ to provide a more complete picture—offering ongoing insights without manual intervention. Additional sensors, such as rainfall and weather modules, can be integrated to enrich field intelligence. While TerraStation™ offers the benefit of automation, it complements rather than replaces TerraPort™, which captures field-wide variability through its portability. Together, they form a powerful, flexible solution for precision agriculture.' 
    },
    { 
      q: 'How can a customer buy SoilSens products?', 
      a: 'You can easily purchase our products by reaching out to us in any of the following ways: Email us at info@soilsens.com, WhatsApp your requirements to +91 84469 96912, or fill out the contact form on our website: soilsens.com/contact. We\'ll get back to you with product details, pricing, and support options tailored to your needs.' 
    }
  ];

  nutrisensFaqs = [
    { q: 'What is NutriSensX™?', a: 'NutriSensX™ is a palm-sized, portable soil testing device developed by Proximal SoilSens Technologies Pvt Ltd for farmers. It offers real-time on-site soil health testing, measuring pH, electrical conductivity (EC), nitrate, phosphate, potassium, and organic carbon. The device is mobile, easy to use, and operates without electricity or special infrastructure.' },
    { q: 'Why was NutriSensX™ invented?', a: 'NutriSensX™ addresses the limitations of standard soil testing, which are often time-consuming, expensive, and infrastructure-heavy. It makes soil testing more accessible, cost-effective, and timely, particularly for smallholder farmers in underdeveloped regions. By providing immediate soil health data, NutriSensX™ optimizes fertilizer use, enhances production, and minimizes environmental impact.' },
    { q: 'What are the components of the NutriSensX™ kit?', a: 'The NutriSensX™ kit includes: The NutriSensX™ device and cartridge, funnel and 1-gram spoon, vial holder and labeled vials for different tests (pH, N, P, K, and EC), labeled droppers for specific extractants, and various extractant solutions for different nutrients.' },
    { q: 'Why is NutriSensX™ considered a rapid method compared to others?', a: 'NutriSensX™ provides soil health analysis in 45 minutes, whereas traditional laboratory methods can take 15 days to two months. This speed enables farmers to make quick decisions regarding fertilizer use and other agricultural challenges.' },
    { q: 'Can all types of soil be tested using NutriSensX™?', a: 'Yes, NutriSensX™ is compatible with various soil types. It has been successfully tested and implemented in diverse soils across different regions.' },
    { q: 'Why is soil testing important?', a: 'Soil testing is crucial for optimizing fertilizer application, enhancing soil health, increasing yields, and reducing costs and environmental impact. Without proper soil testing, fertilizer misuse can lead to soil degradation, water pollution, and reduced productivity.' },
    { q: 'Which nutrients are tested using NutriSensX™?', a: 'NutriSensX™ measures pH, electrical conductivity (EC), nitrate, phosphate, potassium, and organic carbon.' },
    { q: 'Can micronutrients be tested using NutriSensX™?', a: 'Currently, NutriSensX™ focuses on macronutrients and organic carbon. Future developments may include micronutrient testing capabilities.' },
    { q: 'Who can use NutriSensX™?', a: 'NutriSensX™ is designed for a wide range of users, including farmers, agronomists, agricultural enterprises, and researchers. It is user-friendly and does not require specialized training.' },
    { q: 'What is the Soilsens Farmer app?', a: 'The Soilsens Farmer app integrates with the NutriSensX™ device to provide real-time soil health analysis, instant soil health reports, and agronomic advisories. The app features geotagging, crop monitoring, and access to agricultural experts for personalized guidance.' },
    { q: 'How does NutriSensX™ function?', a: 'NutriSensX™ uses electrochemical sensors to determine nutrient concentrations in soil samples. The redox reactions on the electrodes generate electrical signals proportional to nutrient levels.' },
    { q: 'Is NutriSensX™ a portable device?', a: 'Yes, NutriSensX™ is lightweight (55 grams) and does not require electricity or complex infrastructure, making it suitable for field use.' },
    { q: 'Does NutriSensX™ have an internal battery for portable use?', a: 'No, NutriSensX™ operates without the need for an internal battery or electricity, enhancing its portability.' },
    { q: 'Is NutriSensX™ really a portable device and what is the size and weight of it?', a: 'NutriSensX™ is truly a portable device—it operates without electricity or infrastructure, measures just 4 cm, and weighs less than 100 grams.' },
    { q: 'Can NutriSensX™ be used to test all types of soils across different geographies?', a: 'Yes, NutriSensX™ is designed to test all types of soils—anywhere, anytime—without the need to pre-train or generate region-specific models. Unlike predictive or model-based systems that require calibration for different geographies, NutriSensX™ performs direct, chemical-based testing, ensuring instant, accurate results regardless of soil type or location.' },
    { q: 'Can fertilizers be tested using NutriSensX™?', a: 'Yes, NutriSensX™ can be used to test a variety of organic and inorganic water-soluble fertilizers. We have successfully evaluated several formulations and are open to collaborating on customized applications based on your specific needs.' },
    { q: 'Is NutriSensX™ an IoT enabled device?', a: 'Yes, NutriSensX™ is an IoT-enabled device. It connects seamlessly to a smartphone via the SoilSens FARMER App, allowing data to be pushed to the cloud in real time. The device uses the mobile phone\'s internet connection to generate instant advisories.' },
    { q: 'Does NutriSensX™ require a skilled scientist or technician to operate?', a: 'Not at all. NutriSensX™ is designed to be user-friendly and does not require any scientific background to operate. With just a short training session, anyone can use the device effectively. It is currently being operated by rural youth, women farmers, and even school students as young as 7th and 8th grade.' },
    { q: 'Do we receive fertilizer recommendations by testing soil with NutriSensX™?', a: 'Yes, NutriSensX™ provides tailored fertilizer recommendations based on soil test results via the NutriSensX™ app.' },
    { q: 'For how many crops can I get fertilizer recommendations?', a: 'NutriSensX™ offers fertilizer recommendations for a wide range of crops, tailored to specific nutrient requirements identified during testing.' },
    { q: 'What is the optimal time to test soil?', a: 'Soil testing is best done before planting and after harvesting to monitor nutrient levels and inform fertilizer application decisions.' },
    { q: 'What is the duration of testing one soil sample?', a: 'The entire process takes approximately 45 minutes for the soil solution to settle, with each nutrient measurement taking a few minutes.' },
    { q: 'What is the protocol for soil sample collection, and how much sample is needed for testing with NutriSensX™?', a: 'Since NutriSensX™ uses a chemical-based testing method similar to laboratory protocols, the sample collection process is the same as standard lab procedures. Soil should be collected from multiple points across the field in a zig-zag pattern, mixed thoroughly, and a composite sample should be prepared. The sample must be air-dried in the shade and sieved using a 2 mm sieve to ensure uniformity. NutriSensX™ requires only 50 grams of soil for accurate testing.' }
  ];

  terraportFaqs = [
    { q: 'What is TerraPort™ and how does it work?', a: 'TerraPort™ is a compact, portable soil moisture meter that helps farmers measure moisture levels at multiple depths and locations in the field. It provides a real-time moisture profile, enabling smarter irrigation decisions and improved water use efficiency.' },
    { q: 'How is TerraPort™ different from fixed IoT-based soil moisture sensors?', a: 'Unlike stationary sensors that measure moisture at a single point, TerraPort™ is portable and allows you to test anywhere in the field, at multiple depths. It captures moisture variability across the farm and doesn\'t require installation or permanent infrastructure.' },
    { q: 'Can TerraPort™ be used in all types of soil and crops?', a: 'Yes, TerraPort™ is designed to work across various soil types and cropping systems, including horticulture, field crops, and high-value cash crops. Its readings are consistent and reliable in different agro-climatic conditions.' },
    { q: 'How much training is required to use TerraPort™?', a: 'TerraPort™ is easy to use and requires only a short training session. It\'s already being operated by farmers, FPO staff, and agri-extension workers with minimal technical background.' },
    { q: 'Is TerraPort™ cost-effective for smallholder farmers?', a: 'Yes, TerraPort™ is designed to be affordable and shareable. It can be used by farmer groups, cooperatives, or FPOs to serve multiple farms, making it a highly economical choice compared to traditional IoT systems.' },
    { q: 'Can the data from TerraPort™ be stored or integrated into digital platforms?', a: 'Yes, TerraPort™ can save data to the cloud and its output can be integrated into farm management dashboards or mobile apps, making it ideal for both individual farmers and enterprises.' },
    { q: 'Can TerraPort™ be expanded with other sensors?', a: 'Absolutely. TerraPort™ is plug-and-play ready, meaning additional sensors—such as temperature or humidity sensors—can be attached to extend its functionality for broader field monitoring.' },
    { q: 'Does TerraPort™ require internet to function?', a: 'TerraPort™ works in offline mode for field measurements and can sync data to the cloud when internet is available through a smartphone or gateway. This makes it suitable even in remote rural areas.' }
  ];

  toggleFaq(i: number) {
    this.openFaq = this.openFaq === i ? null : i;
  }
}
