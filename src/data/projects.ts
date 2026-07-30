export interface CaseStudySection {
  title: string;
  content: string;
  images?: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: "mobile" | "web" | "case-study";
  tags: string[];
  services: string[];
  description: string;
  longDescription: string;
  images: string[];
  thumbnail: string;
  heroImage: string;
  behanceUrl: string;
  color: string;
  year: string;
  role?: string;
  tools?: string[];
  caseStudy?: CaseStudySection[];
}

const CAMP_QUEST_IMAGES = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/23d7fb239646213.692e013fea760.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3cd7fa239646213.692e013fe9704.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/932ec3239646213.692e013fe7cf7.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/90e446239646213.692e013fe902b.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bbf542239646213.692e013fe7630.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/58bd6e239646213.692e013fe0c25.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/57dfc9239646213.692e013fe223f.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f1fe7b239646213.692e013fe421d.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1ad013239646213.692e013fe3938.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/79de26239646213.692e013fe14d3.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d4a717239646213.692e013fe1ca7.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/78beff239646213.692e013fe61e8.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f4fb48239646213.692e013fe8969.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/525987239646213.692e013fe5900.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bfe945239646213.692e013fea062.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d322f6239646213.692e013feb11c.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/306ec1239646213.692e013fe83ec.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/39dc47239646213.692e013fe3316.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9ce04e239646213.692e013fe49f5.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/23d786239646213.692e013fe525a.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ab9afa239646213.692e013fe6e71.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/dec9fd239646213.692e013fe2a6d.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f02aac239646213.692e013febbb7.jpg",
];

const TRUST_DRIVE_IMAGES = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/b09e86244350805.6995a50adfeae.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/837b59244350805.6995a50adf764.jpg",
];

const HR_DASHBOARD_IMAGES = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/141705245897851.69b7ff4d6209b.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/573951245897851.69b7ff4d61b8b.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/89da8b245897851.69b7ff4d615e0.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/8ce3ff245897851.69b7ff4d60a81.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/a11278245897851.69b7ff4d61001.jpg",
];

const CLINICAL_DENTISTRY_IMAGES = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/b6afe0247326701.69d815d1cac41.jpg",
];

const MOBILE_CHECKOUT_IMAGES = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/386c39243883307.698b23e08b4a8.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4006cf243883307.698b23e08c4a5.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5bc11d243883307.698b23e08bce3.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7d4548243883307.698b23e087b9c.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/864057243883307.698b23e08ac47.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bdc734243883307.698b23e08917f.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c22332243883307.698b23e08869d.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d26bff243883307.698b23e08a475.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e2572b243883307.698b23e08705f.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/fb86c5243883307.698b23e089973.jpg",
];

const FINANCE_TRACKER_IMAGES = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/source/147446245898237.69b800c99a29b.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/source/ad6544245898237.69b800c998e93.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/source/c397dc245898237.69b800c99846f.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/source/d972ff245898237.69b800c999889.jpg",
];

const TRAVEL_PLANNING_IMAGES = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/fc1446245898039.69b8000808ea2.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/09e2e6245898039.69b800080942f.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/5fe518245898039.69b80008088cd.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/dc71aa245898039.69b80008099c0.jpg",
];

const ONLINE_LEARNING_IMAGES = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/0959f7245897663.69b7fe7453ed3.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/515a7a245897663.69b7fe74544b5.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/8f237e245897663.69b7fe745301e.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/b317a0245897663.69b7fe745396b.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/c41a2b245897663.69b7fe74534f9.jpg",
];

const SMART_HOME_IMAGES = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/42e629245897437.69b7fd7684fe3.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/7322d9245897437.69b7fd7684b6d.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/b55135245897437.69b7fd7685440.jpg",
];

const FOOD_ORDERING_IMAGES = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/44359c245897207.69b7fc6e5e936.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/7db347245897207.69b7fc6e5e4b0.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/91db7f245897207.69b7fc6e5e035.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/e89fde245897207.69b7fc6e5db73.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/f87c37245897207.69b7fc6e5d5a0.jpg",
];

