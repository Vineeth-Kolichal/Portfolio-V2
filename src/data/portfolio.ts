// Single source of truth for all portfolio content. Edit here, the site updates.
// Content is sourced from the resumes. Empty links are hidden automatically.

export const profile = {
  name: "Vineeth Chandran",
  firstName: "Vineeth",
  role: "Flutter & React Native Developer",
  roles: [
    "Flutter Developer",
    "React Native Developer",
    "Clean Architecture Advocate",
    "Open-Source Tool Builder",
  ],
  location: "Kochi, India",
  email: "vineethchandran5898@gmail.com",
  phone: "+91 8281234434",
  availability: "Open to full-time roles & freelance projects",
  tagline:
    "I build fast, scalable cross-platform mobile apps for Android, iOS and web, from a single codebase, with clean architecture and real-time features baked in.",
  // Add your profile URLs here (leave "" to hide)
  links: {
    github: "",
    linkedin: "",
    pub: "https://pub.dev/packages/easy_init_cli",
  },
};

export const stats = [
  { value: 4, suffix: "+", label: "Years of experience" },
  { value: 8, suffix: "+", label: "Apps shipped" },
  { value: 2, suffix: "", label: "Frameworks mastered" },
  { value: 1, suffix: "", label: "Open-source CLI on pub.dev" },
];

export const about = [
  "Flutter developer with 4+ years of end-to-end mobile development: building, testing and deploying natively compiled apps for Android, iOS and web, plus hands-on React Native experience.",
  "I design large-scale state with BLoC/Cubit and structure apps with Clean Architecture so data, logic and presentation stay separate, testable and easy to grow.",
  "From REST and Socket.IO to Firebase, maps, payments and in-app subscriptions, I integrate the real-world services that turn a UI into a product. I also use AI-assisted tools (Cursor, Antigravity) and always review generated code before it ships.",
];

export const skillGroups = [
  { title: "Cross-Platform", items: ["Flutter", "React Native", "Expo"] },
  { title: "Languages", items: ["Dart", "TypeScript", "JavaScript"] },
  {
    title: "State Management",
    items: ["BLoC / Cubit", "Riverpod", "Provider", "GetX", "Redux Toolkit"],
  },
  {
    title: "Architecture",
    items: ["Clean Architecture", "MVVM", "TDD", "Component-Based Design"],
  },
  {
    title: "APIs & Real-time",
    items: ["REST", "Dio / Retrofit", "Socket.IO", "Firebase (Firestore, Auth, FCM)"],
  },
  {
    title: "UI / UX",
    items: ["Responsive UI", "Material", "Cupertino", "Animations", "Figma / Zeplin"],
  },
  {
    title: "Integrations",
    items: ["Google Maps", "MapLibre", "Razorpay / UPI", "RevenueCat"],
  },
  {
    title: "Tooling",
    items: ["Git / GitHub / GitLab", "Bitrise CI/CD", "Xcode", "Android Studio", "Postman"],
  },
];

export const marquee = [
  "Flutter", "Dart", "React Native", "TypeScript", "BLoC", "Clean Architecture",
  "Firebase", "Socket.IO", "Riverpod", "GetX", "Redux", "REST APIs", "TDD",
  "Google Maps", "Razorpay", "RevenueCat", "Dio", "Hive", "MVVM",
];

