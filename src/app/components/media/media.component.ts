import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharkTankComponent } from '../shark-tank/shark-tank.component';

interface NewsArticle {
  title: string;
  date: string;
  url: string;
  source: string;
}

interface VideoItem {
  title: string;
  url: string;
  videoId: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, SharkTankComponent],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  newsArticles: NewsArticle[] = [
    {
      title: 'Scientists Innovate a Pocket-Sized Device That Tests the Quality of Acres of Soil in Just 5 Minutes',
      date: 'July 12, 2025',
      url: 'https://www.greenmatters.com/pn/scientists-innovate-a-pocket-sized-device-that-tests-the-quality-of-acres-of-soil-in-just-5-minutes',
      source: 'Green Matters'
    },
    {
      title: 'Investors not patient enough for deep tech experts',
      date: 'March 20, 2025',
      url: 'https://www.theweek.in/wire-updates/business/2025/03/28/mes9-ka-nano-science.html',
      source: 'The Week'
    },
    {
      title: 'Proximal Soilsens selected among Cisco-backed Krishi Mangal program for soil testing innovation',
      date: 'June 30, 2024',
      url: 'https://www.republicworld.com/business/industry/proximal-soilsens-selected-among-cisco-backed-krishi-mangal-program-for-soil-testing-innovation',
      source: 'Republic World'
    },
    {
      title: 'Proximal Soilsens, an Indian agritech startup, was supported by the Krishi Mangal accelerator program',
      date: 'June 19, 2024',
      url: 'https://www.business-standard.com/content/press-releases-ani/krishi-mangal-scaling-innovations-for-climate-resilient-agriculture-124061900539_1.html',
      source: 'Business Standard'
    },
    {
      title: "Proximal Soilsens' Affordable Tech Helps Farmers with Rapid and Easy Soil Testing",
      date: 'March 30, 2024',
      url: 'https://www.theweek.in/wire-updates/business/2024/03/30/dcm15-social-alpha---foundation-for-innovation-and-social-entrepreneurship.html',
      source: 'The Week'
    },
    {
      title: "Proximal Soilsens' Affordable Tech Helps Farmers with Rapid and Easy Soil Testing",
      date: 'March 29, 2024',
      url: 'https://economictimes.indiatimes.com/tech/startups/proximal-soilsens-affordable-tech-helps-farmers-with-rapid-and-easy-soil-testing/articleshow/108880276.cms?from=mdr',
      source: 'Economic Times'
    },
    {
      title: 'कुछ ही मिनटों में पता चल जाएगी मिट्टी की हेल्थ, मुंबई की इस IITian ने बनाई ये खास मशीन',
      date: 'December 12, 2023',
      url: 'https://www.aajtak.in/agriculture/agriculture-rural-news/story/mumbai-iitian-scientist-rajul-patkar-made-a-device-to-check-soil-health-within-minutes-sdlbsa-1837230-2023-12-12',
      source: 'Aaj Tak'
    },
    {
      title: 'Soil Testing in 5 Minutes: 2 Scientists Innovate Paper-Based Device To Help Farmers',
      date: 'June 2, 2023',
      url: 'https://thebetterindia.com/319755/pune-scientist-duo-develop-a-portable-soil-health-testing-device-nutrisens-watch-video/',
      source: 'The Better India'
    },
    {
      title: 'NutriSens – A portable device for soil testing device',
      date: 'June 6, 2023',
      url: 'https://fusion.werindia.com/innovation/nutrisens-a-portable-device-for-soil-testing-device',
      source: 'WER India'
    }
  ];

  videos: VideoItem[] = [];

  constructor() {
    const videoData = [
      { title: 'Introduction to Nutrisens Device and Accessories', url: 'https://youtu.be/SLiJpVfuCzA', id: 'SLiJpVfuCzA' },
      { title: 'Preparation of Soil Solution', url: 'https://youtu.be/UsXI4fXglSY', id: 'UsXI4fXglSY' },
      { title: 'Set up of the FARMER app to link Nutrisens device', url: 'https://youtu.be/t3OSpJvm7b0', id: 't3OSpJvm7b0' },
      { title: 'Testing of soil using Nutrisens', url: 'https://youtu.be/HqYRSdknA58', id: 'HqYRSdknA58' },
      { title: 'Important points while testing the soil with Nutrisens', url: 'https://youtu.be/lVCXr8pHilo', id: 'lVCXr8pHilo' },
      { title: 'Soilsens Go - A portable moisture meter from Soilsens', url: 'https://youtu.be/Dr6pkW7-Zts', id: 'Dr6pkW7-Zts' },
      { title: 'Geo tagging field farmer app Hindi', url: 'https://youtu.be/ROlW_KNkfeY', id: 'ROlW_KNkfeY' },
      { title: 'Soilsens FarmerApp Geotagging English', url: 'https://youtu.be/Dtr3w1x0zLg', id: 'Dtr3w1x0zLg' },
      { title: 'Nutrisens Kit', url: 'https://youtu.be/XR6IFfgvGlI', id: 'XR6IFfgvGlI' },
      { title: 'Nutrisens Demo', url: 'https://youtu.be/dOfl7ub6Mbc', id: 'dOfl7ub6Mbc' },
      { title: 'SoilSens Product Overview', url: 'https://youtu.be/CflmAJ33d2g', id: 'CflmAJ33d2g' },
      { title: 'Nutrisens on Sansad TV', url: 'https://youtu.be/0SV7UcvO_Aw', id: '0SV7UcvO_Aw' },
      { title: 'Proximal Soilsens - Precision Irrigation', url: 'https://youtu.be/OmQ4P8pij2w', id: 'OmQ4P8pij2w' },
      { title: 'Revolutionizing Agriculture: SoilSens - Empowering Farmers with Precision', url: 'https://youtu.be/jcywKOdgHks', id: 'jcywKOdgHks' },
      { title: 'Short Video - Operation of NutriSensX', url: 'https://youtu.be/b6d6p8E6hVk', id: 'b6d6p8E6hVk' },
      { title: 'Unboxing NutriSensX', url: 'https://youtu.be/mXCzA263pn0', id: 'mXCzA263pn0' },
      { title: 'Test pH using NutriSensX', url: 'https://youtu.be/Pqb29DFbCrA', id: 'Pqb29DFbCrA' },
      { title: 'Test Soil Nitrate (Nitrogen) using NutriSensX', url: 'https://youtu.be/uQ9SRPAS2yc', id: 'uQ9SRPAS2yc' }
    ];

    this.videos = videoData.map(v => ({
      title: v.title,
      url: v.url,
      videoId: v.id,
      thumbnailUrl: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`
    }));
  }
}