const FITNESS_TRACKING_IMAGES = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/2f6949245896529.69b7f9b6f11fb.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/38da56245896529.69b7f9b6f2af5.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/aee42e245896529.69b7f9b6f3392.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/b64af3245896529.69b7f9b6f1a07.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/df4bb5245896529.69b7f9b6f2209.jpg",
];

const PRODUCTIVITY_SAAS_IMAGES = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/279f4d245896299.69b7f8d63b347.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/5a0ba6245896299.69b7f8d63ad4d.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7b4a7f245896299.69b7f8d63a6d2.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/c91de4245896299.69b7f8d63b9c1.jpg",
];

export const projects: Project[] = [
  {
    slug: "trust-drive",
    title: "Trust Drive",
    category: "web",
    tags: ["Web Design", "Case Study", "Figma"],
    services: ["UX Research", "UI Design", "Prototyping", "Design Systems"],
    description:
      "A consumer-focused automotive marketplace designed to simplify how people discover, compare, and purchase cars.",
    longDescription:
      "TrustDrive is a consumer-focused automotive marketplace designed to simplify how people discover, compare, and purchase cars. Built for working professionals and families actively planning to buy within the next 30–60 days, the platform brings verified listings, transparent pricing, and side-by-side comparisons into one clean, trustworthy experience.\n\nRather than forcing users to jump between fragmented listings or visit multiple dealerships, TrustDrive centralizes the entire early-stage buying journey — from discovery to booking a test drive.\n\nThe platform focuses on clarity, trust, and simplicity — ensuring users can take meaningful next steps without friction.",
    images: TRUST_DRIVE_IMAGES,
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/projects/404/6ce0c3244350805.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
    heroImage:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/b09e86244350805.6995a50adfeae.jpg",
    behanceUrl: "https://www.behance.net/gallery/244350805/Trust-Drive",
    color: "#1a1a2e",
    year: "2026",
    role: "UX/UI Designer",
    tools: ["Figma", "Prototyping", "User Research"],
    caseStudy: [
      {
        title: "About",
        content:
          "TrustDrive is a consumer-focused automotive marketplace designed to simplify how people discover, compare, and purchase cars. Built for working professionals and families actively planning to buy within the next 30–60 days, the platform brings verified listings, transparent pricing, and side-by-side comparisons into one clean, trustworthy experience.",
      },
      {
        title: "What We Do",
        content:
          "Rather than forcing users to jump between fragmented listings or visit multiple dealerships, TrustDrive centralizes the entire early-stage buying journey — from discovery to booking a test drive. The platform focuses on clarity, trust, and simplicity.",
      },
      {
        title: "Problem We Solve",
        content:
          "The car buying journey is fragmented across multiple platforms, each with inconsistent data, hidden fees, and overwhelming options. Users waste hours comparing listings that don't provide the transparency they need to make confident decisions.",
      },
      {
        title: "Value Proposition",
        content:
          "TrustDrive brings verified listings, transparent pricing, and side-by-side comparisons into one clean, trustworthy experience — ensuring users can take meaningful next steps without friction. Every listing is verified, every price is transparent, and every comparison is fair.",
        images: TRUST_DRIVE_IMAGES,
      },
    ],
  },
  {
    slug: "hr-management-saas-dashboard",
    title: "HR Management SaaS Dashboard",
    category: "web",
    tags: ["SaaS", "Dashboard", "Web Design"],
    services: ["Dashboard Design", "Data Visualization", "UI Design"],
    description:
      "An HR management interface built to simplify workforce operations through organized data visualization and structured navigation.",
    longDescription:
      "An HR management interface built to simplify workforce operations through organized data visualization and structured navigation systems.\n\nThe design prioritizes clarity and efficiency, enabling HR professionals to manage employee data, track performance metrics, and streamline administrative tasks through an intuitive dashboard experience.",
    images: HR_DASHBOARD_IMAGES,
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/projects/404/e43368245897851.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
    heroImage: HR_DASHBOARD_IMAGES[0],
    behanceUrl:
      "https://www.behance.net/gallery/245897851/HR-Management-SaaS-Dashboard",
    color: "#2d3436",
    year: "2026",
    role: "UX/UI Designer",
    tools: ["Figma", "Design Systems"],
  },
  {
    slug: "clinical-dentistry",
    title: "Clinical Dentistry",
    category: "web",
    tags: ["Admin Panel", "Landing Page", "Figma"],
    services: ["Admin Panel Design", "Landing Page", "Content Management"],
    description:
      "An intuitive Admin Panel tailored for dentists, enabling seamless management of professional portfolios and services.",
    longDescription:
      "Designed and developed an intuitive Admin Panel tailored for dentists, enabling them to seamlessly manage their personal information, services, areas of expertise, FAQs, and testimonials. The system empowers practitioners to create, customize, and continuously update their own professional portfolio landing pages with ease.\n\nThe portfolio landing page is fully integrated and accessible directly within the Admin Panel, providing a streamlined and efficient content management experience.",
    images: CLINICAL_DENTISTRY_IMAGES,
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/projects/404/43ba17247326701.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
    heroImage: CLINICAL_DENTISTRY_IMAGES[0],
    behanceUrl: "https://www.behance.net/gallery/247326701/Clinical-Dentistry",
    color: "#00b894",
    year: "2026",
    role: "UX/UI Designer",
    tools: ["Figma", "Web Development"],
  },
  {
    slug: "mobile-checkout-redesign",
    title: "Mobile Checkout Redesign",
    category: "case-study",
    tags: ["UX Design", "Mobile", "Case Study"],
    services: ["UX Research", "Mobile Design", "Conversion Optimization"],
    description:
      "A comprehensive case study on redesigning the mobile checkout experience to improve conversion rates.",
    longDescription:
      "A comprehensive case study exploring the redesign of a mobile checkout flow. The project involved extensive user research, identifying pain points in the existing checkout process, and designing an optimized solution that reduces friction and improves completion rates.\n\nThe redesign focuses on simplifying form inputs, providing clear progress indicators, and implementing smart defaults to minimize user effort during the checkout process.",
    images: MOBILE_CHECKOUT_IMAGES,
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/projects/404/8d35ea243883307.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
    heroImage: MOBILE_CHECKOUT_IMAGES[0],
    behanceUrl:
      "https://www.behance.net/gallery/243883307/Mobile-Checkout-Redesign",
    color: "#6c5ce7",
    year: "2026",
    role: "UX/UI Designer",
    tools: ["Figma", "User Research", "Prototyping"],
  },
  {
    slug: "camp-quest",
    title: "Camp Quest",
    category: "case-study",
    tags: ["UX Research", "Mobile", "Case Study"],
    services: ["UX Research", "Mobile Design", "Accessibility", "Prototyping"],
    description:
      "A mobile app for ordering camping supplies, designed with accessibility and usability for a wide range of users.",
    longDescription:
      "This project focuses on designing a mobile app that enables users to order camping supplies from home, supported by features that ensure accessibility and usability for a wide range of users.\n\nThe design process included user journey mapping, information architecture planning, wireframing, design component creation, and a high-fidelity prototype — all following a thorough UX research methodology.",
    images: CAMP_QUEST_IMAGES,
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/projects/404/4498f9239646213.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
    heroImage: CAMP_QUEST_IMAGES[0],
    behanceUrl: "https://www.behance.net/gallery/239646213/Camp-Quest",
    color: "#e17055",
    year: "2025",
    role: "UX Researcher & Designer",
    tools: ["Figma", "User Research", "Prototyping", "Accessibility"],
    caseStudy: [
      {
        title: "User Journey",
        content:
          "The user journey was mapped to understand how customers discover, evaluate, and purchase camping supplies. Key touchpoints were identified from initial awareness through post-purchase support, revealing opportunities to streamline the ordering process and reduce decision fatigue for users of all experience levels.",
        images: CAMP_QUEST_IMAGES.slice(0, 5),
      },
      {
        title: "Information Architecture",
        content:
          "A clear information architecture was developed to organize product categories, filters, and navigation paths. The IA was validated through card sorting exercises with target users, ensuring that the mental model of camping enthusiasts aligned with the app's structure.",
        images: CAMP_QUEST_IMAGES.slice(5, 10),
      },
      {
        title: "Wireframes",
        content:
          "Low-fidelity wireframes were created to explore layout options and interaction patterns. Multiple iterations were tested with users to validate navigation flows, product discovery paths, and checkout efficiency before moving to high-fidelity design.",
        images: CAMP_QUEST_IMAGES.slice(10, 15),
      },
      {
        title: "Design Components",
        content:
          "A comprehensive design system was built with reusable components including product cards, filter chips, cart modules, and accessibility-first form elements. Each component was designed to meet WCAG 2.1 AA standards while maintaining visual appeal.",
        images: CAMP_QUEST_IMAGES.slice(15, 20),
      },
      {
        title: "Hi-Fi Prototype",
        content:
          "The final high-fidelity prototype brings together all research insights, architectural decisions, and component designs into a polished, interactive experience. The prototype was used for final usability testing and handoff to the development team.",
        images: CAMP_QUEST_IMAGES.slice(20, 23),
      },
    ],
  },
  {
    slug: "personal-finance-tracker",
    title: "Personal Finance Tracker",
    category: "mobile",
    tags: ["Mobile App", "Fintech", "UI/UX"],
    services: ["Mobile Design", "Data Visualization", "UI Design"],
    description:
      "A finance tracking mobile interface designed to help users understand spending patterns through clear data visualization.",
    longDescription:
      "A finance tracking mobile interface designed to help users understand spending patterns through clear data visualization and simple interaction flows.\n\nThe app provides users with actionable insights into their financial habits, enabling better budgeting decisions through intuitive charts, categorized transactions, and personalized spending recommendations.",
    images: FINANCE_TRACKER_IMAGES,
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/projects/404/17f164245898237.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
    heroImage: FINANCE_TRACKER_IMAGES[0],
    behanceUrl:
      "https://www.behance.net/gallery/245898237/Personal-Finance-Tracker-Mobile-App",
    color: "#0984e3",
    year: "2026",
    role: "UX/UI Designer",
    tools: ["Figma", "Prototyping"],
  },
  {
    slug: "travel-planning-web-app",
    title: "Travel Planning Web App",
    category: "web",
    tags: ["Web App", "Travel", "Figma"],
    services: ["Web Design", "UI Design", "Prototyping"],
    description:
      "A travel planning platform UI focused on exploration and trip organization with interactive planning tools.",
    longDescription:
      "A travel planning platform UI focused on exploration and trip organization. The design enhances decision-making through visual content and interactive planning tools.\n\nUsers can discover destinations, build custom itineraries, compare options, and book experiences — all within a seamless and visually rich interface designed to inspire wanderlust.",
    images: TRAVEL_PLANNING_IMAGES,
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/projects/404/d2ae29245898039.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
    heroImage: TRAVEL_PLANNING_IMAGES[0],
    behanceUrl:
      "https://www.behance.net/gallery/245898039/Travel-Planning-Web-App",
    color: "#00cec9",
    year: "2026",
    role: "UX/UI Designer",
    tools: ["Figma", "Prototyping"],
  },
  {
    slug: "online-learning-mobile-app",
    title: "Online Learning Mobile App",
    category: "mobile",
    tags: ["Mobile App", "EdTech", "UI/UX"],
    services: ["Mobile Design", "EdTech Design", "UI Design"],
    description:
      "An e-learning mobile experience supporting focused learning through structured content layouts and progress indicators.",
    longDescription:
      "An e-learning mobile experience that supports focused learning through structured content layouts and motivational progress indicators.\n\nThe app features course browsing, video lessons, interactive quizzes, and progress tracking — all designed to keep learners engaged and motivated throughout their educational journey.",
    images: ONLINE_LEARNING_IMAGES,
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/projects/404/469794245897663.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
    heroImage: ONLINE_LEARNING_IMAGES[0],
    behanceUrl:
      "https://www.behance.net/gallery/245897663/Online-Learning-Mobile-App",
    color: "#fd79a8",
    year: "2026",
    role: "UX/UI Designer",
    tools: ["Figma", "Prototyping"],
  },
  {
    slug: "smart-home-control-dashboard",
    title: "Smart Home Control Dashboard",
    category: "web",
    tags: ["Dashboard", "IoT", "Web Design"],
    services: ["Dashboard Design", "IoT Interface", "Data Visualization"],
    description:
      "A smart home dashboard interface enabling users to monitor and control connected devices effortlessly.",
    longDescription:
      "A smart home dashboard interface enabling users to monitor and control connected devices effortlessly. The design emphasizes real-time feedback and intuitive system control.\n\nThe dashboard provides a centralized view of all connected devices, allowing users to create automation routines, monitor energy usage, and control their smart home ecosystem from a single, beautifully designed interface.",
    images: SMART_HOME_IMAGES,
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/projects/404/59ece3245897437.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
    heroImage: SMART_HOME_IMAGES[0],
    behanceUrl:
      "https://www.behance.net/gallery/245897437/Smart-Home-Control-Dashboard",
    color: "#2d3436",
    year: "2026",
    role: "UX/UI Designer",
    tools: ["Figma", "Prototyping"],
  },
  {
    slug: "food-ordering-web-platform",
    title: "Food Ordering Web Platform",
    category: "web",
    tags: ["Web Platform", "Food Tech", "Figma"],
    services: ["Web Design", "E-Commerce", "UI Design"],
    description:
      "A food ordering web platform focused on seamless browsing and quick purchasing decisions for better conversion.",
    longDescription:
      "A food ordering web platform focused on seamless browsing and quick purchasing decisions. The UI prioritizes visual appeal and efficient user flow for better conversion.\n\nThe platform features restaurant discovery, menu browsing with high-quality food imagery, cart management, and a streamlined checkout process designed to minimize friction and maximize order completion.",
    images: FOOD_ORDERING_IMAGES,
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/projects/404/505324245897207.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
    heroImage: FOOD_ORDERING_IMAGES[0],
    behanceUrl:
      "https://www.behance.net/gallery/245897207/Food-Ordering-Web-Platform",
    color: "#e17055",
    year: "2026",
    role: "UX/UI Designer",
    tools: ["Figma", "Prototyping"],
  },
  {
    slug: "fitness-tracking-mobile-app",
    title: "Fitness Tracking Mobile App",
    category: "mobile",
    tags: ["Mobile App", "Health", "Figma"],
    services: ["Mobile Design", "Health Tech", "UI Design"],
    description:
      "A mobile fitness tracking experience designed to motivate users through clear progress visualization and engaging interactions.",
    longDescription:
      "A mobile fitness tracking experience designed to motivate users through clear progress visualization and engaging interactions. The interface emphasizes accessibility, motivation, and simplicity.\n\nThe app includes workout tracking, goal setting, progress visualization with charts and streaks, and personalized fitness recommendations to keep users on track with their health goals.",
    images: FITNESS_TRACKING_IMAGES,
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/projects/404/577acf245896529.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
    heroImage: FITNESS_TRACKING_IMAGES[0],
    behanceUrl:
      "https://www.behance.net/gallery/245896529/Fitness-Tracking-Mobile-App",
    color: "#00b894",
    year: "2026",
    role: "UX/UI Designer",
    tools: ["Figma", "Prototyping"],
  },
  {
    slug: "productivity-saas-web-app",
    title: "Productivity SaaS Web App",
    category: "web",
    tags: ["SaaS", "Dashboard", "Web App"],
    services: ["SaaS Design", "Dashboard Design", "Web Design"],
    description:
      "A productivity management SaaS interface designed to help distributed teams organize work efficiently.",
    longDescription:
      "A productivity management SaaS interface designed to help distributed teams organize work efficiently. The UI focuses on clarity, task visibility, and collaborative workflows through structured layouts and intuitive navigation.\n\nThe platform includes project boards, task management, team collaboration features, time tracking, and reporting dashboards — all designed to boost team productivity and transparency.",
    images: PRODUCTIVITY_SAAS_IMAGES,
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/projects/404/bbfad0245896299.Y3JvcCwxNDAwLDEwOTUsMCwxOTA.jpg",
    heroImage: PRODUCTIVITY_SAAS_IMAGES[0],
    behanceUrl:
      "https://www.behance.net/gallery/245896299/Productivity-SaaS-Web-App",
    color: "#6c5ce7",
    year: "2026",
    role: "UX/UI Designer",
    tools: ["Figma", "Prototyping"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}
