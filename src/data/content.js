export const profile = {
  name: "Gilbert Uwonkunda",
  title: "Geospatial Data Scientist",
  tagline:
    "For five years I've turned satellite imagery into tools Rwanda's government actually uses — from detecting illegal construction across Kigali to scoring landslide risk for every building in the city. Today I'm a Geospatial Data Scientist on the World Bank SPARC Kigali Project, and building ZoneAgent, Rwanda's first LLM-powered land zoning tool.",
  email: "gilbertuwonkundaa@gmail.com",
  linkedin: "https://linkedin.com/in/gilbert-uwonkunda",
  github: "https://github.com/gilbert-uwonkunda",
  location: "Kigali, Rwanda",
  cvUrl: "/Gilbert_Uwonkunda_CV.pdf",
};

export const about = {
  paragraphs: [
    "I'm a Geospatial Data Scientist at the World Bank Group SPARC Kigali Project, with 5+ years building and deploying geospatial systems for Rwanda's national government. My work sits at the intersection of deep learning, enterprise GIS, land, environment and urban intelligence — designing systems that don't just prototype but actually ship.",
    "At Esri Rwanda, I architected the Urban Dynamic Map for secondary and satellite cities at MININFRA, deployed a MaskRCNN illegal construction detection model for the City of Kigali, and built a real-time landslide risk scoring application serving field inspectors on mobile and web.",
    "I'm currently independently building ZoneAgent, an AI-powered land zoning assistant that lets users query land-use regulations through satellite imagery and natural language. Rwanda's first LLM-powered zoning tool.",
  ],
};

export const experience = [
  {
    role: "Geospatial Data Scientist",
    company: "World Bank — SPARC Kigali Project",
    period: "Apr 2026 – Present",
    location: "Kigali, Rwanda",
    type: "International Org",
    highlights: [
      "Serving as Geospatial Data Scientist on the World Bank SPARC (Smart Parcel Atlas for Resilient Cities) Kigali Project",
      "Applying geospatial AI and data science methods to urban resilience, spatial planning, and city diagnostics for Kigali",
      "Working at the intersection of international development, urban data science, and applied GeoAI",
    ],
  },
  {
    role: "Independent Builder & Lead Engineer",
    company: "ZoneAgent",
    period: "Jan 2026 – Present",
    location: "Kigali, Rwanda",
    type: "Independent Project",
    highlights: [
      "Independently building an AI-powered land governance and urban planning product for Africa",
      "Building ZoneAgent (zoneagent.live) — Natural Language Zoning tool enabling users to query land-use regulations through satellite imagery and conversational AI",
      "Architecting end-to-end product from data pipeline to user-facing web application",
    ],
  },
  {
    role: "Senior Geospatial AI Engineer",
    company: "Esri Rwanda",
    period: "Jan 2025 – Apr 2026",
    location: "Kigali, Rwanda",
    type: "Full-time",
    highlights: [
      "Lead architect for City of Kigali AI-powered Building Inspection Hub — integrating NLA and CoK servers via VPN tunnels with automated daily permit synchronization from BPMIS",
      "Deployed MaskRCNN illegal construction detection model (ResNet50 backbone) actively onboarded for field inspection workflows",
      "Designed complex ArcGIS Enterprise attribute rule workflows covering inspector approval chains, fine management, and automated case status transitions",
      "Developed Python-based REST API for daily permit reconciliation; produced executive-level dashboards and parcel permit mobile application for City of Kigali district leadership",
    ],
  },
  {
    role: "GIS Specialist",
    company: "Esri Rwanda",
    period: "Jun 2022 – Dec 2024",
    location: "Kigali, Rwanda",
    type: "Full-time",
    highlights: [
      "Designed and deployed Urban Dynamic Map (UDM) and Spatial Development Framework for Rwanda's secondary and satellite cities at MININFRA — supporting structured urban growth and district-level planning outside Kigali",
      "Built landslide risk scoring application for City of Kigali, calculating per-building risk scores delivered via mobile and web platforms",
      "Trained custom deep learning model for forest monitoring enabling automated change detection for Rwanda's National Forest Inventory",
      "Architected Rwanda Green Fund ArcGIS Enterprise platform for tracking internationally funded climate initiatives",
      "Deployed real-time Health Emergency Management System using ArcGIS Mission, synchronizing ambulance response across Kigali",
      "Trained and consulted 20+ government institutions across East Africa on enterprise GIS, spatial analysis, and digital transformation",
    ],
  },
  {
    role: "GIS Consultant",
    company: "PSS Ltd",
    period: "Sept 2021 – Jun 2022",
    location: "Kigali, Rwanda",
    type: "Full-time",
    highlights: [
      "Delivered spatial analysis, GIS mapping, and custom geospatial workflow development for client projects across multiple sectors",
    ],
  },
  {
    role: "SDG Coordinator",
    company: "UN SDSN Youth",
    period: "Aug 2020 – Jul 2021",
    location: "Kigali, Rwanda",
    type: "Part-time",
    highlights: [
      "Coordinated SDG youth network programs and supported data collection, stakeholder engagement, and reporting for SDG-aligned initiatives in Rwanda",
    ],
  },
];