export const experience = [
  {
    role: "Flutter Developer",
    company: "Toobler Technologies",
    place: "Kochi, India",
    period: "Jan 2024 – Present",
    points: [
      "Building scalable cross-platform apps with Flutter and React Native across multiple client products.",
      "Partnering with designers and backend teams to ship complex UI/UX and RESTful API integrations.",
      "Keeping performance, maintainability and clean architecture consistent across projects.",
      "Delivering in Agile/Scrum with Git-based CI/CD; gave technical talks and mentored students on mobile development.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Exdera",
    place: "Bangalore, India",
    period: "Nov 2023 – Jan 2024",
    points: [
      "Built a healthcare delivery app for Dr. Mohan's Home Care platform.",
      "Implemented secure authentication, role-based access and real-time data synchronization.",
      "Worked closely with stakeholders to deliver a reliable medical support solution.",
    ],
  },
];

export type Project = {
  title: string;
  kind: string;
  period: string;
  featured?: boolean;
  badge?: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: "DotWe",
    kind: "Bike Rider App · Flutter",
    period: "Feb 2026 – Present",
    featured: true,
    description:
      "A comprehensive app for motorcycle riders and cycling enthusiasts to plan group rides, track routes live, run riding clubs, split trip expenses and get emergency roadside assistance.",
    highlights: [
      "Built from the ground up with Clean Architecture, GetIt DI and Dartz functional error handling",
      "Real-time rider tracking, member status sync and group chat over Socket.IO",
      "Turn-by-turn navigation and roadbooks with Google Maps, MapLibre GL and background location",
      "Razorpay & UPI payments for bookings and the DOTwe Shield roadside-assistance subscription",
    ],
    tech: ["Flutter", "GetX", "Dio", "Retrofit", "Socket.IO", "MapLibre", "Razorpay", "FCM"],
  },
  {
    title: "Kettle",
    kind: "Professional Networking App · Flutter",
    period: "Jun 2024 – Present",
    featured: true,
    description:
      "A mobile app where professionals connect through a swipe-style matching model, with real-time chat and premium subscriptions.",
    highlights: [
      "Scalable Clean Architecture with BLoC state management",
      "Real-time chat with Socket.IO and REST integration via Dio",
      "In-app purchases and subscription tiers using RevenueCat",
      "Unit-tested for reliability; scaffolded with my own easy_init_cli",
    ],
    tech: ["Flutter", "BLoC", "Dio", "Socket.IO", "RevenueCat", "GitLab"],
  },
  {
    title: "NAEL",
    kind: "Employee Services App · React Native",
    period: "1.5 years",
    badge: "On Google Play",
    description:
      "An employee service-workflow app for leave, passport services, airport pickup/drop and internal requests, with real-time status tracking and manager/HR approvals.",
    highlights: [
      "Role-based approve / reject / comment flows for Line Managers and HR",
      "Animations, gesture handlers, push notifications and deep linking",
      "CI/CD with Bitrise; pixel-perfect UI from Figma/Zeplin",
    ],
    tech: ["React Native", "TypeScript", "Redux", "Axios", "React Navigation"],
  },
  {
    title: "Zlash Seller",
    kind: "E-commerce Seller App · React Native",
    period: "May 2025 – Present",
    description:
      "The seller-side mobile app of an e-commerce platform: add and edit products, and process customer orders on the go.",
    highlights: [
      "Reusable components and scalable architecture on Expo",
      "State with Redux Rematch; REST via Axios",
    ],
    tech: ["React Native", "Expo", "Redux Rematch", "Axios"],
  },
  {
    title: "TradingEdge",
    kind: "Trading Journal · Flutter",
    period: "Mar – Apr 2023",
    badge: "On Google Play",
    description:
      "A stock-market trading journal with position-sizing calculators, with local persistence and cloud sync.",
    highlights: ["Firebase Auth + Firestore", "Offline-first storage with Hive", "MVVM with Provider"],
    tech: ["Flutter", "Firebase", "Hive", "Provider", "MVVM"],
  },
  {
    title: "Dr. Mohan's Home Care",
    kind: "Delivery Partner App · Flutter",
    period: "Nov 2023 – Jan 2024",
    description:
      "A Flutter app for home-care delivery partners of a renowned diabetes specialist: selfie attendance, assigned delivery and sample-collection orders, and history.",
    highlights: ["Selfie-based attendance marking", "Order view and update flow with history"],
    tech: ["Flutter", "Riverpod", "REST", "MVC"],
  },
  {
    title: "Music Pulse",
    kind: "Music Player · Flutter",
    period: "May – Aug 2023",
    description:
      "A clean music player with favorites, playlists and synced lyrics via Musixmatch.",
    highlights: ["Favorites and playlists on local SQLite", "Lyrics integration (Musixmatch)"],
    tech: ["Flutter", "GetX", "Sqflite", "MVC"],
  },
];

export const openSource = {
  name: "easy_init_cli",
  tagline: "Scaffold a production-ready Flutter project in seconds.",
  description:
    "An open-source Dart CLI I built to remove repetitive setup. It generates a structured Flutter foundation (Clean Architecture + TDD, or MVVM), creates folders and boilerplate, and automates feature generation and dependency management. Published on pub.dev and used to bootstrap my own client projects.",
  metric: { value: "~40%", label: "less project setup time" },
  href: "https://pub.dev/packages/easy_init_cli",
  tech: ["Dart", "Dart CLI", "Clean Architecture", "MVVM", "TDD"],
};

export const education = {
  degree: "BSc Computer Science",
  school: "Kannur University",
};