export const projects = [
  {
    title: "Illegal Construction AI Detection",
    subtitle: "City of Kigali · ArcGIS Deep Learning",
    description:
      "Built and deployed a MaskRCNN instance segmentation model (ResNet50 backbone) for the City of Kigali's AI-powered Building Inspection Hub — automatically flagging illegal construction and integrating with daily permit synchronization from BPMIS for live field inspection workflows.",
    tags: ["MaskRCNN", "ResNet50", "PyTorch", "ArcGIS Enterprise", "Python"],
    impact: "City of Kigali · Live in production",
    icon: "building",
  },
  {
    title: "Urban Dynamic Map (UDM)",
    subtitle: "MININFRA · National Urban Planning",
    description:
      "Designed and deployed the Urban Dynamic Map and Spatial Development Framework for Rwanda's secondary and satellite cities at MININFRA — providing district-based planning dashboards, indicator reporting, and spatial data infrastructure to support structured urban growth outside Kigali.",
    tags: ["ArcGIS Enterprise", "Urban Intelligence", "Government GIS", "Dashboard"],
    impact: "Secondary & Satellite Cities · MININFRA",
    icon: "map",
  },
  {
    title: "Landslide Risk Scoring Application",
    subtitle: "City of Kigali · Disaster Risk Reduction",
    description:
      "Built an end-to-end risk scoring system calculating per-building landslide exposure scores across Kigali. Delivered via mobile (field) and web (management) platforms for disaster preparedness and urban resilience planning.",
    tags: ["Spatial Risk Modeling", "Mobile GIS", "ArcGIS Pro", "Python", "FastAPI"],
    impact: "City-wide · Mobile + Web",
    icon: "alert",
  },
  {
    title: "Forest Monitoring Deep Learning Model",
    subtitle: "Government of Rwanda · Climate & Land Use",
    description:
      "Trained a custom deep learning model for automated forest change detection supporting Rwanda's National Forest Inventory and government climate compliance reporting.",
    tags: ["Deep Learning", "Change Detection", "Sentinel-2", "ArcGIS Deep Learning"],
    impact: "National · Rwanda Forest Authority",
    icon: "tree",
  },
  {
    title: "Rwanda Green Fund Enterprise Platform",
    subtitle: "Rwanda Green Fund (GCF) · Climate Finance Tracking",
    description:
      "Architected and deployed a full ArcGIS Enterprise platform for the Rwanda Green Fund to track and report on internationally funded climate initiatives across Rwanda.",
    tags: ["ArcGIS Enterprise", "Climate Finance", "Dashboard", "PostgreSQL/PostGIS"],
    impact: "Rwanda Green Fund (GCF)",
    icon: "globe",
  },
  {
    title: "ZoneAgent",
    subtitle: "Independent Project · GeoAI",
    description:
      "Independently building ZoneAgent (zoneagent.live) — an AI-powered land zoning assistant enabling users to query land-use regulations through satellite imagery and natural language conversation. Rwanda's first LLM-powered zoning tool.",
    tags: ["LLM", "Computer Vision", "Satellite Imagery", "FastAPI", "React"],
    impact: "Live at zoneagent.live",
    link: "https://zoneagent.live",
    icon: "bot",
  },
];

export const skills = [
  {
    category: "GeoAI & Deep Learning",
    items: ["PyTorch", "MaskRCNN", "ResNet50", "Vision Transformers", "Google Earth Engine", "ArcGIS Deep Learning", "Computer Vision", "Change Detection"],
  },
  {
    category: "Spatial Engineering",
    items: ["Python (ArcPy, GeoPandas, Rasterio)", "FastAPI", "PostgreSQL / PostGIS", "GDAL", "REST APIs", "Workflow Automation"],
  },
  {
    category: "Enterprise GIS",
    items: ["ArcGIS Enterprise", "ArcGIS Pro", "ArcGIS Mission", "Survey123", "SDE", "Attribute Rules"],
  },
  {
    category: "Data & Analytics",
    items: ["Spatial Risk Modeling", "Satellite Imagery Processing", "Google BigQuery", "SQL", "Executive Dashboards"],
  },
  {
    category: "Domains",
    items: ["Urban Intelligence", "Disaster Risk Reduction", "Land Governance", "Climate Monitoring", "Government GIS"],
  },
];

export const certifications = [
  {
    name: "Enterprise Geodata Management Professional 2201",
    issuer: "Esri",
    date: "Jan 2025",
    credlyUrl: "https://www.credly.com/badges/c04b7892-09fd-46b7-88f8-67871ec8f056/public_url",
    badgeColor: "#007AC2",
  },
  {
    name: "Esri Young Professionals Network Ambassador",
    issuer: "Esri",
    date: "May 2024",
    credlyUrl: "https://www.credly.com/badges/",
    badgeColor: "#007AC2",
  },
  {
    name: "ArcGIS Pro Associate 2101",
    issuer: "Esri",
    date: "Jan 2023",
    credlyUrl: "https://www.credly.com/badges/8bf29950-af81-401e-bdaa-9d2320537be1/public_url",
    badgeColor: "#007AC2",
  },
  {
    name: "Google Advanced Data Analytics Certificate",
    issuer: "Google",
    date: "Jul 2023",
    credlyUrl: "https://www.credly.com/badges/ea424ea6-e1df-4735-8043-bb4c0348d896/public_url",
    badgeColor: "#4285F4",
  },
  {
    name: "Google Project Management Certificate",
    issuer: "Google",
    date: "May 2023",
    credlyUrl: "https://www.credly.com/badges/d9590483-ff37-49ac-928e-bef047c7399d/public_url",
    badgeColor: "#4285F4",
  },
  {
    name: "Databases and SQL for Data Science",
    issuer: "IBM",
    date: "Nov 2023",
    credlyUrl: "https://www.credly.com/badges/ce9bb6a1-0f44-4dfc-9c03-8305c43f0e1c/public_url",
    badgeColor: "#1F70C1",
  },
  {
    name: "Generative AI Overview for Project Managers",
    issuer: "PMI",
    date: "Jun 2024",
    credlyUrl: "https://www.credly.com/badges/7e8cc279-1162-4898-a830-64f1522c3b97/public_url",
    badgeColor: "#0866FF",
  },
  {
    name: "Programming with JavaScript",
    issuer: "Meta",
    date: "Jul 2023",
    credlyUrl: "https://www.credly.com/badges/",
    badgeColor: "#0866FF",
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Geography",
    institution: "University of Rwanda, College of Science and Technology",
    period: "Sept 2016 – Aug 2021",
    location: "Kigali, Rwanda",
  },
];
